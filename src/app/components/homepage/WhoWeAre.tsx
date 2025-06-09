import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section id="qui-sommes-nous" className="py-20 bg-golden-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-golden-dark mb-6">
            Qui sommes nous ?
          </h2>
          <p className="text-xl text-golden-dark/70 max-w-3xl mx-auto leading-relaxed">
            Golden Wave, c'est une équipe passionnée dédiée à l'excellence maritime depuis plus de 15 ans. 
            Notre expertise et notre engagement font de nous votre partenaire de confiance pour tous vos projets nautiques.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-golden-dark">
                Notre Vision
              </h3>
              <p className="text-golden-dark/80 leading-relaxed">
                Chez Golden Wave, nous croyons que chaque voyage sur l'eau doit être une expérience exceptionnelle. 
                Notre mission est de vous offrir les plus beaux yachts et les services les plus raffinés pour créer 
                des souvenirs inoubliables.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-golden-dark">
                Notre Engagement
              </h3>
              <p className="text-golden-dark/80 leading-relaxed">
                Nous nous engageons à maintenir les plus hauts standards de qualité et de service. 
                Chaque yacht de notre flotte est soigneusement sélectionné et entretenu pour garantir 
                votre sécurité et votre confort.
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-2 gap-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-golden-primary/10">
              <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-golden-primary" />
              </div>
              <h4 className="text-lg font-semibold text-golden-dark mb-2">Équipe Experte</h4>
              <p className="text-golden-dark/70 text-sm">
                Des professionnels passionnés avec plus de 15 ans d'expérience
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-golden-primary/10">
              <div className="w-12 h-12 bg-golden-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-golden-accent" />
              </div>
              <h4 className="text-lg font-semibold text-golden-dark mb-2">Excellence</h4>
              <p className="text-golden-dark/70 text-sm">
                Standards de qualité les plus élevés dans tous nos services
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-golden-primary/10">
              <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-golden-primary" />
              </div>
              <h4 className="text-lg font-semibold text-golden-dark mb-2">Portée Internationale</h4>
              <p className="text-golden-dark/70 text-sm">
                Présents sur les plus belles destinations maritimes du monde
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-golden-primary/10">
              <div className="w-12 h-12 bg-golden-accent/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-golden-accent" />
              </div>
              <h4 className="text-lg font-semibold text-golden-dark mb-2">Passion</h4>
              <p className="text-golden-dark/70 text-sm">
                Une passion authentique pour l'art de vivre maritime
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-golden-primary">15+</div>
            <div className="text-golden-dark/70 font-medium">Années d'expérience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-golden-primary">200+</div>
            <div className="text-golden-dark/70 font-medium">Clients satisfaits</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-golden-primary">50+</div>
            <div className="text-golden-dark/70 font-medium">Yachts en flotte</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-golden-primary">25+</div>
            <div className="text-golden-dark/70 font-medium">Destinations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 