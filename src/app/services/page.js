'use client';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="h-10 w-2/3 bg-gray-300 animate-pulse rounded mb-2" />
          <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded" />
        </motion.div>

        <motion.div className="mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="h-[250px] bg-gray-100 rounded animate-pulse mb-10" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
