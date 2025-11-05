import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    key: 'men',
    title: "Men's",
    notes: 'Woody • Amber • Leather',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'women',
    title: "Women's",
    notes: 'Floral • Rose • Jasmine',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'unisex',
    title: 'Unisex',
    notes: 'Citrus • Musk • Oud',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'limited',
    title: 'Limited Editions',
    notes: 'Rare • Extrait • Artisan',
    image:
      'https://images.unsplash.com/photo-1608571424509-62c08a8e2a4e?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative w-full bg-[#0b0b0b] py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2
            className="font-serif text-3xl text-[#f3eadb] md:text-4xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Curated Collections
          </h2>
          <p className="mt-2 text-sm text-[#e6d7c0]/80">
            Discover scents crafted for every story
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, idx) => (
            <motion.a
              key={c.key}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-[#cdbb9b]/30 bg-[#111]/60 shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(212,175,55,0.25) 0%, rgba(0,0,0,0) 70%)' }} />
              </div>
              <div className="p-5">
                <h3
                  className="font-serif text-xl text-[#f5eee3]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-[#eadcc6]/80">{c.notes}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
