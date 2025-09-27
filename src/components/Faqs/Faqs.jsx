'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Quels sont les horaires d'ouverture du Smile Lounge ?",
      answer: "Nous sommes ouverts du lundi au samedi de 9h à 19h. Le dimanche, nous sommes fermés. Pour les urgences en dehors de ces horaires, n'hésitez pas à nous contacter via WhatsApp."
    },
    {
      id: 2,
      question: "Comment prendre rendez-vous avec Dr. Athar ?",
      answer: "Vous pouvez prendre rendez-vous de plusieurs façons : par téléphone au 0700404400, via WhatsApp, ou en utilisant notre formulaire de contact en ligne. Nous répondons généralement dans les plus brefs délais."
    },
    {
      id: 3,
      question: "Acceptez-vous les urgences dentaires ?",
      answer: "Oui, nous prenons en charge les urgences dentaires. Contactez-nous immédiatement au 0700404400 ou via WhatsApp. Nous ferons notre possible pour vous recevoir le jour même en cas d'urgence."
    },
    {
      id: 4,
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Nous acceptons les espèces, les chèques bancaires, les cartes de crédit (Visa, Mastercard), et les virements bancaires. Des facilités de paiement peuvent être arrangées pour certains traitements selon les cas."
    },
    {
      id: 5,
      question: "Le blanchiment dentaire est-il douloureux ?",
      answer: "Le blanchiment dentaire professionnel que nous pratiquons est généralement indolore. Certains patients peuvent ressentir une légère sensibilité temporaire, mais nous utilisons des techniques et produits qui minimisent l'inconfort."
    },
    {
      id: 6,
      question: "Combien de temps dure la pose d'un implant dentaire ?",
      answer: "La pose d'un implant dentaire prend généralement entre 1h et 1h30. Cependant, le processus complet d'ostéointégration peut prendre 3 à 6 mois avant la pose de la couronne définitive."
    },
    {
      id: 7,
      question: "L'orthodontie invisible est-elle efficace pour tous les cas ?",
      answer: "L'orthodontie invisible (aligneurs transparents) est efficace pour la majorité des cas d'alignement dentaire. Lors de votre consultation, Dr. Athar évaluera si cette solution convient à votre situation spécifique."
    },
    {
      id: 8,
      question: "Proposez-vous des devis gratuits ?",
      answer: "Oui, nous établissons des devis détaillés et gratuits pour tous nos traitements après un examen complet de votre situation. Le devis inclut tous les coûts sans surprise."
    },
    {
      id: 9,
      question: "Où se trouve exactement le cabinet Smile Lounge ?",
      answer: "Notre cabinet est situé à Kénitra, dans un emplacement facilement accessible. L'adresse exacte et les indications détaillées vous seront communiquées lors de la prise de rendez-vous."
    },
    {
      id: 10,
      question: "Y a-t-il un parking disponible ?",
      answer: "Oui, nous disposons de places de parking à proximité immédiate du cabinet pour faciliter votre visite. Des informations détaillées sur le stationnement vous seront fournies lors de votre prise de rendez-vous."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Questions Fréquentes
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Réponses à vos questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur nos services 
            et le Smile Lounge
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour répondre à toutes vos questions spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/212700404400?text=Bonjour Dr. Athar, j'ai une question qui n'est pas dans votre FAQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Poser une question via WhatsApp
              </a>
              <a 
                href="tel:0700404400"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Appeler directement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;