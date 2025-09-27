'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageCircle, Star, Users, Clock, Award, Sparkles, Heart } from 'lucide-react';
import styles from '@/styles/hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);
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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className={`${styles.badge} inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium animate-fade-in`}>
              <Sparkles className="w-4 h-4 mr-2" />
              Dr. أثار - Dentiste professionnelle à Kénitra
            </div>
            
            {/* Main Headline */}
            <h1 className={`${styles.headline} animate-fade-in animation-delay-200`}>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold font-display text-secondary-900 leading-tight mb-4">
                Votre sourire,
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold font-display gradient-text leading-tight">
                notre expertise
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`${styles.subtitle} text-lg md:text-xl text-secondary-600 max-w-2xl animate-fade-in animation-delay-400`}>
              Dr. Athar Essakhi vous accueille dans son <strong>Smile Lounge</strong> moderne 
              à Kénitra pour des soins dentaires d'excellence. Redécouvrez le plaisir 
              de sourire avec confiance.
            </p>

            {/* CTA Buttons */}
            <div className={`${styles.ctaButtons} flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600`}>
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-lift"
              >
                <span className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Prendre rendez-vous
                </span>
              </button>
              
              <a
                href="https://wa.me/212700404400?text=Bonjour Dr. Athar, je souhaiterais prendre rendez-vous au Smile Lounge"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-effect text-primary-600 border-2 border-primary-500 hover:bg-primary-50 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-lift"
              >
                <span className="flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  WhatsApp
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className={`${styles.stats} grid grid-cols-3 gap-6 text-center lg:text-left animate-fade-in animation-delay-800`}>
              <div className="group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">800+</div>
                <div className="text-sm text-secondary-600">Patients satisfaits</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">7+</div>
                <div className="text-sm text-secondary-600">Années d'expérience</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">4.9★</div>
                <div className="text-sm text-secondary-600">Note excellence</div>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Visual & Floating Cards */}
          <div className={`${styles.rightContent} relative animate-fade-in animation-delay-1000`}>
            {/* Main Doctor Card */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background decorative card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-6 shadow-2xl"></div>
              
              {/* Main card with doctor's photo */}
              <div className="relative bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Doctor Photo */}
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/dylpck2et/image/upload/v1758982106/KEEP_CALM_your_smile_is_my_mission_dyf9qy.jpg" 
                    alt="Dr. Athar Essakhi - Dentiste Professionnelle" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Doctor info */}
                <h3 className="text-xl lg:text-2xl font-bold mb-2 font-display text-secondary-800">Dr. Athar Essakhi</h3>
                <p className="text-primary-600 mb-2 font-medium">Dentiste Professionnelle</p>
                <p className="text-sm text-secondary-600 mb-4">د.أثار - Smile Lounge</p>
                
                {/* Stars rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                
                {/* Speciality badges */}
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Esthétique</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">Orthodontie</span>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className={`${styles.floatingCard} ${styles.topLeft} absolute -top-4 -left-4 lg:-left-8 bg-white rounded-xl p-4 shadow-lg border border-primary-100 animate-float`}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-success-500 to-success-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-800">800+</div>
                  <div className="text-xs text-secondary-600">Patients</div>
                </div>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.bottomRight} absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-xl p-4 shadow-lg border border-accent-100 animate-float animation-delay-1000`}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-800">Excellence</div>
                  <div className="text-xs text-secondary-600">Garantie</div>
                </div>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.middleRight} absolute top-1/2 -right-8 bg-white rounded-xl p-4 shadow-lg border border-primary-100 animate-float animation-delay-2000 hidden lg:block`}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-800">Passion</div>
                  <div className="text-xs text-secondary-600">Soins</div>
                </div>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.topRight} absolute top-8 -right-4 bg-white rounded-xl p-3 shadow-lg border border-primary-100 animate-float animation-delay-1500 hidden lg:block`}>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-500" />
                <div className="text-xs">
                  <div className="font-semibold text-secondary-800">Rapide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;