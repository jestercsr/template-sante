"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaRegClock,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaMapPin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-green-900 to-gray-950 text-white"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="font-bold text-2xl text-transparent bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text mb-4">
              MediCare
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre clinique de confiance pour une santé optimale et des soins
              de qualité
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-green-600/20 hover:bg-green-600/40 rounded-lg transition"
              >
                <FaFacebookF size={18} className="text-green-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-600/20 hover:bg-green-600/40 rounded-lg transition"
              >
                <FaInstagram size={18} className="text-green-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-600/20 hover:bg-green-600/40 rounded-lg transition"
              >
                <FaLinkedin size={18} className="text-green-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-600/20 hover:bg-green-600/40 rounded-lg transition"
              >
                <FaXTwitter size={18} className="text-green-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Consultations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Chirurgie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Dentisterie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Physiothérapie
                </a>
              </li>
            </ul>
          </div>

          {/* Patients */}
          <div>
            <h4 className="font-bold text-white mb-4">Pour Patients</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Prendre RDV
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Dossier Médical
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Résultats Labo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Clinique */}
          <div>
            <h4 className="font-bold text-white mb-4">Clinique</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Notre équipe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Carrières
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <FaPhone
                  size={16}
                  className="text-green-400 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+33123456789"
                  className="hover:text-green-400 transition"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FaMapPin
                  size={16}
                  className="text-green-400 mt-1 flex-shrink-0"
                />
                <span>123 Rue de la Santé, 75001 Paris</span>
              </div>
              <div className="flex items-start gap-2">
                <FaRegClock
                  size={16}
                  className="text-green-400 mt-1 flex-shrink-0"
                />
                <span>
                  Lun-Ven: 9h-19h
                  <br />
                  Sam: 9h-13h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MediCare. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-gray-400 text-sm justify-end flex-wrap">
              <a href="#" className="hover:text-green-400 transition">
                Conditions
              </a>
              <a href="#" className="hover:text-green-400 transition">
                Confidentialité
              </a>
              <a href="#" className="hover:text-green-400 transition">
                RGPD
              </a>
              <a href="#" className="hover:text-green-400 transition">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <p>Agréé & Certifié ISO 9001</p>
            <p>Plateforme HIPAA Compliant</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
