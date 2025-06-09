import React from 'react';
import { Calendar, Trophy, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="histoire" className="py-24 bg-gradient-to-br from-golden-dark to-golden-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-golden-light">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Notre Histoire
              </h2>
              <p className="text-xl leading-relaxed text-golden-light/90 mb-8">
                Fondée en 2008, Golden Wave est née de la passion pour l'excellence maritime. 
                Nous avons bâti notre réputation sur la qualité, l'innovation et un service client exceptionnel.
              </p>
              <p className="text-lg leading-relaxed text-golden-light/80">
                Aujourd'hui, nous sommes reconnus comme l'un des leaders du marché du yachting de luxe, 
                offrant des expériences uniques à nos clients les plus exigeants.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-golden-light/10 backdrop-blur-sm rounded-xl p-6">
                <Calendar className="w-8 h-8 text-golden-accent mb-3" />
                <div className="text-2xl font-bold text-golden-light mb-2">15+</div>
                <div className="text-golden-light/80">Années d'expertise</div>
              </div>
              <div className="bg-golden-light/10 backdrop-blur-sm rounded-xl p-6">
                <Trophy className="w-8 h-8 text-golden-accent mb-3" />
                <div className="text-2xl font-bold text-golden-light mb-2">25+</div>
                <div className="text-golden-light/80">Prix remportés</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-golden-light mb-8">
              Nos Valeurs
            </h3>
            
            <div className="space-y-6">
              <div className="bg-golden-light/10 backdrop-blur-sm rounded-xl p-6 hover:bg-golden-light/20 transition-colors duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-golden-accent/20 p-3 rounded-full">
                    <Globe className="w-6 h-6 text-golden-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-golden-light">Excellence</h4>
                </div>
                <p className="text-golden-light/80 leading-relaxed">
                  Nous visons l'excellence dans chaque détail, de la sélection de nos yachts à l'accompagnement de nos clients.
                </p>
              </div>

              <div className="bg-golden-light/10 backdrop-blur-sm rounded-xl p-6 hover:bg-golden-light/20 transition-colors duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-golden-accent/20 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-golden-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-golden-light">Passion</h4>
                </div>
                <p className="text-golden-light/80 leading-relaxed">
                  Notre passion pour le monde maritime guide chacune de nos décisions et inspire notre équipe au quotidien.
                </p>
              </div>

              <div className="bg-golden-light/10 backdrop-blur-sm rounded-xl p-6 hover:bg-golden-light/20 transition-colors duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-golden-accent/20 p-3 rounded-full">
                    <Trophy className="w-6 h-6 text-golden-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-golden-light">Confiance</h4>
                </div>
                <p className="text-golden-light/80 leading-relaxed">
                  La confiance de nos clients est notre bien le plus précieux, construite jour après jour par notre professionnalisme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;