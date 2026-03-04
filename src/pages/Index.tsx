import React from "react";
import { Navbar } from "@/features/landing/Navbar";
import { Hero } from "@/features/landing/Hero";
import { Features } from "@/features/landing/Features";
import { Philosophy } from "@/features/landing/Philosophy";
import { Protocol } from "@/features/landing/Protocol";
import { LeadForm } from "@/features/landing/LeadForm";
import { Footer } from "@/features/landing/Footer";

export default function Index() {
  return (
    <div className="bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
      {/* Global Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Corporate Luxe Layout Assembly */}
      <Navbar />
      <Hero />
      <Features />
      <Protocol />
      <Philosophy />
      <LeadForm />
      <Footer />

      {/* Floating System WhatsApp Component */}
      <a 
        href="https://wa.me/5511979699832" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-transform hover:scale-110"
        aria-label="Atendimento Urgente 24/7"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
      </a>
    </div>
  );
}
