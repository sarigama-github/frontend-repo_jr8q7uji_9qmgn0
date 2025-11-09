import React from 'react';
import { Rocket, LifeBuoy, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section id="invite" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#"
            className="group rounded-xl border border-white/10 bg-gradient-to-br from-orange-500 to-amber-600 p-6 text-black shadow hover:shadow-lg transition"
            aria-label="Invite Bot"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/10">
                <Rocket className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Invite Bot</h3>
                <p className="text-sm opacity-80">Add Orion to your server in seconds.</p>
              </div>
            </div>
          </a>

          <a
            href="#support"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            aria-label="Join Support Server"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <LifeBuoy className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Join Support Server</h3>
                <p className="text-sm text-gray-300">Get help, updates, and sneak peeks.</p>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group rounded-xl border border-white/10 bg-[#FF3366] p-6 hover:opacity-95 transition"
            aria-label="Vote on Top.gg"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <Star className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Vote on Top.gg</h3>
                <p className="text-sm text-white/90">Support us and unlock perks.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
