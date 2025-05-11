'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 text-blue-900">
      <section className="h-[75vh] flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-3">Votre santé, notre priorité</h2>
          <p className="text-gray-600">Des conseils fiables et des ressources utiles au quotidien</p>
        </motion.div>
      </section>

      <section className="px-6 py-16">
        <motion.h3 className="text-2xl font-semibold mb-6">Derniers articles</motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="h-48 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
