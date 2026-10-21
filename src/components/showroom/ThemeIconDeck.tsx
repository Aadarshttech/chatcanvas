'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ThemeConfig, ThemeId } from '../../types/chat';
import {
  MessageSquare,
  Cpu,
  Sparkles,
  Receipt,
  HeartHandshake,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface ThemeIconDeckProps {
  themes: ThemeConfig[];
  selectedThemeId: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
}

export const ThemeIconDeck: React.FC<ThemeIconDeckProps> = ({
  themes,
  selectedThemeId,
  onSelectTheme,
}) => {
  const getThemeIcon = (id: ThemeId) => {
    switch (id) {
      case 'intercom':
        return <MessageSquare className="w-4 h-4" />;
      case 'velvet':
        return <Sparkles className="w-4 h-4" />;
      case 'aura':
        return (
          <img
            src="/hisabify-logo.png"
            alt="Hisabify"
            className="w-full h-full rounded-md object-cover"
          />
        );
      case 'pastel':
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4">
      {/* Gallery Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Chatbot Styles
          </span>
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {themes.length} Designs
          </span>
        </div>
        <p className="text-xs text-slate-400 hidden sm:block">
          Select an icon to switch the live widget theme
        </p>
      </div>

      {/* Horizontal Scrollable Icons Deck */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {themes.map((theme) => {
          const isSelected = selectedThemeId === theme.id;

          return (
            <motion.button
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex flex-col p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                  : 'bg-white/70 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs'
              }`}
            >
              {/* Top row: Miniature Launcher Icon + Selection Check */}
              <div className="flex items-center justify-between w-full mb-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-2xs"
                  style={{
                    backgroundColor: theme.primaryColor,
                  }}
                >
                  {getThemeIcon(theme.id)}
                </div>

                {isSelected ? (
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                ) : (
                  <div className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/10"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/10"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                  </div>
                )}
              </div>

              {/* Title and Style Tag */}
              <div>
                <h3 className="text-xs font-semibold text-slate-900 tracking-tight leading-tight truncate">
                  {theme.name}
                </h3>
                <span className="text-[11px] text-slate-500 font-normal block truncate mt-0.5">
                  {theme.category}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
