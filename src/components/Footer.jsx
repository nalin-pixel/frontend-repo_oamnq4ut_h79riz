import React from 'react';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 text-[#d9caaa]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div>
            <h4 className="font-serif text-2xl text-[#f2e7d6]" style={{ fontFamily: 'Playfair Display, serif' }}>
              LUMIÈRE PARFUM
            </h4>
            <p className="mt-2 text-sm text-[#e7d8c3]/80">
              Born from passion, crafted with precision — each fragrance tells your story.
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#cdbb9b]">Follow</p>
            <div className="mt-3 flex items-center justify-center gap-4">
              <a href="#" aria-label="Instagram" className="rounded-full border border-[#cdbb9b]/40 p-2 hover:bg-white/5"><Instagram size={18} /></a>
              <a href="#" aria-label="WhatsApp" className="rounded-full border border-[#cdbb9b]/40 p-2 hover:bg-white/5"><MessageCircle size={18} /></a>
              <a href="#" aria-label="Email" className="rounded-full border border-[#cdbb9b]/40 p-2 hover:bg-white/5"><Mail size={18} /></a>
              <a href="#" aria-label="Phone" className="rounded-full border border-[#cdbb9b]/40 p-2 hover:bg-white/5"><Phone size={18} /></a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#e7d8c3]/80">© {new Date().getFullYear()} Lumière Parfum. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
