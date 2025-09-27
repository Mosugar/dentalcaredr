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
      description: 'Retrouvez un sourire éclatant avec nos techniques de blanchiment professionnel sûres et efficaces.',
      features: ['Résultats immédiats', 'Sans douleur', 'Effet longue durée'],
      price: 'À partir de 1500 DH'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Couronnes & Prothèses',
      description: 'Solutions durables et esthétiques pour restaurer vos dents avec des matériaux de haute qualité.',
      features: ['Zircone premium', 'Ajustement parfait', 'Esthétique naturelle'],
      price: 'Sur devis'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Implants Dentaires',
      description: 'Remplacez vos dents manquantes avec des implants de dernière génération pour un résultat permanent.',
      features: ['Technologie avancée', 'Biocompatible', 'Résultat permanent'],
      price: 'À partir de 8000 DH'
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: 'Orthodontie',
      description: 'Alignement dentaire moderne avec des solutions discrètes et confortables pour tous les âges.',
      features: ['Appareils invisibles', 'Confort optimal', 'Suivi personnalisé'],
      price: 'À partir de 12000 DH'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Soins Préventifs',
      description: 'Maintenez une santé bucco-dentaire optimale avec nos programmes de prévention personnalisés.',
      features: ['Détartrage professionnel', 'Conseils personnalisés', 'Suivi régulier'],
      price: 'À partir de 300 DH'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Urgences Dentaires',
      description: 'Prise en charge rapide et efficace de vos urgences dentaires avec des soins d&apos;exception.',
      features: ['Disponibilité rapide', 'Soulagement immédiat', 'Soins d&apos;urgence'],
      price: 'Consultation 500 DH'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services Dentaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Au Smile Lounge, Dr. Athar Essakhi vous propose une gamme complète de soins dentaires 
            avec les technologies les plus avancées.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-lg font-semibold text-primary-600">
                  {service.price}
                </span>
                <button
                  onClick={scrollToContact}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                >
                  Réserver
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Prêt à prendre rendez-vous ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour planifier votre consultation avec Dr. Athar Essakhi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/212700404400?text=Bonjour Dr. Athar, je souhaiterais prendre rendez-vous au Smile Lounge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>

            <a 
              href="tel:0700404400"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              0700404400
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;