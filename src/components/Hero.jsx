import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const texts = {
  en: {
    tagline: 'Where Luxury Meets Essence',
    cta: 'Shop Now',
    newsletterTitle: 'Join our inner circle',
    newsletterSubtitle: 'Enjoy 10% off your first scent',
    emailPlaceholder: 'Your email address',
    joinNow: 'Join Now',
  },
  ar: {
    tagline: 'حيث يلتقي الفخامة بالجوهَر',
    cta: 'تسوّق الآن',
    newsletterTitle: 'انضم إلى نخبة العطور',
    newsletterSubtitle: 'احصل على خصم 10% على عطرك الأول',
    emailPlaceholder: 'عنوان بريدك الإلكتروني',
    joinNow: 'اشترك الآن',
  },
};

export default function Hero({ lang = 'en', onToggleLang }) {
  const t = texts[lang];
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletter(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0b] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft champagne mist overlay that does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf6ef]/40 via-transparent to-[#0b0b0b]/80" />
      </div>

      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl leading-tight text-[#f5efe6] md:text-6xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-[#eadecf]/90 md:text-lg"
          style={{ fontFamily: 'Poppins, Montserrat, ui-sans-serif, system-ui' }}
        >
          A modern fragrance boutique — elegant, romantic, and unmistakably premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="#collections"
            className="rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B8860B] px-8 py-3 text-sm font-medium text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
          >
            {t.cta}
          </a>
          <button
            onClick={onToggleLang}
            className="rounded-full border border-[#c6b896]/40 bg-black/30 px-5 py-3 text-xs uppercase tracking-wide text-[#f1e7d6] backdrop-blur-md transition hover:bg-white/10"
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
        </motion.div>
      </div>

      {showNewsletter && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div
            className="mx-4 w-full max-w-xl rounded-2xl border border-[#cdbb9b]/40 bg-[#111010]/70 p-6 text-left text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3
                  className="font-serif text-2xl text-[#f3e9da]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.newsletterTitle}
                </h3>
                <p className="mt-1 text-sm text-[#e8dcc6]/80">{t.newsletterSubtitle}</p>
              </div>
              <button
                aria-label="Close"
                onClick={() => setShowNewsletter(false)}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewsletter(false);
                alert('Thank you for joining!');
              }}
              className="mt-2 flex items-center gap-3"
            >
              <input
                type="email"
                required
                placeholder={t.emailPlaceholder}
                className="flex-1 rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-b from-[#D4AF37] to-[#B8860B] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:brightness-105"
              >
                {t.joinNow}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
