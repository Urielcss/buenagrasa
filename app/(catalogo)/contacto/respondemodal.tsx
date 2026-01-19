import React from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';

interface ResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: 'success' | 'error' | 'idle' | 'sending';
}

export default function ResponseModal({ isOpen, onClose, status }: ResponseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      <div className="relative bg-neutral-900 border border-yellow-500/30 p-8 rounded-2xl w-full max-w-md shadow-2xl shadow-yellow-500/10 transform transition-all scale-100">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center py-8">
          {status === 'success' ? (
            <>
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-400 mb-6">Hemos recibido tus datos correctamente. Nos pondremos en contacto contigo pronto.</p>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <AlertCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Error al enviar</h3>
              <p className="text-gray-400 mb-6">Hubo un problema al procesar tu solicitud. Por favor intenta de nuevo.</p>
            </>
          )}

          <button
            onClick={onClose}
            className="w-full px-8 py-3 font-bold rounded-lg bg-linear-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105 transition-all shadow-lg shadow-yellow-500/20"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}