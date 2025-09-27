'use client';

import { MapPin, Phone, Clock, Instagram, Mail, Heart, Sparkles, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer with glass effect */}
      <div className="relative bg-gradient-to-br from-primary-50/50 via-white to-accent-50/50 backdrop-blur-lg border-t border-primary-100">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Practice Info with Glass Card */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-2xl p-6 border border-white/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl border-2 border-primary-200">
                    <img 
                      src="https://res.cloudinary.com/dylpck2et/image/upload/v1758982023/Coming_soon_dronlq.jpg" 
                      alt="Dr. Athar Essakhi Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">Dr. Athar</h3>
                    <p className="gradient-text font-medium">Smile Lounge</p>
                  </div>
                </div>
                <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                  Cabinet dentaire moderne à Kénitra, où votre sourire est notre priorité.
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.instagram.com/dr.athar.essakhi_dentiste" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/212700404400" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary-900 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-primary-500" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Accueil', href: '#hero' },
                  { name: 'Services', href: '#services' },
                  { name: 'Instagram', href: '#instagram' },
                  { name: 'Témoignages', href: '#testimonials' },
                  { name: 'FAQ', href: '#faq' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 text-left flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary-900 flex items-center">
                <Heart className="w-4 h-4 mr-2 text-accent-500" />
                Nos Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Blanchiment Dentaire',
                  'Couronnes & Prothèses',
                  'Implants Dentaires',
                  'Orthodontie',
                  'Soins Préventifs',
                  'Urgences Dentaires'
                ].map((service) => (
                  <li key={service} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-2"></span>
                    <span className="text-secondary-600 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary-900">Contact</h4>
              <div className="space-y-4">
                <div className="glass-effect rounded-xl p-3 border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-secondary-500 text-xs">Téléphone</p>
                      <a href="tel:0700404400" className="text-secondary-800 font-semibold hover:text-primary-600 transition-colors">
                        0700404400
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect rounded-xl p-3 border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-secondary-500 text-xs">Localisation</p>
                      <a 
                        href="https://maps.app.goo.gl/vnDpeQJDX8NRUu166" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary-800 font-semibold hover:text-primary-600 transition-colors"
                      >
                        Kénitra, Maroc
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect rounded-xl p-3 border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-secondary-500 text-xs">Horaires</p>
                      <div className="text-secondary-800 text-sm font-medium">
                        <p>Lun-Sam: 9h-19h</p>
                        <p>Dimanche: Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Card */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 blur-xl opacity-50"></div>
            <div className="relative glass-effect rounded-2xl p-6 border border-red-200/30 bg-gradient-to-r from-red-50/50 to-orange-50/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center animate-pulse">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-red-700 font-semibold mb-1">Urgences Dentaires 24/7</h5>
                    <p className="text-red-600 text-sm">Disponible pour vos urgences</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/212700404400?text=Urgence dentaire - Besoin d'aide immédiate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Urgence WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0 flex items-center">
              <span>© 2025 Dr. Athar Essakhi - Smile Lounge</span>
              <Heart className="w-4 h-4 mx-2 text-red-400 fill-current animate-pulse" />
              <span>Tous droits réservés</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/80 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </button>
              <button className="text-white/80 hover:text-white transition-colors duration-200">
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;