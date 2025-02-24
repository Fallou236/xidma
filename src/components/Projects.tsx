import React, { useState } from 'react';
import { Calendar, Users, MapPin, X, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mouridisme et Écriture Scientifique",
      description: "Ce projet vise à intégrer les principes du Mouridisme dans le domaine de l’écriture scientifique.",
      date: "En cours",
      participants: "10+ ecrivains ",
      location: "-----------",
      image: "mouride.webp",
      fullDescription: `Ce projet vise à intégrer les principes du Mouridisme dans le domaine de l’écriture scientifique. L’objectif est de produire des travaux de recherche qui reflètent les valeurs et les enseignements du Mouridisme, et de l’islam en général, tout en contribuant à l’avancement des connaissances scientifiques. Ce projet encourage les chercheurs à explorer des sujets pertinents pour la communauté, et pour toute la religion, et à publier leurs résultats dans des revues académiques reconnues.

Objectifs du Projet :
• Publier des articles dans des revues académiques afin de promouvoir une approche scientifique inspirée des enseignements du Mouridisme.
• Organiser des conférences ou des séminaires sur l'écriture scientifique dans une perspective mouride.
• Encourager la collaboration entre chercheurs pour développer une production scientifique de qualité ancrée dans les principes du Mouridisme.

Impact prevu:
• Valorisation du Mouridisme dans le domaine académique et scientifique.
• Développement d’une production scientifique enrichie par les valeurs spirituelles et éthiques du Mouridisme.
• Mise en réseau des chercheurs intéressés par cette approche, favorisant ainsi des échanges et collaborations interdisciplinaires.`,
      budget: "--------------------------",
      partners: ["----", "----", "----"]
    },
    {
      title: "Agriculture",
      description: "Ce projet se concentre sur le développement agricole durable. En mettant en œuvre des techniques agricoles modernes et respectueuses.",
      date: "En attente",
      participants: "5+ agriculteurs",
      location: "Ndondol",
      image: "agri.webp",
      fullDescription: `Ce projet se concentre sur le développement agricole durable. En mettant en œuvre des techniques agricoles modernes et respectueuses de l’environnement, le Daara Xidmatou Xadiim cherche à améliorer la productivité et la qualité des cultures. 
Ces projets témoignent de l’engagement du Daara Xidmatou Xadiim à promouvoir le bien-être et le développement de la communauté. En intégrant les valeurs du Mouridisme dans des initiatives concrètes et en soutenant les ressources locales, le Daara Xidmatou Xadiim contribue activement à la construction d’un avenir prospère et durable pour tous.

Objectifs :
• Introduire des techniques agricoles modernes et durables pour améliorer la production agricole tout en respectant l’environnement.
• Favoriser l’autosuffisance alimentaire en augmentant la production et en réduisant la dépendance aux importations.

Impacts prevu :
• Amélioration des rendements agricoles et de la sécurité alimentaire pour les communautés locales.
• Dynamisation de l’économie locale en créant des opportunités de travail et en valorisant les productions locales.
• Réduction de l’impact environnemental en adoptant des pratiques agricoles durables.`,
      budget: "--------------------------------",
      partners: ["-----", ""]
    },
    {
      title: "Commercialisation de Café Touba",
      description: "Le Daara Xidmatou Xadiim s’est également engagé dans la promotion et la commercialisation du Café Touba, une boisson traditionnelle très appréciée.",
      date: "En attente",
      participants: "20+ vendeurs",
      location: "Partout au Senegal",
      image: "cafe2.jpg",
      fullDescription: `Le Daara Xidmatou Xadiim s’est également engagé dans la promotion et la commercialisation du Café Touba, une boisson traditionnelle très appréciée. Ce projet vise à valoriser ce produit local en le rendant accessible à un marché plus large, tant au niveau national qu’international. En développant l’esprit d’entreprise chez les membres de Xidmatoul Xadiim et en assurant une distribution efficace, ce projet contribue à la création d’emplois et au développement économique.

Objectifs du projet :
• Promouvoir le Café Touba en mettant en avant ses qualités et son héritage culturel.
• Développer un réseau de distribution efficace pour rendre le produit plus accessible au grand public.
• Former et accompagner les vendeurs pour leur permettre d’améliorer leurs compétences en gestion et en marketing.
• Explorer les opportunités d’exportation afin d’étendre la présence du Café Touba sur les marchés internationaux.

Impacts prevu :
• Création d’emplois pour les vendeurs et les acteurs de la chaîne d’approvisionnement.
• Dynamisation de l’économie locale en favorisant la consommation et la production nationale.
• Autonomisation économique des membres du Daara Xidmatou Xadiim grâce au commerce du Café Touba.`,
      budget: "----------------------",
      partners: ["----------------", "---------------------"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Projets
          </h2>
          <p className="mt-4 text-xl text-gray-600">
          Le Daara Xidmatul Xaddim, fidèle à sa mission de promouvoir le développement communautaire et l’autosuffisance, s’est engagé dans trois projets ambitieux et innovants. Ces initiatives visent à renforcer les capacités locales, à valoriser les ressources traditionnelles et à intégrer les enseignements du Mouridisme dans divers domaines. Les projets en question sont les suivants:
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="relative h-64 lg:h-full min-h-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{project.participants}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Voir les détails
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h3>
                <div className="prose prose-indigo max-w-none">
                  <p className="whitespace-pre-line">{selectedProject.fullDescription}</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Budget</h4>
                      <p className="text-gray-600">{selectedProject.budget}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900">Partenaires</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {selectedProject.partners.map((partner, index) => (
                        <li key={index}>{partner}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;