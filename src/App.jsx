import React, { useState } from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import BestSellers from './components/BestSellers';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen w-full bg-[#0b0b0b]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero with Spline 3D bottles + language toggle + newsletter popup */}
      <Hero lang={lang} onToggleLang={() => setLang((l) => (l === 'en' ? 'ar' : 'en'))} />

      {/* Collections preview grid */}
      <Collections />

      {/* Best sellers carousel with soft reflections */}
      <BestSellers />

      {/* Luxe footer */}
      <Footer />
    </div>
  );
}

export default App;
