export default function Nosotros() {
    return (
        <section className="min-h-screen pt-24 px-4 pb-16 flex items-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-12 text-center bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
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
                        <div className="backdrop-blur-lg bg-linear-to-br from-yellow-500/20 to-yellow-600/10 p-8 rounded-2xl border border-yellow-500/30">
                            <h3 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Diseño Futurista</h4>
                                        <p className="text-gray-300 text-sm">Sneakers que marcan tendencia con estética de vanguardia</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-2xl">💎</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Materiales Premium</h4>
                                        <p className="text-gray-300 text-sm">Utilizamos solo los mejores materiales para durabilidad excepcional</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Tecnología Avanzada</h4>
                                        <p className="text-gray-300 text-sm">Amortiguación y soporte de última generación</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
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
    )
}
