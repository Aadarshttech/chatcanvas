'use client';

import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Zap, Globe, Layers, Laptop } from 'lucide-react';

interface FramerMockupWebsiteProps {
  onOpenChat: () => void;
  botName: string;
}

export const FramerMockupWebsite: React.FC<FramerMockupWebsiteProps> = ({
  onOpenChat,
  botName,
}) => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 selection:bg-indigo-500 selection:text-white pb-32">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Simulated Framer Site Header */}
      <header className="border-b border-neutral-800/80 backdrop-blur-md sticky top-0 z-20 bg-neutral-950/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              Δ
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              NovaFramer <span className="text-xs text-indigo-400 font-normal px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">Client Website</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
            <a href="#features" className="hover:text-white transition-colors">Architecture</a>
            <a href="#showcase" className="hover:text-white transition-colors">Widget Benchmarks</a>
            <a href="#specs" className="hover:text-white transition-colors">Framer Integration</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenChat}
              className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Launch {botName}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Framer Customer Service Chatbot Widget Demo</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.15]">
          Turn Framer Visitors into Customers with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            Intercom-Level Polish
          </span>
        </h1>

        <p className="mt-5 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Production-grade frontend engineered specifically for Framer websites. Seamlessly integrates with your AI backend, supports streaming typewriter replies, human agent handoffs, and instant theme adaptability.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenChat}
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Test Live Chatbot Widget</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#specs"
            className="px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-all"
          >
            Review Framer Embed Specs
          </a>
        </div>

        {/* Feature Badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Framer Motion 60fps', desc: 'Smooth spring dynamics' },
            { label: 'Zero Style Collisions', desc: 'Isolated widget CSS' },
            { label: 'Human Handoff', desc: 'Live operator routing' },
            { label: 'Full Mobile Responsive', desc: 'Drawer & sheet view' },
          ].map((item, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{item.label}</span>
              </div>
              <p className="text-[11px] text-neutral-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simulated Website Features Section */}
      <section id="specs" className="max-w-5xl mx-auto px-6 py-12">
        <div className="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-left">
              <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400">
                Built for Upwork Client Brief
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Everything required in your scope is pre-built and live
              </h2>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <strong>Refined launcher:</strong> Morphs into close state with pulse & proactive message
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <strong>Streaming replies:</strong> Realistic character typewriter effect with cursor
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <strong>Human handoff:</strong> Live agent status card, verified badge & queue notice
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <strong>Error resilience:</strong> Network failure simulator with inline retry action
                </li>
              </ul>
            </div>

            <div className="w-full md:w-auto p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-left space-y-3 font-mono text-[11px]">
              <div className="flex items-center justify-between text-neutral-500 border-b border-neutral-800 pb-2">
                <span>Framer Component Integration</span>
                <span className="text-emerald-400">Production Ready</span>
              </div>
              <div className="text-neutral-400 space-y-1">
                <p><span className="text-purple-400">import</span> &#123; ChatWidget &#125; <span className="text-purple-400">from</span> <span className="text-amber-300">"./AuraChatWidget"</span>;</p>
                <p><span className="text-purple-400">export default function</span> <span className="text-blue-400">FramerEmbed</span>() &#123;</p>
                <p className="pl-4"><span className="text-purple-400">return</span> &lt;<span className="text-blue-400">ChatWidget</span> theme=<span className="text-amber-300">"intercom"</span> /&gt;;</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
