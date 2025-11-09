import React from 'react';
import { Rocket, Home, Stars, Users, LifeBuoy } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg">
              <Rocket className="h-4 w-4 text-black" />
            </span>
            <span className="font-semibold tracking-tight">Orion Bot</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#home" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Home className="h-4 w-4" /> Home
            </a>
            <a href="#features" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Stars className="h-4 w-4" /> Features
            </a>
            <a href="#invite" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Users className="h-4 w-4" /> Invite
            </a>
            <a href="#support" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <LifeBuoy className="h-4 w-4" /> Support
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#invite"
              className="inline-flex items-center rounded-md bg-gradient-to-br from-orange-500 to-amber-600 px-4 py-2 text-sm font-medium text-black shadow hover:shadow-lg transition-shadow"
            >
              Invite Bot
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none"
            onClick={() => {
              const el = document.getElementById('mobile-menu');
              if (el) el.classList.toggle('hidden');
            }}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="md:hidden hidden border-t border-white/10">
        <div className="space-y-1 px-4 py-3 text-gray-300">
          <a href="#home" className="block rounded-md px-3 py-2 hover:bg-white/5">Home</a>
          <a href="#features" className="block rounded-md px-3 py-2 hover:bg-white/5">Features</a>
          <a href="#invite" className="block rounded-md px-3 py-2 hover:bg-white/5">Invite</a>
          <a href="#support" className="block rounded-md px-3 py-2 hover:bg-white/5">Support</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
