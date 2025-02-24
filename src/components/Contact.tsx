import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Ajout de l'état isSubmitting

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Désactiver le bouton

    try {
      const response = await fetch("http://localhost:8080/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      toast.success("Votre message a été envoyé avec succès !");
      setFormData({ name: '', email: '', subject: '', message: '' }); // Réinitialisation du formulaire
    } catch (error) {
      console.error("Erreur lors de l'envoi du mail:", error);
      toast.error("Une erreur s'est produite lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false); // Réactiver le bouton après la requête
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} /> {/* ToastContainer ajouté */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nous sommes à votre écoute pour toute question ou suggestion
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Bouton avec gestion de l'état isSubmitting */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                  isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900">Informations de contact</h3>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@xidmatulxaddim.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Téléphone</h4>
                  <p className="text-gray-600">+221 77 299 92 11</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Adresse</h4>
                  <p className="text-gray-600">
                    ----
                  </p>
                </div>
              </div>

              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="xidma.jpg"
                  alt="Notre localisation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
