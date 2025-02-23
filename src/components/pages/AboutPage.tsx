import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Users, Target, BookOpen, Heart, MessageSquare, Lightbulb, Palette, Computer, Briefcase } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Notre Communauté",
      description: "Une fraternité unie par l'amour pour Cheikh Ahmadou Bamba, travaillant ensemble pour servir sa cause."
    },
    {
      icon: <Target className="w-12 h-12 text-green-600" />,
      title: "Notre Mission",
      description: "Perpétuer et promouvoir l'héritage de Khadim Rassoul à travers des actions concrètes et durables."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
      title: "Notre Vision",
      description: "Être un modèle d'excellence dans le service et la diffusion des enseignements de Cheikh Ahmadou Bamba."
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "Nos Valeurs",
      description: "Service désintéressé, dévouement, intégrité et respect des enseignements mourides."
    }
  ];

  const commissions = [
    {
      icon: <MessageSquare className="w-16 h-16 text-green-600" />,
      title: "Commission Communication",
      description: "Chargée de la diffusion des informations, de la gestion des réseaux sociaux et des relations publiques.",
      responsibilities: ["Gestion des réseaux sociaux", "Relations presse", "Communication interne", "Événementiel"]
    },
    {
      icon: <Lightbulb className="w-16 h-16 text-green-600" />,
      title: "Commission Scientifique",
      description: "Dédiée à la recherche et à l'étude approfondie des enseignements de Cheikh Ahmadou Bamba.",
      responsibilities: ["Recherche documentaire", "Publications académiques", "Organisation de conférences", "Formation"]
    },
    {
      icon: <Palette className="w-16 h-16 text-green-600" />,
      title: "Commission Culturelle",
      description: "Responsable de la promotion et de la préservation du patrimoine culturel mouride.",
      responsibilities: ["Organisation d'événements culturels", "Préservation du patrimoine", "Activités artistiques", "Expositions"]
    },
    {
      icon: <Computer className="w-16 h-16 text-green-600" />,
      title: "Commission Informatique",
      description: "En charge du développement et de la maintenance des outils numériques de l'organisation.",
      responsibilities: ["Développement web", "Support technique", "Innovation digitale", "Sécurité informatique"]
    },
    {
      icon: <Briefcase className="w-16 h-16 text-green-600" />,
      title: "Commission Projets",
      description: "Pilote les initiatives et projets de développement de l'organisation.",
      responsibilities: ["Gestion de projets", "Planification stratégique", "Suivi et évaluation", "Recherche de partenariats"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Introduction */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                À Propos de Xidmatul Xaddim
              </h1>
              <p className="max-w-3xl mx-auto text-xl text-gray-600">
                Xidmatul Xaddim est une organisation dédiée au service et à la promotion des enseignements de Cheikh Ahmadou Bamba Khadim Rassoul, guidée par les principes mourides d'engagement et de dévouement.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Mosquée de Touba"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Notre Histoire et Notre Engagement
                </h2>
                <p className="text-gray-600 mb-6">
                  Fondée sur les principes du mouridisme, Xidmatul Xaddim rassemble des disciples dévoués qui consacrent leur temps, leurs ressources et leurs compétences au service de la communauté mouride et des enseignements de Cheikh Ahmadou Bamba.
                </p>
                <p className="text-gray-600">
                  Notre organisation s'efforce de maintenir vivant l'héritage de Khadim Rassoul à travers des projets éducatifs, culturels et sociaux, tout en promouvant les valeurs de paix, de travail et de spiritualité qu'il a enseignées.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Commissions Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Nos Commissions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commissions.map((commission, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex justify-center mb-6">
                      {commission.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {commission.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center">
                      {commission.description}
                    </p>
                    <ul className="space-y-2">
                      {commission.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;