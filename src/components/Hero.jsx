import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to enhance contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> Live on Discord
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            The smarter way to run your community
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Powerful automation, customizable systems, and AI-assisted moderation — all in one sleek Discord bot.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#invite" className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-amber-600 px-5 py-3 text-sm font-semibold text-black shadow hover:shadow-lg transition">
              Invite Bot
            </a>
            <a href="#support" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              Join Support Server
            </a>
            <a href="#invite" className="inline-flex items-center justify-center rounded-md bg-[#FF3366] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
              Vote on Top.gg
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
