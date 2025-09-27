'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Sparkles, 
  Shield, 
  Zap, 
  Heart, 
  Settings,
  Smile,
  ArrowRight,
  Check,
  Star,
  MessageCircle,
  Phone
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Blanchiment Dentaire',
      description: 'Retrouvez un sourire éclatant avec nos techniques de blanchiment professionnel.',
      features: ['Résultats immédiats', 'Sans douleur', 'Effet longue durée'],
      price: 'À partir de 1500 DH',
      gradient: 'from-primary-400 to-primary-600',
      delay: '0'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Couronnes & Prothèses',
      description: 'Solutions durables et esthétiques pour restaurer vos dents.',
      features: ['Zircone premium', 'Ajustement parfait', 'Esthétique naturelle'],
      price: 'Sur devis',
      gradient: 'from-accent-400 to-accent-600',
      delay: '100'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Implants Dentaires',
      description: 'Remplacez vos dents manquantes avec des implants de dernière génération.',
      features: ['Technologie avancée', 'Biocompatible', 'Résultat permanent'],
      price: 'À partir de 8000 DH',
      gradient: 'from-primary-500 to-accent-500',
      delay: '200'
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: 'Orthodontie',
      description: 'Alignement dentaire moderne avec des solutions discrètes.',
      features: ['Appareils invisibles', 'Confort optimal', 'Suivi personnalisé'],
      price: 'À partir de 12000 DH',
      gradient: 'from-primary-400 to-primary-600',
      delay: '300'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Soins Préventifs',
      description: 'Maintenez une santé bucco-dentaire optimale avec nos programmes.',
      features: ['Détartrage pro', 'Conseils personnalisés', 'Suivi régulier'],
      price: 'À partir de 300 DH',
      gradient: 'from-accent-400 to-accent-600',
      delay: '400'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Urgences Dentaires',
      description: 'Prise en charge rapide et efficace de vos urgences dentaires.',
      features: ['Disponibilité rapide', 'Soulagement immédiat', 'Soins d\'urgence'],
      price: 'Consultation 500 DH',
      gradient: 'from-primary-500 to-accent-500',
      delay: '500'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background with subtle gradient matching hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animated badge */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Services d Excellence
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Nos Services <span className="gradient-text">Dentaires</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Au Smile Lounge, Dr. Athar Essakhi vous propose une gamme complète de soins 
            avec les technologies les plus avancées
          </p>
        </div>

        {/* Services Grid with glass morphism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative glass-effect rounded-2xl p-6 border border-white/50 hover:border-primary-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                isVisible ? `animate-fade-in animation-delay-${service.delay}` : 'opacity-0'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon with gradient background */}
              <div className={`relative w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features with animated check marks */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-secondary-600">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price badge with gradient */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100/50">
                <span className={`inline-flex px-3 py-1 bg-gradient-to-r ${service.gradient} text-white rounded-full text-sm font-semibold`}>
                  {service.price}
                </span>
                <ArrowRight className="w-5 h-5 text-primary-500 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Floating star decoration */}
              {hoveredCard === index && (
                <div className="absolute -top-2 -right-2 animate-bounce-slow">
                  <Star className="w-6 h-6 text-accent-400 fill-current" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA with glass effect matching hero style */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-accent-100/50 blur-xl"></div>
          <div className="relative glass-effect rounded-3xl p-8 md:p-10 text-center border border-white/50">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Prêt à sourire ?
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4 mt-4">
              Prenez rendez-vous <span className="gradient-text">aujourd hui</span>
            </h3>
            <p className="text-secondary-600 mb-8 max-w-xl mx-auto">
              Contactez-nous dès maintenant pour planifier votre consultation avec Dr. Athar Essakhi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/212700404400?text=Bonjour Dr. Athar, je souhaiterais prendre rendez-vous au Smile Lounge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                WhatsApp
              </a>

              <a 
                href="tel:0700404400"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                0700404400
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;