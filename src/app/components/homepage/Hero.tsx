import React from 'react';
import { ChevronRight, Star, Waves, Anchor } from 'lucide-react';
 

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
            <video 
                src="https://videos.pexels.com/video-files/7555068/7555068-uhd_2560_1440_25fps.mp4"
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
            > 
            </video>
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-golden-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-golden-primary/5 rounded-full blur-3xl"></div>
            <Waves className="absolute top-10 right-10 w-20 h-20 text-golden-primary/10 animate-float" />
        </div> 

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8 animate-fade-in">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-golden-accent fill-current" />
                            <span className="text-golden-accent font-medium">Luxe Maritime</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-golden-light leading-tight">
                            Golden Wave
                        </h1>
                        <p className="text-xl text-golden-light/90 max-w-xl leading-relaxed">
                            Découvrez l'excellence maritime avec notre collection exclusive de yachts de prestige. 
                            Vente et location pour des expériences inoubliables sur les plus belles eaux du monde.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group bg-golden-primary hover:bg-golden-primary-dark text-golden-light px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center space-x-2">
                            <span>Découvrir nos yachts</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="border-2 border-golden-light text-golden-light hover:bg-golden-light hover:text-golden-dark px-8 py-4 rounded-full transition-all duration-300 font-medium">
                            Nous contacter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;