"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu5Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import { GrFormSearch } from "react-icons/gr";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-green-100 sticky top-0 z-50 backdrop-blur-md bg-white/95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text">
            MediCare
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="/"
              className="hover:text-green-600 transition font-medium text-gray-700"
            >
              Accueil
            </a>
            <a
              href="#"
              className="hover:text-green-600 transition font-medium text-gray-700"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-green-600 transition font-medium text-gray-700"
            >
              Médecins
            </a>
            <a
              href="#"
              className="hover:text-green-600 transition font-medium text-gray-700"
            >
              À propos
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-green-50 rounded-lg transition">
              <GrFormSearch size={20} className="text-gray-600" />
            </button>
            <button className="hidden md:block px-6 py-2 text-green-600 font-semibold hover:bg-green-50 rounded-lg transition">
              Connexion
            </button>
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
              Prendre RDV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <HiXMark size={24} />
              ) : (
                <RiMenu5Line size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-green-100 pt-4 space-y-2">
            <a
              href="/"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Accueil
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Services
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Médecins
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              À propos
            </a>
            <button className="w-full mt-4 px-4 py-2 text-green-600 font-semibold hover:bg-green-50 rounded-lg transition">
              Connexion
            </button>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg">
              Prendre RDV
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
