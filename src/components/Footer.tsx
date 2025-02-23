import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SiTiktok } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                <span>contact@xidmatulxaddim.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                <span>+221 77 012 34 78</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                <span>Touba, daaru minam</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-green-400 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400 transition-colors">À propos</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-green-400 transition-colors">Galerie</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-400 transition-colors">Projets</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <FaTelegram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <SiTiktok className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Rejoignez notre communauté sur les réseaux sociaux pour suivre nos actualités et événements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Xidmatul Xaddim. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;