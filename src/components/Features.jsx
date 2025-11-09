import React from 'react';
import { Shield, Wrench, Sparkles, Users, Cog, Server, Gift, Trophy, ShieldAlert, Brain, Settings, MessageSquare } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Moderation', desc: 'AI-assisted automod, timeouts, bans, filters, logs.' },
  { icon: Wrench, title: 'Utility', desc: 'Prefixes, info, reminders, tags, server tools.' },
  { icon: Sparkles, title: 'Fun', desc: 'Memes, games, reactions, and playful interactions.' },
  { icon: Users, title: 'Roles', desc: 'Reaction roles, self-assign, role menus, permissions.' },
  { icon: Cog, title: 'Automation', desc: 'Schedules, triggers, webhooks, and smart workflows.' },
  { icon: Server, title: 'Server Management', desc: 'Welcome, logs, backups, channel tools.' },
  { icon: Gift, title: 'Giveaways', desc: 'Fair, audited giveaways with rerolls and requirements.' },
  { icon: Trophy, title: 'Leveling', desc: 'XP system with roles, cards, and leaderboard.' },
  { icon: ShieldAlert, title: 'Antinuke', desc: 'Real-time detection, rate-limits, and rollback.' },
  { icon: Brain, title: 'AI', desc: 'Chat, smart summaries, automod suggestions, insights.' },
  { icon: Settings, title: 'Custom Features', desc: 'Tailor modules and commands for your server.' },
  { icon: MessageSquare, title: 'Suggestions', desc: 'Collect, vote, and track community ideas.' },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-[#0a0a0a] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">All the power, none of the hassle</h2>
          <p className="mt-3 text-gray-300">Built for speed, safety, and delight — everything you need to run a thriving Discord community.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 text-black shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
