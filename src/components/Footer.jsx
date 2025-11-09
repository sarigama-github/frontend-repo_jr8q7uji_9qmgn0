import React from 'react';

const Footer = () => {
  return (
    <footer id="support" className="bg-[#0a0a0a] text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-semibold text-lg">Orion Bot</h4>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              Futuristic Discord automation with AI-powered moderation, customizable modules, and delightful user experiences.
            </p>
          </div>
          <div className="text-sm">
            <p className="text-gray-400">Built for speed • Secure by default • Always improving</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Orion Bot • Not affiliated with Discord Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
