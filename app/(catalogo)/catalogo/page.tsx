"use client"

import { useState } from 'react'
import { Search, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { sneakersData } from '@/data/sneakersData';
import { Sneaker } from '@/src/schemas';

export default function Page() {
    const [selectedSneaker, setSelectedSneaker] = useState<Sneaker | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [rotation, setRotation] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        brand: '',
        gender: '',
        priceRange: ''
    });
    const [showFilters, setShowFilters] = useState(false);

    const filteredSneakers = sneakersData.filter(sneaker => {
        const matchesSearch = sneaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sneaker.model.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !filters.category || sneaker.category === filters.category;
        const matchesBrand = !filters.brand || sneaker.brand === filters.brand;
        const matchesGender = !filters.gender || sneaker.gender === filters.gender;

        let matchesPrice = true;
        if (filters.priceRange === 'low') matchesPrice = sneaker.price < 2000;
        else if (filters.priceRange === 'medium') matchesPrice = sneaker.price >= 2000 && sneaker.price < 3000;
        else if (filters.priceRange === 'high') matchesPrice = sneaker.price >= 3000;

        return matchesSearch && matchesCategory && matchesBrand && matchesGender && matchesPrice;
    });

    const handleOpenModal = (sneaker: Sneaker) => {
        setSelectedSneaker(sneaker);
        setSelectedColor(sneaker.colors[0]);
        setRotation(0);
    };

    const handleCloseModal = () => {
        setSelectedSneaker(null);
        setRotation(0);
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    const getCurrentImage = () => {
        if (!selectedSneaker) return '';
        // Si existe imagesByColor y el color seleccionado tiene una imagen, la usa
        if (selectedSneaker.imagesByColor && selectedColor && selectedSneaker.imagesByColor[selectedColor]) {
            return selectedSneaker.imagesByColor[selectedColor];
        }
        // Si no, usa la imagen por defecto
        return selectedSneaker.image;
    };

    return (
        <>
            <section className="min-h-screen pt-24 px-4 pb-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Catálogo
                    </h2>

                    {/* Search Bar */}
                    <div className="mb-8 max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar sneakers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-full focus:outline-none focus:border-yellow-400 transition-colors"
                        />
                    </div>

                    {/* Filters */}
                    <div className="mb-8">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center space-x-2 mx-auto px-6 py-3 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-full hover:border-yellow-400 transition-colors"
                        >
                            <Filter size={20} />
                            <span>Filtros</span>
                        </button>

                        {showFilters && (
                            <div className="mt-4 p-6 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-2xl max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <select
                                        value={filters.category}
                                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                                        className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                                        aria-label="Filtrar por categoría"
                                    >
                                        <option value="">Todas las categorías</option>
                                        <option value="Running">Running</option>
                                        <option value="Casual">Casual</option>
                                        <option value="Basketball">Basketball</option>
                                    </select>

                                    <select
                                        value={filters.brand}
                                        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                                        className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                                        aria-label="Filtrar por marca"
                                    >
                                        <option value="">Todas las marcas</option>
                                        <option value="FutureFit">FutureFit</option>
                                        <option value="ProSport">ProSport</option>
                                        <option value="StreetStyle">StreetStyle</option>
                                        <option value="UrbanWear">UrbanWear</option>
                                    </select>

                                    <select
                                        value={filters.gender}
                                        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                                        className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                                        aria-label="Filtrar por género"
                                    >
                                        <option value="">Todos</option>
                                        <option value="Hombre">Hombre</option>
                                        <option value="Mujer">Mujer</option>
                                    </select>

                                    <select
                                        value={filters.priceRange}
                                        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                                        className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                                        aria-label="Filtrar por rango de precio"
                                    >
                                        <option value="">Todos los precios</option>
                                        <option value="low">Menos de $2,000</option>
                                        <option value="medium">$2,000 - $3,000</option>
                                        <option value="high">Más de $3,000</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sneakers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredSneakers.map(sneaker => (
                            <div
                                key={sneaker.id}
                                onClick={() => handleOpenModal(sneaker)}
                                className="group cursor-pointer backdrop-blur-lg bg-white/5 rounded-2xl border border-yellow-500/20 overflow-hidden hover:scale-105 hover:border-yellow-400 transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={sneaker.image}
                                        alt={sneaker.name}
                                        className="w-full h-full object-cover group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-1">{sneaker.name}</h3>
                                    <p className="text-sm text-gray-400 mb-2">{sneaker.model}</p>
                                    <p className="text-2xl font-bold">${sneaker.price.toLocaleString('es-MX')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal de Detalle */}
            {selectedSneaker && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn" 
                    onClick={handleCloseModal}
                >
                    <div 
                        className="bg-black/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-4xl font-bold text-yellow-400 mb-2">{selectedSneaker.name}</h2>
                                    <p className="text-gray-400">{selectedSneaker.model}</p>
                                </div>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300"
                                    aria-label="Cerrar modal"
                                >
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Vista 360° */}
                                <div className="relative">
                                    <div className="relative h-96 backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden">
                                        <img
                                            src={getCurrentImage()}
                                            alt={`${selectedSneaker.name} - ${selectedColor}`}
                                            style={{ transform: `rotateY(${rotation}deg)` }}
                                            className="w-full h-full object-cover transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex justify-center space-x-4 mt-4">
                                        <button
                                            onClick={() => setRotation(rotation - 45)}
                                            className="p-3 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-full hover:border-yellow-400 hover:scale-110 transition-all"
                                            aria-label="Rotar izquierda"
                                        >
                                            <ChevronLeft />
                                        </button>
                                        <button
                                            onClick={() => setRotation(rotation + 45)}
                                            className="p-3 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-full hover:border-yellow-400 hover:scale-110 transition-all"
                                            aria-label="Rotar derecha"
                                        >
                                            <ChevronRight />
                                        </button>
                                    </div>
                                    <p className="text-center text-sm text-gray-400 mt-2">Vista 360° - Usa las flechas</p>
                                </div>

                                {/* Detalles del producto */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4">${selectedSneaker.price.toLocaleString('es-MX')}</h3>
                                        <p className="text-gray-300">{selectedSneaker.description}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-yellow-400 mb-2">Detalles</h4>
                                        <div className="space-y-2 text-sm">
                                            <p><span className="text-gray-400">Categoría:</span> {selectedSneaker.category}</p>
                                            <p><span className="text-gray-400">Marca:</span> {selectedSneaker.brand}</p>
                                            <p><span className="text-gray-400">Género:</span> {selectedSneaker.gender}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-yellow-400 mb-2">Colores disponibles</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedSneaker.colors.map(color => (
                                                <button
                                                    key={color}
                                                    onClick={() => handleColorChange(color)}
                                                    className={`px-4 py-2 backdrop-blur-lg border rounded-full text-sm transition-all duration-300 ${
                                                        selectedColor === color
                                                            ? 'bg-yellow-400 border-yellow-400 text-black font-bold scale-110 shadow-lg shadow-yellow-500/50'
                                                            : 'bg-white/5 border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10'
                                                    }`}
                                                >
                                                    {color}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">Haz clic en un color para ver la imagen</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-yellow-400 mb-2">Tallas disponibles</h4>
                                        <div className="grid grid-cols-4 gap-2">
                                            {selectedSneaker.sizes.map(size => (
                                                <div
                                                    key={size}
                                                    className="px-3 py-2 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-lg text-center hover:border-yellow-400 hover:bg-white/10 transition-colors cursor-pointer"
                                                >
                                                    {size}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
}