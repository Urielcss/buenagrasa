"use client";
import Link from 'next/link'

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                        BUENA GRASA
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    El futuro de los sneakers está aquí. Descubre nuestra colección exclusiva de calzado de última generación.
                </p>
                
                <Link
                    href="/catalogo"
                    className="inline-block relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/50 overflow-hidden group"
                >
                    <span className="relative z-10">Explorar Catálogo</span>
                    <span className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:opacity-50 animate-border-flow"></span>
                </Link>

                <style jsx>{`
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
                        <h3 className="text-3xl font-bold text-yellow-400 mb-2">100+</h3>
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
    )
}