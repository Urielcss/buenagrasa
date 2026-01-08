import { Search, Menu, X, ChevronLeft, ChevronRight, Filter, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function page() {
    return (
        <section className="min-h-screen pt-24 px-4 pb-16 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-5xl font-bold mb-12 text-center bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
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
    )
}
