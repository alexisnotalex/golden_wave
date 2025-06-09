import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-golden-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-golden-primary p-2 rounded-full">
                <Anchor className="w-6 h-6 text-golden-light" />
              </div>
              <div className="text-2xl font-serif font-bold">Golden Wave</div>
            </div>
            <p className="text-golden-light/80 leading-relaxed">
              Votre partenaire de confiance pour l'excellence maritime. 
              Découvrez l'art de vivre sur l'eau avec nos yachts d'exception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-golden-primary/20 hover:bg-golden-primary p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-golden-primary/20 hover:bg-golden-primary p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-golden-primary/20 hover:bg-golden-primary p-3 rounded-full transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Accueil</a></li>
              <li><a href="#histoire" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Histoire</a></li>
              <li><a href="#activites" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Activités</a></li>
              <li><a href="#partenaires" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Partenaires</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Vente de Yachts</a></li>
              <li><a href="#" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Location Premium</a></li>
              <li><a href="#" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Assurance</a></li>
              <li><a href="#" className="text-golden-light/80 hover:text-golden-accent transition-colors duration-300">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-golden-accent flex-shrink-0" />
                <span className="text-golden-light/80">Port de Monaco, Monaco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden-accent flex-shrink-0" />
                <span className="text-golden-light/80">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden-accent flex-shrink-0" />
                <span className="text-golden-light/80">contact@goldenwave.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-golden-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-golden-light/60 mb-4 md:mb-0">
            © {currentYear} Golden Wave. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-golden-light/60 hover:text-golden-accent transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="text-golden-light/60 hover:text-golden-accent transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-golden-light/60 hover:text-golden-accent transition-colors duration-300">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;