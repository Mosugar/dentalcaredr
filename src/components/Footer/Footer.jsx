'use client';

import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Practice Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1758982023/Coming_soon_dronlq.jpg" 
                  alt="Dr. Athar Essakhi Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Athar Essakhi</h3>
                <p className="text-primary-300">Smile Lounge</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cabinet dentaire moderne à Kénitra offrant des soins de qualité supérieure 
              dans un environnement chaleureux et professionnel.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/dr.athar.essakhi_dentiste" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/212700404400" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-300">Navigation</h4>
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
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-300">Nos Services</h4>
            <ul className="space-y-3">
              {[
                'Blanchiment Dentaire',
                'Couronnes & Prothèses',
                'Implants Dentaires',
                'Orthodontie',
                'Soins Préventifs',
                'Urgences Dentaires'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-300">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Téléphone</p>
                  <a href="tel:0700404400" className="text-white hover:text-primary-300 transition-colors duration-200">
                    0700404400
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Localisation</p>
                  <a 
                    href="https://maps.app.goo.gl/vnDpeQJDX8NRUu166" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-300 transition-colors duration-200"
                  >
                    Kénitra, Maroc
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Horaires</p>
                  <div className="text-white text-sm">
                    <p>Lun-Sam: 9h-19h</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:contact@smilelounge-kenitra.ma" 
                    className="text-white hover:text-primary-300 transition-colors duration-200"
                  >
                    contact@smilelounge-kenitra.ma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Dr. Athar Essakhi - Smile Lounge. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-primary-300 transition-colors duration-200">
                Politique de confidentialité
              </button>
              <button className="text-gray-400 hover:text-primary-300 transition-colors duration-200">
                Mentions légales
              </button>
              <button className="text-gray-400 hover:text-primary-300 transition-colors duration-200">
                Conditions d&apos;utilisation
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-red-900 bg-opacity-50 rounded-lg border border-red-700">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-red-300 font-semibold mb-1">Urgences Dentaires</h5>
              <p className="text-red-200 text-sm">Disponible 24h/24 pour les urgences</p>
            </div>
            <a 
              href="https://wa.me/212700404400?text=Urgence dentaire - Besoin d'aide immédiate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Urgence WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;