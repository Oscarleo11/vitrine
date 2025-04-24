import React, { useState, useEffect } from 'react';
import { Scissors, Phone, Mail, MapPin, Instagram, Facebook, Clock, MessageCircle, Menu, X, Star, Users, Ruler, Calendar, Heart } from 'lucide-react';

// Types
type Creation = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'traditional' | 'modern' | 'wedding' | 'casual';
  price: string;
  materials: string[];
  deliveryTime: string;
};

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

// Services Data
const services: Service[] = [
  {
    id: 1,
    title: "Création sur Mesure",
    description: "Des vêtements uniques créés spécialement pour vous",
    icon: <Ruler className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Retouches",
    description: "Service professionnel de retouches et ajustements",
    icon: <Scissors className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Conseil Style",
    description: "Conseils personnalisés pour sublimer votre style",
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Rendez-vous Privés",
    description: "Consultations personnalisées dans notre atelier",
    icon: <Calendar className="w-8 h-8" />
  }
];

// Creations Data
const creations: Creation[] = [
  // Traditionnel
  {
    id: 1,
    title: "Robe Traditionnelle Béninoise",
    description: "Robe en pagne wax avec broderies traditionnelles",
    imageUrl: "https://images.unsplash.com/photo-1594062356278-8aba64b8cd96?auto=format&fit=crop&q=80",
    category: "traditional",
    price: "À partir de 75.000 FCFA",
    materials: ["Pagne Wax", "Broderie fait main", "Doublure en coton"],
    deliveryTime: "2-3 semaines"
  },
  {
    id: 2,
    title: "Boubou Brodé",
    description: "Boubou en tissu africain avec motifs traditionnels",
    imageUrl: "https://images.unsplash.com/photo-1621607511134-16bafd2dfe2a?auto=format&fit=crop&q=80",
    category: "traditional",
    price: "À partir de 60.000 FCFA",
    materials: ["Tissu africain", "Broderie dorée", "Doublure légère"],
    deliveryTime: "2 semaines"
  },
  // Modern
  {
    id: 3,
    title: "Costume Moderne",
    description: "Costume sur mesure en laine fine",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80",
    category: "modern",
    price: "À partir de 150.000 FCFA",
    materials: ["Laine italienne", "Doublure en soie", "Boutons nacre"],
    deliveryTime: "3-4 semaines"
  },
  // Wedding
  {
    id: 4,
    title: "Robe de Mariée Princesse",
    description: "Robe de mariée à traîne avec dentelle et perles",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80",
    category: "wedding",
    price: "À partir de 300.000 FCFA",
    materials: ["Dentelle française", "Perles Swarovski", "Tulle de soie"],
    deliveryTime: "4-6 semaines"
  },
  {
    id: 4,
    title: "Robe de Mariée Kalm",
    description: "Robe de mariée à traîne avec dentelle et perles",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80",
    category: "wedding",
    price: "À partir de 300.000 FCFA",
    materials: ["Dentelle française", "Perles Swarovski", "Tulle de soie"],
    deliveryTime: "4-6 semaines"
  },
  // Casual
  {
    id: 5,
    title: "Ensemble Décontracté",
    description: "Ensemble pantalon et chemise en lin",
    imageUrl: "https://i.pinimg.com/474x/23/36/67/23366712b878acba397d823ac31d853f.jpg",
    category: "casual",
    price: "À partir de 80.000 FCFA",
    materials: ["Lin naturel", "Coupe confortable", "Boutons en bois"],
    deliveryTime: "2 semaines"
  },

  {
    id: 6,
    title: "Ensemble Décontracté",
    description: "Ensemble pantalon et chemise en lin",
    imageUrl: "https://i.pinimg.com/474x/23/36/67/23366712b878acba397d823ac31d853f.jpg",
    category: "casual",
    price: "À partir de 80.000 FCFA",
    materials: ["Lin naturel", "Coupe confortable", "Boutons en bois"],
    deliveryTime: "2 semaines"
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Aïcha K.",
    role: "Mariée 2023",
    content: "Un service exceptionnel et une robe de mariée qui dépassait mes attentes !",
    rating: 5
  },
  {
    id: 2,
    name: "Pascal M.",
    role: "Client Régulier",
    content: "La qualité des finitions est remarquable. Je ne fais confiance qu'à Élégance Couture.",
    rating: 5
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCreation, setSelectedCreation] = useState<Creation | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+22991271978";
  const whatsappMessage = "Bonjour, je souhaite prendre rendez-vous pour une consultation.";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const filteredCreations = selectedCategory === 'all' 
    ? creations 
    : creations.filter(creation => creation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navigation Mobile */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-navy-900 text-white rounded-lg"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-navy-900 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <a href="#accueil" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Accueil</a>
            <a href="#services" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#creations" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Créations</a>
            <a href="#contact" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Navigation Desktop */}
      <nav className="bg-navy-900 text-white hidden md:block fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img className="w-6 h-6" src="https://github.com/Oscarleo11/Amos-style/blob/main/3.png?raw=true" alt="" />
              {/* <img className="w-12 h-12" src="./img/3.png" alt="" /> */}
              {/* <Scissors className="w-6 h-6" />
              <span className="text-xl font-bold">Élégance Couture</span> */}
            </div>
            <div className="flex space-x-8">
              <a href="#accueil" className="hover:text-gray-300 transition-colors">Accueil</a>
              <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
              <a href="#creations" className="hover:text-gray-300 transition-colors">Créations</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative h-[600px] bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80" 
            alt="Atelier de couture"
            className={`w-full h-full object-cover opacity-20 transition-transform duration-1000 ${
              isVisible ? 'scale-100' : 'scale-110'
            }`}
          />
        </div>
        <div className={`relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            L'Art de la Couture sur Mesure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Découvrez l'excellence de la couture béninoise, où tradition et modernité se rencontrent pour créer des pièces uniques qui vous ressemblent.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Prendre Rendez-vous</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="p-6 bg-gray-50 rounded-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out"
              >
                <div className="text-navy-900 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creations Section */}
      <section id="creations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Nos Créations</h2>
          
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 hover:bg-navy-100'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setSelectedCategory('traditional')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'traditional'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 hover:bg-navy-100'
              }`}
            >
              Traditionnel
            </button>
            <button
              onClick={() => setSelectedCategory('modern')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'modern'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 hover:bg-navy-100'
              }`}
            >
              Moderne
            </button>
            <button
              onClick={() => setSelectedCategory('wedding')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'wedding'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 hover:bg-navy-100'
              }`}
            >
              Mariage
            </button>
            <button
              onClick={() => setSelectedCategory('casual')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'casual'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 hover:bg-navy-100'
              }`}
            >
              Décontracté
            </button>
          </div>

          {/* Grille des créations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCreations.map((creation) => (
              <div 
                key={creation.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setSelectedCreation(creation)}
              >
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={creation.imageUrl} 
                    alt={creation.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      Voir les détails
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{creation.title}</h3>
                  <p className="text-gray-600 mb-4">{creation.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-navy-900 font-medium">{creation.price}</span>
                    <span className="text-gray-500 text-sm">{creation.deliveryTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Contactez-nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-navy-900" />
                  <span>123 Rue du Commerce, Cotonou, Bénin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-navy-900" />
                  <span>+229 91 27 19 78</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-navy-900" />
                  <span>contact@elegance-couture.bj</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-navy-900" />
                  <span>Lun-Sam: 9h-18h</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-navy-900 hover:text-navy-700 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-navy-900 hover:text-navy-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0516675909!2d2.4178849!3d6.3702899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInMTMuMCJOIDLCsDI1JzA0LjQiRQ!5e0!3m2!1sfr!2sbj!4v1635789012345!5m2!1sfr!2sbj"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scissors className="w-6 h-6" />
                <span className="text-xl font-bold">Amos Styles Fashion</span>
              </div>
              <p className="text-gray-400">
                Créations uniques et élégantes depuis 2010
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#creations" className="text-gray-400 hover:text-white transition-colors">Créations</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">+229 91 27 19 78</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">contact@elegance-couture.bj</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Cotonou, Bénin</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Élégance Couture. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>au Bénin</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Creation Details */}
      {selectedCreation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-navy-900">{selectedCreation.title}</h3>
                <button 
                  onClick={() => setSelectedCreation(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <img 
                src={selectedCreation.imageUrl} 
                alt={selectedCreation.title}
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600 mb-4">{selectedCreation.description}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy-900">Prix</h4>
                  <p>{selectedCreation.price}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Matériaux</h4>
                  <ul className="list-disc list-inside">
                    {selectedCreation.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Délai de confection</h4>
                  <p>{selectedCreation.deliveryTime}</p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="mt-6 w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Commander via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-40 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-navy-900 py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Discuter sur WhatsApp
        </span>
      </button>
    </div>
  );
}

export default App;