'use client';

import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle, Eye, X, Play } from 'lucide-react';

const InstagramShowcase = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  // Close modal when pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Real Instagram posts from Dr. Athar
  const instagramPosts = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1758982727/%D8%A7%D8%A8%D8%AA%D8%B3%D8%A7%D9%85%D8%AA%D9%83_%D9%87%D9%8A_%D8%AD%D9%83%D8%A7%D9%8A%D8%A9_%D8%A7%D8%AE%D8%B1%D9%89_%D9%85%D9%86_%D8%A7%D9%84%D8%B3%D8%B9%D8%A7%D8%AF%D8%A9_jic5hq.jpg",
      caption: "Tu crois que ton sourire ne peut pas changer ta vie ? Regarde ça… ✨ #SmileLounge #Kenitra",
      likes: 127,
      comments: 8,
      type: 'image'
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1758982576/Natural_smile_with_a_hint_of_diamond_blanchiment_dentaire_teethwhitening_q5fioc.jpg",
      caption: "Natural smile with a hint of diamond 💎 #blanchiment #dentaire #teethwhitening",
      likes: 156,
      comments: 15,
      type: 'image'
    },
    {
      id: 3,
      video: "https://res.cloudinary.com/dylpck2et/video/upload/v1758983201/Welcome_WE_ARE_OPEN_kenitra_BUREAU_2_1_Etage_eden_03_GH10_Manafiaa_RDV_-_070040440_gt6yiw.mp4",
      caption: "Welcome! Découvrez notre cabinet moderne à Kénitra 🏥 #SmileLounge #Cabinet #Kenitra",
      likes: 89,
      comments: 12,
      type: 'video'
    }
  ];

  return (
    <section id="instagram" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium mb-6">
            <Instagram className="w-4 h-4 mr-2" />
            Suivez-nous sur Instagram
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrez notre cabinet 
            <span className="block gradient-text">Smile Lounge</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez nos dernières transformations, notre cabinet moderne à Kénitra
            et l&apos;ambiance chaleureuse du Smile Lounge.
          </p>

          <a 
            href="https://www.instagram.com/dr.athar.essakhi_dentiste" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @dr.athar.essakhi_dentiste
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Post Media */}
              <div className="relative aspect-square overflow-hidden">
                {post.type === 'video' ? (
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openVideoModal(post.video);
                    }}
                  >
                    <video 
                      src={post.video} 
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-40 transition-all duration-300">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={post.image} 
                    alt={`Post Instagram ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                
                {/* Hover Overlay for Images */}
                {post.type !== 'video' && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center space-x-4 mb-2">
                        <div className="flex items-center">
                          <Heart className="w-5 h-5 mr-1" />
                          <span className="font-medium">{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-5 h-5 mr-1" />
                          <span className="font-medium">{post.comments}</span>
                        </div>
                      </div>
                      <Eye className="w-6 h-6 mx-auto" />
                    </div>
                  </div>
                )}

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Post Info */}
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      {post.comments}
                    </span>
                  </div>
                  <span className="text-primary-600 font-medium">
                    {post.type === 'video' ? 'Voir vidéo' : 'Voir plus'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Restez connectés avec nous !
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Suivez-nous sur Instagram pour voir nos dernières réalisations, 
            conseils dentaires et moments du quotidien au Smile Lounge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.instagram.com/dr.athar.essakhi_dentiste" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Suivre sur Instagram
            </a>

            <a 
              href="https://wa.me/212700404400?text=Bonjour Dr. Athar, j'ai vu vos publications Instagram et je souhaiterais prendre rendez-vous" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Prendre RDV
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal - Instagram Reel Style */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4">
          {/* Close button */}
          <button
            onClick={closeVideoModal}
            className="absolute top-6 right-6 z-60 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Modal backdrop - click to close */}
          <div 
            className="absolute inset-0 z-40"
            onClick={closeVideoModal}
          ></div>

          {/* Video container - Instagram Reel aspect ratio */}
          <div className="relative z-50 w-full max-w-sm mx-auto h-full flex items-center justify-center">
            <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
              <video 
                src={selectedVideo}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                controls
                autoPlay
                preload="metadata"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramShowcase;