import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Noir Velours',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Rose Éclat',
    price: 210,
    image:
      'https://images.unsplash.com/photo-1594035910373-1c9907c4b71a?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Amber Santal',
    price: 230,
    image:
      'https://images.unsplash.com/photo-1615634260130-60f3c8f8e066?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Oud Royale',
    price: 260,
    image:
      'https://images.unsplash.com/photo-1556229174-5ff19d3dd0c2?q=80&w=1600&auto=format&fit=crop',
    rating: 5.0,
  },
];

export default function BestSellers() {
  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-[#0b0b0b] py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2
              className="font-serif text-3xl text-[#f3eadb] md:text-4xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Best Sellers
            </h2>
            <p className="mt-2 text-sm text-[#e6d7c0]/80">Our most-loved bottles</p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button onClick={() => scroll(-1)} className="rounded-full border border-[#cdbb9b]/40 px-3 py-2 text-[#e8dcc6] hover:bg-white/5">◀</button>
            <button onClick={() => scroll(1)} className="rounded-full border border-[#cdbb9b]/40 px-3 py-2 text-[#e8dcc6] hover:bg-white/5">▶</button>
          </div>
        </div>

        <div
          ref={ref}
          className="no-scrollbar -mx-2 flex snap-x snap-mandatory overflow-x-auto px-2"
        >
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="mr-4 w-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-[#cdbb9b]/30 bg-[#121212] p-4 shadow-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                {/* Reflection */}
                <div className="absolute inset-x-0 bottom-[-40%] h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden
                    className="h-full w-full origin-top scale-y-[-1] object-cover opacity-30 blur-[1px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212]" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-[#f6efe3]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {p.name}
                  </h3>
                  <span className="text-sm text-[#e7d8c2]">${p.price}</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[#d7c6a6]">
                  <Star size={16} fill="#D4AF37" color="#D4AF37" />
                  <span className="text-xs">{p.rating}</span>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-b from-[#D4AF37] to-[#B8860B] py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:brightness-105">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
