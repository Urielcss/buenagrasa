"use client"

import { FormEvent, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Search, Menu, X, ChevronLeft, ChevronRight, Filter, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function ContactPage() {
    const form = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('idle');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = "service_accu2n2";
        const TEMPLATE_ID = "template_qu6k9tj";
        const PUBLIC_KEY = "h2M6LnDopb7ilO8J-";

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log('Success:', result.text);
                    setStatus('success');

                    setFormData({ name: '', email: '', phone: '', message: '' });

                    setTimeout(() => {
                        setStatus('idle');
                    }, 3000);
                }, (error) => {
                    console.log('Error:', error.text);
                    setStatus('error');

                    setTimeout(() => setStatus('idle'), 3000);
                });
        }
    };

    return (
        <section className="min-h-screen pt-24 px-4 pb-16 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-5xl font-bold mb-12 text-center bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
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

                        <div className="backdrop-blur-lg bg-linear-to-br from-yellow-500/20 to-yellow-600/10 p-8 rounded-2xl border border-yellow-500/30">
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

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="block text-sm font-medium mb-2">Nombre</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="+52 222 123 4567"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Mensaje</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                                    placeholder="Cuéntanos cómo podemos ayudarte..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full px-8 py-4 font-bold rounded-lg transition-all shadow-lg shadow-yellow-500/50 
                                    ${status === 'sending' ? 'bg-gray-600 text-gray-300' : 'bg-linear-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105'}
                                `}
                            >

                                {status === 'sending' ? 'Enviando...' :
                                    status === 'success' ? '¡Mensaje Enviado!' :
                                        'Enviar Mensaje'}
                            </button>
                            {status === 'error' && (
                                <p className="text-red-500 text-center mt-2">Hubo un error al enviar. Intenta de nuevo.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}