import React, { useState } from 'react';
import { Target, Heart, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const values = [
    {
      icon: <Target className="w-12 h-12 text-green-600" />,
      title: "Notre Mission",
      description: "Servir humblement et avec dévouement la cause du Cheikh, en mettant nos ressources et nos compétences au service de la communauté."
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "Nos Valeurs",
      description: "Engagement, solidarité et humilité. Nous croyons en l'entraide et au travail collectif pour honorer l'héritage spirituel de Serigne Touba."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Notre Communauté",
      description: "Une communauté soudée, rassemblant des membres issus de différentes régions du Sénégal, unis pour œuvrer ensemble au service de Serigne Touba."
    }
  ];

  const fullHistory = `Dahira Xidmatul Xàddim est une organisation apolitique , musulmane, en particulier mouride qui investit sa force, sa richesse, son intelligence au service de CHEIKH AHMADOU BAMBA KHADIM RASSOUL. Il fût créé le 15 septembre 2022. À ce moment, il s'appelait Entreprise Cheikhoul Khadim. Le changement  de nom est survenu lors de notre première visite (Ziaar) auprès du Khalif général des Mourides Cheikh Mouhammadoul Mountakha Mbacké.

Il a rebaptisé ainsi le Daara, avec ses prières et ses encouragements à notre endroit afin que nous continuions nos objectifs de départ qui consistent à rester sur la voie droite de l'islam, en étant au service de Cheikhoul Khadim de la plus belle des manières.
`;

  const shortHistory = fullHistory.split('\n\n')[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            À Propos de Nous
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Dahira Xidmatul Xàddim est une organisation apolitique, musulmane, en particulier mouride qui investit sa force, sa richesse, son intelligence au service de CHEIKH AHMADOU BAMBA KHADIM RASSOUL.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="h-full flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:border-green-600 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center rounded-xl bg-green-50 p-2 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-green-50 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Histoire</h3>
              <div className="prose prose-green">
                <p className="text-gray-600 mb-6 whitespace-pre-line">
                  {isExpanded ? fullHistory : shortHistory}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-5 h-5 mr-2" />
                      Voir moins
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5 mr-2" />
                      Lire plus
                    </>
                  )}
                </motion.button>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 lg:h-96 rounded-xl overflow-hidden"
            >
              <img
                src="c3.jpg"
                alt="Notre communauté"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;