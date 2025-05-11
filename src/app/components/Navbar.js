'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white px-6 py-4 shadow sticky top-0 z-50 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold text-blue-600"><a href="/">🏥 Clinique Santé+</a></h1>
      <div className="flex space-x-6 text-sm">
        <a href="/" className="text-gray-600 hover:text-blue-600">Accueil</a>
        <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Rendez-vous</a>
      </div>
    </motion.nav>
  )
}
