"use client";

import React, { useState } from 'react';
import { Search, Menu, X, ChevronLeft, ChevronRight, Filter, Phone, Mail, MapPin, Star } from 'lucide-react';
import emailjs from 'emailjs-com'

// Datos de ejemplo para los sneakers
const sneakersData = [
  {
    id: 1,
    name: "Air Future Pro",
    model: "AF-2024",
    price: 2499,
    description: "Diseño futurista con tecnología de amortiguación avanzada",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10"],
    colors: ["Negro", "Blanco", "Amarillo"],
    category: "Running",
    brand: "FutureFit",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
  },
  {
    id: 2,
    name: "Neo Classic",
    model: "NC-500",
    price: 1899,
    description: "Estilo clásico con tecnología moderna",
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5"],
    colors: ["Blanco", "Rosa", "Negro"],
    category: "Casual",
    brand: "StreetStyle",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800"
  },
  {
    id: 3,
    name: "Quantum Leap",
    model: "QL-X",
    price: 3299,
    description: "Máximo rendimiento para atletas profesionales",
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: ["Negro", "Amarillo", "Rojo"],
    category: "Running",
    brand: "ProSport",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"
  },
  {
    id: 4,
    name: "Urban Glide",
    model: "UG-2025",
    price: 2199,
    description: "Perfecto para el día a día en la ciudad",
    sizes: ["5.5", "6", "6.5", "7", "7.5", "8"],
    colors: ["Gris", "Negro", "Blanco"],
    category: "Casual",
    brand: "UrbanWear",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
  },
  {
    id: 5,
    name: "Thunder Strike",
    model: "TS-900",
    price: 2799,
    description: "Diseño agresivo con máxima estabilidad",
    sizes: ["7.5", "8", "8.5", "9", "9.5", "10"],
    colors: ["Negro", "Amarillo", "Blanco"],
    category: "Basketball",
    brand: "ProSport",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
  },
  {
    id: 6,
    name: "Velocity X",
    model: "VX-777",
    price: 2999,
    description: "Velocidad y agilidad en cada paso",
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9"],
    colors: ["Rosa", "Blanco", "Negro"],
    category: "Running",
    brand: "FutureFit",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
  },
  {
    id: 7,
    name: "Shadow Elite",
    model: "SE-2024",
    price: 3499,
    description: "Edición limitada con diseño exclusivo",
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5"],
    colors: ["Negro", "Gris", "Amarillo"],
    category: "Casual",
    brand: "StreetStyle",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
  },
  {
    id: 8,
    name: "Crystal Wave",
    model: "CW-300",
    price: 2399,
    description: "Ligereza extrema con estilo único",
    sizes: ["5.5", "6", "6.5", "7", "7.5"],
    colors: ["Blanco", "Azul", "Rosa"],
    category: "Running",
    brand: "FutureFit",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800"
  },
  {
    id: 9,
    name: "Fusion Pro",
    model: "FP-850",
    price: 2699,
    description: "Fusión perfecta entre estilo y rendimiento",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5"],
    colors: ["Negro", "Amarillo", "Gris"],
    category: "Basketball",
    brand: "ProSport",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800"
  },
  {
    id: 10,
    name: "Aero Lite",
    model: "AL-450",
    price: 1999,
    description: "Ultra ligero para máxima comodidad",
    sizes: ["6", "6.5", "7", "7.5", "8"],
    colors: ["Blanco", "Rosa", "Gris"],
    category: "Casual",
    brand: "UrbanWear",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800"
  },
  {
    id: 11,
    name: "Titan Force",
    model: "TF-1000",
    price: 3799,
    description: "Resistencia y durabilidad extrema",
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: ["Negro", "Rojo", "Amarillo"],
    category: "Basketball",
    brand: "ProSport",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800"
  },
  {
    id: 12,
    name: "Eclipse Runner",
    model: "ER-650",
    price: 2599,
    description: "Diseño elegante para corredores exigentes",
    sizes: ["5.5", "6", "6.5", "7", "7.5", "8"],
    colors: ["Negro", "Morado", "Blanco"],
    category: "Running",
    brand: "FutureFit",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800"
  },
  {
    id: 13,
    name: "Storm Breaker",
    model: "SB-2025",
    price: 2899,
    description: "Preparado para cualquier terreno",
    sizes: ["7.5", "8", "8.5", "9", "9.5", "10"],
    colors: ["Gris", "Negro", "Amarillo"],
    category: "Casual",
    brand: "UrbanWear",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800"
  },
  {
    id: 14,
    name: "Nova Shine",
    model: "NS-400",
    price: 2299,
    description: "Brilla con estilo en cada movimiento",
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5"],
    colors: ["Blanco", "Dorado", "Rosa"],
    category: "Casual",
    brand: "StreetStyle",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800"
  },
  {
    id: 15,
    name: "Apex Legend",
    model: "AL-999",
    price: 3999,
    description: "La cima del rendimiento deportivo",
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5"],
    colors: ["Negro", "Amarillo", "Rojo"],
    category: "Basketball",
    brand: "ProSport",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800"
  },
  {
    id: 16,
    name: "Zen Flow",
    model: "ZF-300",
    price: 2099,
    description: "Comodidad zen para tu día a día",
    sizes: ["5.5", "6", "6.5", "7", "7.5"],
    colors: ["Beige", "Blanco", "Rosa"],
    category: "Casual",
    brand: "UrbanWear",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800"
  },
  {
    id: 17,
    name: "Phantom Edge",
    model: "PE-800",
    price: 3199,
    description: "Sigiloso y poderoso como una sombra",
    sizes: ["7.5", "8", "8.5", "9", "9.5", "10"],
    colors: ["Negro", "Gris", "Amarillo"],
    category: "Running",
    brand: "FutureFit",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800"
  },
  {
    id: 18,
    name: "Grace Motion",
    model: "GM-550",
    price: 2499,
    description: "Movimiento elegante y fluido",
    sizes: ["6", "6.5", "7", "7.5", "8"],
    colors: ["Blanco", "Rosa", "Gris"],
    category: "Running",
    brand: "FutureFit",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800"
  },
  {
    id: 19,
    name: "Blaze Trail",
    model: "BT-700",
    price: 2799,
    description: "Domina cualquier sendero con estilo",
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5"],
    colors: ["Naranja", "Negro", "Amarillo"],
    category: "Casual",
    brand: "StreetStyle",
    gender: "Hombre",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800"
  },
  {
    id: 20,
    name: "Serenity Plus",
    model: "SP-200",
    price: 1799,
    description: "Paz y confort en cada paso",
    sizes: ["5.5", "6", "6.5", "7", "7.5", "8"],
    colors: ["Blanco", "Azul Claro", "Rosa"],
    category: "Casual",
    brand: "UrbanWear",
    gender: "Mujer",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"
  }
];

const App = () => {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSneaker, setSelectedSneaker] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    gender: '',
    priceRange: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const scrollToSection = (section) => {
    setCurrentSection(section);
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* Aquí puedes colocar tu logo - Reemplaza el src con la ruta de tu logo */}
              <img 
                src="/buenagrasa.png" 
                alt="Buena Grasa Logo" 
                className="w-12 h-12 object-cover rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                 BUENA GRASA
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['inicio', 'catálogo', 'nosotros', 'referencias', 'contacto'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all ${
                    currentSection === section
                      ? 'text-yellow-400 font-semibold'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-yellow-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-black/90 border-t border-yellow-500/20">
            {['inicio', 'catálogo', 'nosotros', 'referencias', 'contacto'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-yellow-500/10 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {currentSection === 'inicio' && (
        <section className="min-h-screen flex items-center justify-center pt-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                BUENA GRASA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              El futuro de los sneakers está aquí. Descubre nuestra colección exclusiva de calzado de última generación.
            </p>
            <button
              onClick={() => scrollToSection('catálogo')}
              className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/50 overflow-hidden group"
            >
              <span className="relative z-10">Explorar Catálogo</span>
              <span className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:opacity-50 animate-border-flow"></span>
            </button>
            <style>{`
              @keyframes border-flow {
                0% {
                  transform: translateX(-100%) rotate(0deg);
                }
                100% {
                  transform: translateX(100%) rotate(360deg);
                }
              }
              .animate-border-flow {
                animation: border-flow 2s linear infinite;
              }
            `}</style>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">20+</h3>
                <p className="text-gray-400">Modelos Exclusivos</p>
              </div>
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">100%</h3>
                <p className="text-gray-400">Calidad Premium</p>
              </div>
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">24/7</h3>
                <p className="text-gray-400">Atención al Cliente</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catálogo Section */}
      {currentSection === 'catálogo' && (
        <section className="min-h-screen pt-24 px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Catálogo
            </h2>

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
                      onChange={(e) => setFilters({...filters, category: e.target.value})}
                      className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    >
                      <option value="">Todas las categorías</option>
                      <option value="Running">Running</option>
                      <option value="Casual">Casual</option>
                      <option value="Basketball">Basketball</option>
                    </select>

                    <select
                      value={filters.brand}
                      onChange={(e) => setFilters({...filters, brand: e.target.value})}
                      className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    >
                      <option value="">Todas las marcas</option>
                      <option value="FutureFit">FutureFit</option>
                      <option value="ProSport">ProSport</option>
                      <option value="StreetStyle">StreetStyle</option>
                      <option value="UrbanWear">UrbanWear</option>
                    </select>

                    <select
                      value={filters.gender}
                      onChange={(e) => setFilters({...filters, gender: e.target.value})}
                      className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    >
                      <option value="">Todos</option>
                      <option value="Hombre">Hombre</option>
                      <option value="Mujer">Mujer</option>
                    </select>

                    <select
                      value={filters.priceRange}
                      onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                      className="px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSneakers.map(sneaker => (
                <div
                  key={sneaker.id}
                  onClick={() => setSelectedSneaker(sneaker)}
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
      )}

      {/* Modal de Detalle */}
      {selectedSneaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg" onClick={() => setSelectedSneaker(null)}>
          <div className="bg-black/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-4xl font-bold text-yellow-400 mb-2">{selectedSneaker.name}</h2>
                  <p className="text-gray-400">{selectedSneaker.model}</p>
                </div>
                <button
                  onClick={() => setSelectedSneaker(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="relative h-96 backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden">
                    <img
                      src={selectedSneaker.image}
                      alt={selectedSneaker.name}
                      style={{ transform: `rotateY(${rotation}deg)` }}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <button
                      onClick={() => setRotation(rotation - 45)}
                      className="p-3 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-full hover:border-yellow-400 transition-colors"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={() => setRotation(rotation + 45)}
                      className="p-3 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-full hover:border-yellow-400 transition-colors"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2">Vista 360° - Usa las flechas</p>
                </div>

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
                        <div
                          key={color}
                          className="px-3 py-1 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-full text-sm"
                        >
                          {color}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Tallas disponibles</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {selectedSneaker.sizes.map(size => (
                        <div
                          key={size}
                          className="px-3 py-2 bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-lg text-center hover:border-yellow-400 transition-colors cursor-pointer"
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

      {/* Nosotros Section */}
      {currentSection === 'nosotros' && (
        <section className="min-h-screen pt-24 px-4 pb-16 flex items-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Sobre Nosotros
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Nuestra Misión</h3>
                  <p className="text-gray-300 leading-relaxed">
                    En Buena Grasa, revolucionamos la industria del calzado deportivo fusionando diseño futurista con tecnología de vanguardia. Nos dedicamos a ofrecer sneakers que no solo elevan tu estilo, sino que también maximizan tu rendimiento.
                  </p>
                </div>

                <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Nuestra Visión</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ser la marca líder en innovación de calzado deportivo en México y América Latina, estableciendo nuevos estándares de calidad, diseño y experiencia del cliente en la industria.
                  </p>
                </div>

                <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Nuestros Valores</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-400">✦</span>
                      <span>Innovación constante en diseño y tecnología</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-400">✦</span>
                      <span>Calidad premium en cada producto</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-400">✦</span>
                      <span>Compromiso con la satisfacción del cliente</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-400">✦</span>
                      <span>Pasión por el estilo urbano y deportivo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="backdrop-blur-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 p-8 rounded-2xl border border-yellow-500/30">
                  <h3 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Diseño Futurista</h4>
                        <p className="text-gray-300 text-sm">Sneakers que marcan tendencia con estética de vanguardia</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💎</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Materiales Premium</h4>
                        <p className="text-gray-300 text-sm">Utilizamos solo los mejores materiales para durabilidad excepcional</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Tecnología Avanzada</h4>
                        <p className="text-gray-300 text-sm">Amortiguación y soporte de última generación</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Ediciones Exclusivas</h4>
                        <p className="text-gray-300 text-sm">Modelos limitados que no encontrarás en otro lugar</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-yellow-500/20 text-center">
                    <h4 className="text-3xl font-bold text-yellow-400 mb-2">8+</h4>
                    <p className="text-gray-400 text-sm">Años de Experiencia</p>
                  </div>
                  <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-yellow-500/20 text-center">
                    <h4 className="text-3xl font-bold text-yellow-400 mb-2">5K+</h4>
                    <p className="text-gray-400 text-sm">Clientes Satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

       {/* Testimonios Section */}
      {currentSection === 'referencias' && (
        <section className="min-h-screen pt-24 px-4 pb-16 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Referencias de Nuestros Clientes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Los mejores sneakers que he tenido. La calidad es excepcional y el diseño es simplemente espectacular. Definitivamente volveré a comprar."
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
                    alt="Carlos Mendoza" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div>
                    <h4 className="font-bold">Carlos Mendoza</h4>
                    <p className="text-sm text-gray-400">Ciudad de México</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Increíble comodidad y estilo. Perfecto para el gimnasio y para salir. La atención al cliente fue excelente, muy recomendado."
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                    alt="Ana Rodríguez" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div>
                    <h4 className="font-bold">Ana Rodríguez</h4>
                    <p className="text-sm text-gray-400">Guadalajara</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Totalmente confiables me realizarón mi envío hasta mi ciudad, dandome seguridad de volver a comprar."
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                    alt="Luis Hernández" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div>
                    <h4 className="font-bold">Luis Hernández</h4>
                    <p className="text-sm text-gray-400">Monterrey</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Buena Grasa superó todas mis expectativas. El empaque es premium y los sneakers son aún mejores en persona. ¡Amor a primera vista!"
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                    alt="María González" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div>
                    <h4 className="font-bold">María González</h4>
                    <p className="text-sm text-gray-400">Puebla</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Perfecto balance entre estilo urbano y funcionalidad deportiva. Los uso para correr y para eventos casuales. Versátiles al máximo."
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
                    alt="Roberto Sánchez" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div>
                    <h4 className="font-bold">Roberto Sánchez</h4>
                    <p className="text-sm text-gray-400">Querétaro</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "La relación calidad-precio es insuperable. Son sneakers premium a precios accesibles. Ya compré mi segundo par y planeo comprar más."
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" 
                    alt="Diana Torres" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div>
                    <h4 className="font-bold">Diana Torres</h4>
                    <p className="text-sm text-gray-400">Tijuana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contacto Section */}
      {currentSection === 'contacto' && (
        <section className="min-h-screen pt-24 px-4 pb-16 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Contacto
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">Información de Contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <Phone className="text-yellow-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Teléfono</p>
                        <p className="font-semibold">+52 222 123 4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="text-yellow-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="font-semibold">hola@buenagrasa.mx</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <MapPin className="text-yellow-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Ubicación</p>
                        <p className="font-semibold">Puebla, Puebla, México</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 p-8 rounded-2xl border border-yellow-500/30">
                  <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                    <p>Sábados: 10:00 AM - 6:00 PM</p>
                    <p>Domingos: 11:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Envíanos un Mensaje</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="+52 222 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-yellow-500/50"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 backdrop-blur-md bg-black/30 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">

          {/* Logo footer */}
              <img 
                src="/buenagrasa.png" 
                alt="Buena Grasa Logo" 
                className="w-12 h-12 object-cover rounded-lg"
              />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              BUENA GRASA
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Buena Grasa. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Developed by TriCode Studio 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
