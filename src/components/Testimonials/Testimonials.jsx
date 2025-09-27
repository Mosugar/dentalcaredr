'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      id: 1,
      name: "Amira Eloi",
      treatment: "Soins dentaires",
      rating: 5,
      text: "New in town! So kind and professional. You will love the results 😍 Merci Athar!",
      date: "Avis Google"
    },
    {
      id: 2,
      name: "Mohamed Lahboussi",
      treatment: "Consultation complète",
      rating: 5,
      text: "J'ai essayé plusieurs dentiste à Kenitra et à Rabat, mais si vous cherchez un excellent service, un dentiste très professionnel, à l'écoute et prend le temps d'expliquer chaque étape, Smile Lounge c'est le bon endroit. Tout ça avec un prix qui m'a choqué et qui était très raisonnable. J'ai eu une très belle expérience moi et ma mère et je n'hésiterai pas à y retourner et convaincu de ça.",
      date: "Avis Google"
    },
    {
      id: 3,
      name: "Patient satisfait",
      treatment: "Soins dentaires",
      rating: 5,
      text: "Excellente expérience au Smile Lounge avec Dr. Athar. Service professionnel et résultats parfaits. Je recommande vivement ce cabinet dentaire à Kénitra.",
      date: "Avis Google"
    },
    {
      id: 4,
      name: "Client fidèle",
      treatment: "Suivi dentaire",
      rating: 5,
      text: "Cabinet moderne avec une équipe exceptionnelle. Dr. Athar prend vraiment le temps d'écouter et d'expliquer. Très satisfait des soins reçus.",
      date: "Avis Google"
    },
    {
      id: 5,
      name: "Recommandation",
      treatment: "Soins esthétiques",
      rating: 5,
      text: "Smile Lounge offre un service de qualité supérieure. Dr. Athar est très compétente et professionnelle. Résultats dépassant mes attentes.",
      date: "Avis Google"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages de nos patients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences authentiques de nos patients au Smile Lounge
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-200">
              <Quote className="w-12 h-12" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Patient Info */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-primary-600 font-medium mb-1">
                {testimonials[currentTestimonial].treatment}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[currentTestimonial].date}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonial Dots Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">200+</div>
            <div className="text-gray-600">Patients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Rejoignez nos patients satisfaits au Smile Lounge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/212700404400?text=Bonjour Dr. Athar, je souhaiterais prendre rendez-vous après avoir lu les témoignages" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Prendre rendez-vous
            </a>
            <a 
              href="tel:0700404400"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;