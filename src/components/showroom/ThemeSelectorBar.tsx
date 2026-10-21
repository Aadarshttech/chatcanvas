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
  Palette,
  Check,
} from 'lucide-react';

interface ThemeSelectorBarProps {
  themes: ThemeConfig[];
  selectedThemeId: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
  onOpenCustomizer?: () => void;
}

export const ThemeSelectorBar: React.FC<ThemeSelectorBarProps> = ({
  themes,
  selectedThemeId,
  onSelectTheme,
  onOpenCustomizer,
}) => {
  const getThemeIcon = (id: ThemeId) => {
    switch (id) {
      case 'intercom':
        return <MessageSquare className="w-5 h-5" />;
      case 'velvet':
        return <Sparkles className="w-5 h-5" />;
      case 'aura':
        return (
          <img
            src="/hisabify-logo.png"
            alt="Hisabify"
            className="w-5 h-5 rounded-md object-cover"
          />
        );
      case 'pastel':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Chatbot Design Showroom
          </span>
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
            {themes.length} Live Styles
          </span>
        </div>
        <span className="text-xs text-neutral-400 hidden sm:inline">
          Click an icon to preview the widget & launcher live
        </span>
      </div>

      {/* Horizontal Theme Icons Dock */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {themes.map((theme) => {
          const isSelected = selectedThemeId === theme.id;

          return (
            <motion.button
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border transition-all text-left flex-shrink-0 cursor-pointer ${
                isSelected
                  ? 'bg-neutral-900 text-white border-neutral-700 shadow-xl ring-2 ring-indigo-500/50'
                  : 'bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 hover:shadow-md'
              }`}
            >
              {/* Theme Color Icon Badge */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-xs relative"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
                }}
              >
                {getThemeIcon(theme.id)}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white border-2 border-neutral-900">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>

              {/* Theme Info */}
              <div className="min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold truncate">
                    {theme.name}
                  </span>
                </div>
                <span className={`text-[10px] block truncate ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
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
