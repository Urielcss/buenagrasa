import React from 'react'
export default function Nosotros() {
    return (
        <section className="min-h-screen pt-24 px-4 pb-16 flex items-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-12 text-center bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Sobre Nosotros
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Nuestra Misión</h3>
                            <p className="text-gray-300 leading-relaxed">
                                En Buena Grasa conectamos a la gente con los sneakers más buscados del momento. Seleccionamos los mejores pares para que eleves tu estilo y vivas la cultura sneaker como se debe.
                            </p>
                        </div>

                        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Nuestra Visión</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Ser una tienda de confianza en la venta de sneakers en Puebla y todo México, donde siempre encuentres estilo, buen precio y buen vibe.
                            </p>
                        </div>

                        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Nuestros Valores</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-center space-x-2">
                                    <span className="text-yellow-400">✦</span>
                                    <span>Trato real y cercano</span>
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
                                    <span>Buen vibe siempre</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="backdrop-blur-lg bg-linear-to-br from-yellow-500/20 to-yellow-600/10 p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400 hover:from-yellow-500/30 hover:to-yellow-600/20 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                            <h3 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Sneakers en tendencia</h4>
                                        <p className="text-gray-300 text-sm">Seleccionamos modelos actuales que combinan estilo y personalidad.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-2xl">💎</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Modelos Premium</h4>
                                        <p className="text-gray-300 text-sm">Los mejores materiales para durabilidad excepcional</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-2xl">🔐</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Compra Confiable</h4>
                                        <p className="text-gray-300 text-sm">Seguimiento y transparencia en cada venta.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-2xl">💳</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Facilidad De Pago</h4>
                                        <p className="text-gray-300 text-sm">Modelos limitados que no encontrarás en otro lugar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-yellow-500/20 text-center hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                                <h4 className="text-3xl font-bold text-yellow-400 mb-2">8+</h4>
                                <p className="text-gray-400 text-sm">Años de Experiencia</p>
                            </div>
                            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-yellow-500/20 text-center hover:border-yellow-400 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer">
                                <h4 className="text-3xl font-bold text-yellow-400 mb-2">5K+</h4>
                                <p className="text-gray-400 text-sm">Clientes Satisfechos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}