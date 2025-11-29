"use client";
import React from "react";
import {
  FaArrowRight,
  FaAward,
  FaHeart,
  FaMapPin,
  FaPhone,
  FaRegClock,
  FaStethoscope,
} from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { RiStarFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Home() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sophie Martin",
      specialty: "Médecin Généraliste",
      experience: "15 ans",
      image: "bg-gradient-to-br from-green-400 to-emerald-500",
      rating: 4.9,
      reviews: 342,
    },
    {
      id: 2,
      name: "Dr. Jean Dupont",
      specialty: "Cardiologue",
      experience: "18 ans",
      image: "bg-gradient-to-br from-teal-400 to-cyan-500",
      rating: 4.8,
      reviews: 289,
    },
    {
      id: 3,
      name: "Dr. Marie Laurent",
      specialty: "Dermatologue",
      experience: "12 ans",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      rating: 4.9,
      reviews: 256,
    },
    {
      id: 4,
      name: "Dr. Pierre Bernard",
      specialty: "Chirurgien",
      experience: "20 ans",
      image: "bg-gradient-to-br from-emerald-400 to-green-500",
      rating: 4.8,
      reviews: 198,
    },
  ];

  const services = [
    {
      icon: FaStethoscope,
      title: "Consultations",
      desc: "RDV avec nos médecins spécialistes",
    },
    {
      icon: FiActivity,
      title: "Examens",
      desc: "Diagnostic et tests de laboratoire",
    },
    { icon: FaHeart, title: "Suivi", desc: "Suivi médical personnalisé" },
    {
      icon: FaAward,
      title: "Chirurgie",
      desc: "Interventions chirurgicales avancées",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-96 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Votre Santé, Notre Priorité
          </h1>
          <p className="text-xl text-green-50 mb-8 max-w-2xl">
            Clinique moderne offrant des soins de qualité avec les meilleures
            technologies médicales
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center">
            <button className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:shadow-xl transition flex items-center justify-center gap-2">
              Prendre RDV
              <FaArrowRight size={20} />
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/30 transition border border-white/30">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-8 px-4 border-b border-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Appelez-nous</h3>
                <p className="text-sm text-gray-600">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaMapPin className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Nous rendre visite</h3>
                <p className="text-sm text-gray-600">
                  123 Rue de la Santé, Paris
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaRegClock className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Heures d'ouverture</h3>
                <p className="text-sm text-gray-600">
                  Lun-Ven: 9h-19h, Sam: 9h-13h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Nos Services
            </h2>
            <p className="text-gray-600 text-lg">
              Services de santé complets et modernes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-green-100 hover:border-green-300 bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-lg transition group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Notre Équipe Médicale
            </h2>
            <p className="text-gray-600 text-lg">
              Médecins expérimentés et certifiés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl overflow-hidden border border-green-100 hover:shadow-xl hover:border-green-300 transition group cursor-pointer"
              >
                <div className={`h-40 ${doctor.image}`}></div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-green-600 text-sm font-semibold mb-3">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {doctor.experience} d'expérience
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({doctor.reviews})
                    </span>
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-sm">
                    Prendre RDV
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Pourquoi nous choisir?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Expertise Médicale",
                desc: "Nos médecins disposent de plus de 60 ans d'expérience combinée",
              },
              {
                title: "Équipements Modernes",
                desc: "Technologies médicales de dernière génération",
              },
              {
                title: "Accueil Chaleureux",
                desc: "Personnel attentif et patients au cœur de nos préoccupations",
              },
              {
                title: "Suivi Personnalisé",
                desc: "Plans de traitement adaptés à chaque patient",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <IoMdCheckmarkCircleOutline
                  className="text-green-600 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Restez informé de votre santé
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Recevez nos conseils de santé et nos dernières actualités médicales
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:shadow-xl transition">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
