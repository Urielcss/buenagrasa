"use client"

import { useState } from 'react'
import { Search, X, ChevronLeft, ChevronRight, Filter, ShoppingCart, Trash2 } from 'lucide-react';
import { sneakersData } from '@/data/sneakersData';
import { Sneaker } from '@/src/schemas';

// Tipo para los items del carrito
type CartItem = {
    sneaker: Sneaker;
    selectedColor: string;
    selectedSize: string;
    quantity: number;
};

export default function Page() {
    const [selectedSneaker, setSelectedSneaker] = useState<Sneaker | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [rotation, setRotation] = useState(0);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [showToast, setShowToast] = useState(false);
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

    const handleCloseModal = () => {
        setSelectedSneaker(null);
        setRotation(0);
        setSelectedColor('');
        setSelectedSize('');
    };

    const handleOpenModal = (sneaker: Sneaker) => {
        setSelectedSneaker(sneaker);
        setSelectedColor(sneaker.colors[0]);
        setSelectedSize('');
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setRotation(0);
    };

    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
    };

    const getCurrentImage = () => {
        if (!selectedSneaker) return '';
        if (selectedSneaker.imagesByColor && selectedSneaker.imagesByColor[selectedColor]) {
            return selectedSneaker.imagesByColor[selectedColor];
        }
        return selectedSneaker.image;
    };

    // Agregar al carrito
    const addToCart = () => {
        if (!selectedSneaker || !selectedColor || !selectedSize) {
            alert('Por favor selecciona un color y una talla');
            return;
        }

        const existingItemIndex = cart.findIndex(
            item => item.sneaker.id === selectedSneaker.id && 
                   item.selectedColor === selectedColor && 
                   item.selectedSize === selectedSize
        );

        if (existingItemIndex >= 0) {
            const newCart = [...cart];
            newCart[existingItemIndex].quantity += 1;
            setCart(newCart);
        } else {
            setCart([...cart, {
                sneaker: selectedSneaker,
                selectedColor,
                selectedSize,
                quantity: 1
            }]);
        }
                                                                                                                                                                                                                                                                                                                                                                                
        // Mostrar toast notification y milisegundos
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
        
        handleCloseModal();
    };

    // Remover del carrito
    const removeFromCart = (index: number) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    // Calcular total
    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.sneaker.price * item.quantity), 0);
    };

    // Enviar pedido por WhatsApp
    const sendToWhatsApp = () => {
        if (cart.length === 0) {
            alert('El carrito está vacío');
            return;
        }

        let message = '¡Hola! Quiero realizar el siguiente pedido:%0A%0A';

        cart.forEach((item, index) => {
            message += `*${index + 1}. ${item.sneaker.name}*%0A`;
            message += `   Modelo: ${item.sneaker.model}%0A`;
            message += `   Marca: ${item.sneaker.brand}%0A`;
            message += `   Color: ${item.selectedColor}%0A`;
            message += `   Talla: ${item.selectedSize}%0A`;
            message += `   Cantidad: ${item.quantity}%0A`;
            message += `   Precio: $${item.sneaker.price.toLocaleString('es-MX')}%0A`;
            message += `   Subtotal: $${(item.sneaker.price * item.quantity).toLocaleString('es-MX')}%0A%0A`;
        });

        message += `*TOTAL: $${getTotal().toLocaleString('es-MX')}*`;

        // ANÚMERO DE WHATSAPP
        const phoneNumber = '522491739802';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <section className="min-h-screen pt-24 px-4 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent flex-1">
                            Catálogo
                        </h2>
                        
                        {/* Botón del carrito */}
                        <button
                            onClick={() => setShowCart(!showCart)}
                            className="relative p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-yellow-500/50"
                        >
                            <ShoppingCart size={24} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>

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
                                        {/* IMAGEN QUE CAMBIA SEGÚN EL COLOR SELECCIONADO */}
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
                                                <button
                                                    key={size}
                                                    onClick={() => handleSizeChange(size)}
                                                    className={`px-3 py-2 backdrop-blur-lg border rounded-lg text-center transition-all duration-300 ${
                                                        selectedSize === size
                                                            ? 'bg-yellow-400 border-yellow-400 text-black font-bold scale-110 shadow-lg shadow-yellow-500/50'
                                                            : 'bg-white/5 border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10'
                                                    }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Botón de Agregar al Carrito */}
                                    <button
                                        onClick={addToCart}
                                        disabled={!selectedColor || !selectedSize}
                                        className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                                            selectedColor && selectedSize
                                                ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105 shadow-lg shadow-yellow-500/50 cursor-pointer'
                                                : 'bg-gray-500/20 text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        {!selectedColor || !selectedSize 
                                            ? 'Selecciona color y talla' 
                                            : '🛒 Agregar al Carrito'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal del Carrito */}
            {showCart && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"  
                    onClick={() => setShowCart(false)}
                >
                    <div 
                        className="bg-black/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-bold text-yellow-400">🛒 Carrito de Compras</h2>
                                <button
                                    onClick={() => setShowCart(false)}
                                    className="text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300"
                                    aria-label="Cerrar Carrito"
                                >
                                    <X size={32} />
                                </button>
                            </div>

                            {cart.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingCart size={64} className="mx-auto text-gray-500 mb-4" />
                                    <p className="text-gray-400 text-lg">Tu carrito está vacío</p>
                                    <button
                                        onClick={() => setShowCart(false)}
                                        className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:scale-105 transition-transform"
                                    >
                                        Explorar Catálogo
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-4 mb-6">
                                        {cart.map((item, index) => (
                                            <div 
                                                key={index}
                                                className="backdrop-blur-lg bg-white/5 p-3 rounded-2xl border border-yellow-500/20 flex gap-2 items-start"
                                                //Se comenta esta linea por el contendor full responsive
                                                //className="backdrop-blur-lg bg-white/5 p-4 rounded-2xl border border-yellow-500/20 flex gap-4"
                                            >
                                                <img
                                                    src={item.sneaker.imagesByColor?.[item.selectedColor] || item.sneaker.image}
                                                    alt={item.sneaker.name}
                                                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                                                    //Se comenta linea por contenedor full responsive
                                                    //className="w-24 h-24 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-yellow-400">{item.sneaker.name}</h3>
                                                    <p className="text-sm text-gray-400">{item.sneaker.model}</p>
                                                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm mt-2">
                                                        
                                                    {/*<div className="flex gap-4 text-sm mt-2">*/}
                                                        <span className="bg-white/10 px-2 py-1 rounded">Color: {item.selectedColor}</span>
                                                        <span className="bg-white/10 px-2 py-1 rounded">Talla: {item.selectedSize}</span>
                                                        <span className="bg-white/10 px-2 py-1 rounded">Cant: {item.quantity}</span>
                                                    </div>
                                                    <p className="text-lg font-bold mt-2">
                                                        ${(item.sneaker.price * item.quantity).toLocaleString('es-MX')}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(index)}
                                                    className="text-red-400 hover:text-red-500 transition-colors"
                                                    aria-label="Eliminar producto"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-yellow-500/20 pt-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-2xl font-bold">Total:</span>
                                            <span className="text-3xl font-bold text-yellow-400">
                                                ${getTotal().toLocaleString('es-MX')}
                                            </span>
                                        </div>

                                        <button
                                            onClick={sendToWhatsApp}
                                            className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2 "
                                        >
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                            </svg>
                                            Enviar Pedido por WhatsApp
                                        </button>
                                        <p className="text-center text-sm text-gray-400 mt-3">
                                            Te redirigiremos a WhatsApp para confirmar tu pedido
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-24 right-4 z-[60] animate-slideIn">
                    <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/90 to-green-600/90 border border-green-400/50 rounded-2xl p-4 shadow-2xl shadow-green-500/50 min-w-[320px]">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-bold text-sm">¡Producto agregado!</p>
                                <p className="text-white/80 text-xs">El producto se agregó al carrito</p>
                            </div>
                            <button
                                onClick={() => setShowToast(false)}
                                className="text-white/60 hover:text-white transition-colors"
                                aria-label="Cerrar"
                            >
                                <X size={18} />
                            </button>
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
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
                .animate-slideIn {
                    animation: slideIn 0.4s ease-out;
                }
            `}</style>
        </>
    )
}