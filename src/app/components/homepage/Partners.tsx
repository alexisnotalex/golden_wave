import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: 'Azimut Yachts', category: 'Constructeur Premium' },
    { name: 'Sunseeker', category: 'Yachts de Luxe' },
    { name: 'Princess Yachts', category: 'Excellence Britannique' },
    { name: 'Ferretti Group', category: 'Tradition Italienne' },
    { name: 'Beneteau', category: 'Innovation Marine' },
    { name: 'Lagoon', category: 'Catamarans de Prestige' },
  ];

  return (
    <section id="partenaires" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-golden-dark mb-6">
            Nos Partenaires
          </h2>
          <p className="text-xl text-golden-dark/70 max-w-3xl mx-auto">
            Golden Wave collabore avec les plus grands noms du yachting mondial pour vous offrir 
            une sélection exclusive des plus beaux navires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-golden-light to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-golden-primary/10"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-golden-primary/10 p-2 rounded-full group-hover:bg-golden-primary group-hover:scale-110 transition-all duration-300">
                  <Star className="w-5 h-5 text-golden-primary group-hover:text-golden-light transition-colors duration-300" />
                </div>
                <CheckCircle className="w-5 h-5 text-golden-accent" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-golden-dark mb-2">
                {partner.name}
              </h3>
              
              <p className="text-golden-dark/70">
                {partner.category}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-golden-primary to-golden-accent rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-golden-light mb-6">
            Prêt à Naviguer vers l'Excellence ?
          </h3>
          <p className="text-xl text-golden-light/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de yachts et laissez-vous séduire par l'art de vivre maritime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-golden-light text-golden-primary px-8 py-4 rounded-full font-medium hover:bg-golden-light/90 transition-colors duration-300">
              Voir nos yachts
            </button>
            <button className="border-2 border-golden-light text-golden-light px-8 py-4 rounded-full font-medium hover:bg-golden-light hover:text-golden-primary transition-all duration-300">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;