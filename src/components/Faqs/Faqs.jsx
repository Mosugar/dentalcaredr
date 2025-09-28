'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation,
  MessageCircle,
  ExternalLink,
  Calendar,
  Heart
} from 'lucide-react';

const MapLocation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-white to-primary-50/30"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Notre Localisation
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Trouvez-nous facilement à <span className="gradient-text">Kénitra</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Le Smile Lounge vous accueille dans un cadre moderne et chaleureux, 
            facilement accessible au cœur de Kénitra
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-3xl overflow-hidden border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Smile Lounge</h3>
                      <p className="text-white/80 text-sm">Dr. Athar Essakhi</p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/bmiqi4p7BD1hVCTr8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map iframe */}
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-accent-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.0180442905803!2d-6.6118722!3d34.24808319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7598f091d8c63%3A0x4216d0391560be7d!2s792R%2B2HG%2C%20Av.%20Mohamed%20V%2C%20K%C3%A9nitra!5e0!3m2!1sen!2sma!4v1759069225527!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-300 group-hover:scale-105"
                  title="Smile Lounge - Dr. Athar Essakhi Location"
                ></iframe>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="glass-effect rounded-2xl p-6 border border-white/50 hover:border-primary-200 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary-900 mb-2">Adresse</h4>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    Av. Mohamed V, Kénitra<br />
                    Facilement accessible en voiture
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/bmiqi4p7BD1hVCTr8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Obtenir l&apos;itinéraire
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-effect rounded-2xl p-6 border border-white/50 hover:border-accent-200 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary-900 mb-2">Horaires</h4>
                  <div className="space-y-1 text-sm text-secondary-600">
                    <div className="flex justify-between">
                      <span>Lundi - Samedi</span>
                      <span className="font-medium">9h - 19h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-red-500 font-medium">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-effect rounded-2xl p-6 border border-white/50 hover:border-primary-200 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary-900 mb-2">Contact</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:0700404400"
                      className="flex items-center text-secondary-600 hover:text-primary-600 text-sm transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      0700404400
                    </a>
                    <a 
                      href="https://wa.me/212700404400"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-secondary-600 hover:text-green-600 text-sm transition-colors duration-200"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="https://wa.me/212700404400?text=Bonjour Dr. Athar, je souhaiterais prendre rendez-vous au Smile Lounge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full group inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Prendre rendez-vous
                <Heart className="w-4 h-4 ml-2 text-red-300 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Parking & Access Info */}
        <div className={`mt-16 grid md:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          <div className="glass-effect rounded-2xl p-6 border border-white/50 hover:border-primary-200 transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MapPin className="w-7 h-7" />
            </div>
            <h4 className="font-semibold text-secondary-900 mb-2">Parking Disponible</h4>
            <p className="text-secondary-600 text-sm">
              Places de parking facilement accessibles à proximité immédiate du cabinet
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-white/50 hover:border-accent-200 transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Navigation className="w-7 h-7" />
            </div>
            <h4 className="font-semibold text-secondary-900 mb-2">Accès Facile</h4>
            <p className="text-secondary-600 text-sm">
              Emplacement central à Kénitra, facilement accessible en transport
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;