'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-100 text-blue-700 px-6 py-10 mt-auto"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Consultations</li>
            <li>Articles</li>
            <li>Prévention</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">À propos</h4>
          <ul className="space-y-1 text-sm">
            <li>Notre équipe</li>
            <li>Partenaires</li>
            <li>Carrières</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Assistance</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              {/* Icône Facebook */}
              <FaFacebook className='text-xl text-gray-600 hover:text-gray-800' />
            </a>
            <a href="#" aria-label="Twitter">
              {/* Icône Twitter */}
              <FaXTwitter className='text-xl text-gray-600 hover:text-gray-800' />
            </a>
            <a href="#" aria-label="LinkedIn">
              {/* Icône LinkedIn */}
              <FaLinkedin className='text-xl text-gray-600 hover:text-gray-800' />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        Clinique Santé+ &copy; {new Date().getFullYear()} — Tous droits réservés
      </div>
    </motion.footer>
  )
}
