import React from 'react';
import { Ship, Users, Shield, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: 'Vente de Yachts',
      description: 'Une sélection exclusive de yachts neufs et d\'occasion, rigoureusement sélectionnés pour leur qualité exceptionnelle.',
      features: ['Yachts de luxe', 'Inspection complète', 'Garantie qualité']
    },
    {
      icon: Users,
      title: 'Location Premium',
      description: 'Louez le yacht de vos rêves pour des moments inoubliables en mer avec un service personnalisé.',
      features: ['Équipage professionnel', 'Service conciergerie', 'Expériences sur-mesure']
    },
    {
      icon: Shield,
      title: 'Assurance & Maintenance',
      description: 'Services complets d\'assurance et de maintenance pour protéger votre investissement maritime.',
      features: ['Assurance complète', 'Maintenance préventive', 'Support 24/7']
    },
    {
      icon: Award,
      title: 'Conseil Expert',
      description: 'Nos experts vous accompagnent dans tous vos projets nautiques avec professionnalisme et passion.',
      features: ['Expertise reconnue', 'Conseil personnalisé', 'Suivi complet']
    }
  ];

  return (
    <section id="activites" className="py-24 bg-golden-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-golden-dark mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-golden-dark/70 max-w-3xl mx-auto">
            Golden Wave vous accompagne dans tous vos projets nautiques avec expertise et passion, 
            offrant des services premium adaptés à vos besoins les plus exigeants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-golden-primary/10"
            >
              <div className="bg-golden-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-golden-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-golden-primary group-hover:text-golden-light transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-golden-dark mb-4">
                {service.title}
              </h3>
              
              <p className="text-golden-dark/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-golden-dark/80">
                    <div className="w-1.5 h-1.5 bg-golden-accent rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;