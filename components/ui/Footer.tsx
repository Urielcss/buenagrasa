import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-yellow-500/20 backdrop-blur-md bg-black/30 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <Image
                        src="/buenagrasa.png"
                        alt="Buena Grasa Logo"
                        width={300}
                        height={300}
                        className="w-12 h-12 object-cover rounded-lg"
                    />
                    <span className="text-xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        BUENA GRASA
                    </span>
                </div>
                <p className="text-gray-400 text-sm">
                    © 2025 Buena Grasa. Todos los derechos reservados.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Diseñado con pasión en Puebla, México
                </p>
            </div>
        </footer>
    )
}
