'use client';

import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle, Eye, X, Play, Sparkles, Camera } from 'lucide-react';

const InstagramShowcase = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredPost, setHoveredPost] = useState(null);

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

  const instagramPosts = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1758982727/%D8%A7%D8%A8%D8%AA%D8%B3%D8%A7%D9%85%D8%AA%D9%83_%D9%87%D9%8A_%D8%AD%D9%83%D8%A7%D9%8A%D8%A9_%D8%A7%D8%AE%D8%B1%D9%89_%D9%85%D9%86_%D8%A7%D9%84%D8%B3%D8%B9%D8%A7%D8%AF%D8%A9_jic5hq.jpg",
      caption: "Tu crois que ton sourire ne peut pas changer ta vie ? Regarde ça… ✨",
      likes: 127,
      comments: 8,
      type: 'image',
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1758982576/Natural_smile_with_a_hint_of_diamond_blanchiment_dentaire_teethwhitening_q5fioc.jpg",
      caption: "Natural smile with a hint of diamond 💎",
      likes: 156,
      comments: 15,
      type: 'image',
      gradient: 'from-accent-400 to-accent-600'
    },
    {
      id: 3,
      video: "https://res.cloudinary.com/dylpck2et/video/upload/v1758983201/Welcome_WE_ARE_OPEN_kenitra_BUREAU_2_1_Etage_eden_03_GH10_Manafiaa_RDV_-_070040440_gt6yiw.mp4",
      caption: "Welcome! Découvrez notre cabinet moderne 🏥",
      likes: 89,
      comments: 12,
      type: 'video',
      gradient: 'from-primary-500 to-accent-500'
    }
  ];

  return (
    <section id="instagram" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/20 to-purple-50/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Notre Instagram
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Découvrez notre <span className="gradient-text">Smile Lounge</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">
            Suivez nos transformations et l ambiance chaleureuse de notre cabinet à Kénitra
          </p>

          <a 
            href="https://www.instagram.com/dr.athar.essakhi_dentiste" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-size-200 hover:bg-pos-100 text-white font-semibold rounded-full transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
            style={{'backgroundSize': '200% auto', 'backgroundPosition': '0% center', 'transition': 'background-position 0.5s'}}
            onMouseEnter={(e) => e.target.style.backgroundPosition = '100% center'}
            onMouseLeave={(e) => e.target.style.backgroundPosition = '0% center'}
          >
            <Instagram className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            @dr.athar.essakhi_dentiste
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group relative ${isVisible ? `animate-fade-in animation-delay-${index * 200}` : 'opacity-0'}`}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="relative glass-effect rounded-2xl overflow-hidden border border-white/50 hover:border-pink-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}></div>
                
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
                      />
                      {/* Play Button */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                        <div className="w-16 h-16 glass-effect bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                          <Play className="w-8 h-8 text-secondary-800 ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={post.image} 
                      alt={`Post Instagram ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Hover Overlay for Images */}
                  {post.type !== 'video' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                      <div className="text-white">
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="flex items-center">
                            <Heart className="w-5 h-5 mr-1 animate-pulse" />
                            <span className="font-medium">{post.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-5 h-5 mr-1" />
                            <span className="font-medium">{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Instagram Icon Badge */}
                  <div className={`absolute top-3 right-3 w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    hoveredPost === post.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  } z-30`}>
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Post Info */}
                <div className="p-5 bg-gradient-to-b from-white to-gray-50/50">
                  <p className="text-sm text-secondary-600 line-clamp-2 mb-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs">
                      <span className="flex items-center text-pink-600">
                        <Heart className="w-3 h-3 mr-1 fill-current" />
                        {post.likes}
                      </span>
                      <span className="flex items-center text-purple-600">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <span className="text-xs font-medium gradient-text">
                      {post.type === 'video' ? 'Voir vidéo' : 'Voir plus'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating emoji on hover */}
              {hoveredPost === post.id && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                  <span className="text-2xl">✨</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-pink-100/50 blur-2xl"></div>
          <div className="relative glass-effect rounded-3xl p-8 md:p-10 border border-white/50 text-center">
            <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Restez connectés avec <span className="gradient-text">nous</span> !
            </h3>
            <p className="text-secondary-600 mb-8 max-w-xl mx-auto">
              Suivez notre parcours, nos réalisations et rejoignez notre communauté de sourires éclatants
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/dr.athar.essakhi_dentiste" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Instagram className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Suivre sur Instagram
              </a>

              <a 
                href="https://wa.me/212700404400?text=Bonjour Dr. Athar, j'ai vu vos publications Instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group glass-effect text-primary-600 border-2 border-primary-500 hover:bg-primary-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform duration-300" />
                Prendre RDV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <button
            onClick={closeVideoModal}
            className="absolute top-6 right-6 z-60 w-12 h-12 glass-effect bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 group"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div 
            className="absolute inset-0 z-40"
            onClick={closeVideoModal}
          ></div>

          <div className="relative z-50 w-full max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
              <video 
                src={selectedVideo}
                className="w-full h-full object-cover"
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