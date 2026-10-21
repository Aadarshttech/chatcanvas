'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tablet, Code2, Sun, Moon } from 'lucide-react';
import { ThemeConfig } from '../../types/chat';

export type DeviceMode = 'desktop' | 'ipad' | 'iphone';

interface ShowroomNavbarProps {
  currentTheme: ThemeConfig;
  deviceMode: DeviceMode;
  onDeviceModeChange: (mode: DeviceMode) => void;
  onOpenEmbedModal: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const ShowroomNavbar: React.FC<ShowroomNavbarProps> = ({
  currentTheme,
  deviceMode,
  onDeviceModeChange,
  onOpenEmbedModal,
  isDarkMode,
  onToggleDarkMode,
}) => {
  return (
    <header
      className={`w-full sticky top-0 z-40 px-4 sm:px-6 py-2.5 backdrop-blur-md transition-colors duration-300 border-b ${
        isDarkMode
          ? 'bg-[#090d16]/90 border-slate-800/90 text-white'
          : 'bg-white/95 border-slate-200/80 text-slate-900'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shadow-md overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5">
            <img src="/favicon.svg" alt="Aura" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-semibold tracking-tight transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              ChatCanvas
            </span>
          </div>
        </div>

        {/* Center / Right: Device Mode Switcher + Dark Mode Switch + Framer Code */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Device Switcher */}
          <div
            className={`flex items-center p-1 border rounded-2xl shadow-2xs transition-colors ${
              isDarkMode
                ? 'bg-slate-800/80 border-slate-700/80'
                : 'bg-slate-100/90 border-slate-200/90'
            }`}
          >
            <button
              onClick={() => onDeviceModeChange('desktop')}
              title="Desktop Browser"
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                deviceMode === 'desktop'
                  ? isDarkMode
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-900 shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              onClick={() => onDeviceModeChange('ipad')}
              title="iPad Pro Tablet"
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                deviceMode === 'ipad'
                  ? isDarkMode
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-900 shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span className="hidden sm:inline">iPad</span>
            </button>

            <button
              onClick={() => onDeviceModeChange('iphone')}
              title="iPhone Mobile"
              className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                deviceMode === 'iphone'
                  ? isDarkMode
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-900 shadow-xs'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">iPhone</span>
            </button>
          </div>

          {/* Big & Visible Capsule Toggle Switch for Light & Dark Mode */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              onClick={() => isDarkMode && onToggleDarkMode()}
              className={`hidden sm:inline text-xs font-semibold tracking-tight cursor-pointer select-none transition-colors ${
                !isDarkMode ? 'text-slate-900' : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              Light
            </span>

            <button
              onClick={onToggleDarkMode}
              role="switch"
              aria-checked={isDarkMode}
              aria-label="Toggle Dark and Light Mode"
              title={isDarkMode ? 'Dark Mode Active — Click to switch to Light Mode' : 'Light Mode Active — Click to switch to Dark Mode'}
              className={`w-[74px] h-[38px] rounded-full relative p-[3px] transition-all duration-300 flex items-center cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode
                  ? 'bg-black border-2 border-neutral-700 shadow-sm focus:ring-slate-400'
                  : 'bg-slate-200 hover:bg-slate-300 border-2 border-slate-300 shadow-inner focus:ring-slate-900'
              }`}
            >
              {/* Internal Track Icons for Visual Clarity */}
              <div className="w-full flex items-center justify-between px-2 pointer-events-none select-none">
                <Sun className={`w-3.5 h-3.5 transition-opacity duration-200 ${isDarkMode ? 'text-neutral-500 opacity-60' : 'opacity-0'}`} />
                <Moon className={`w-3.5 h-3.5 transition-opacity duration-200 ${!isDarkMode ? 'text-slate-400 opacity-60' : 'opacity-0'}`} />
              </div>

              {/* Big Crisp Sliding White Knob (Matching user's reference image) */}
              <motion.div
                className="absolute left-[3px] top-[3px] w-[28px] h-[28px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.35)] flex items-center justify-center pointer-events-none ring-1 ring-black/5"
                animate={{ x: isDarkMode ? 36 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              >
                {isDarkMode ? (
                  <Moon className="w-3.5 h-3.5 text-neutral-900 fill-neutral-900" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                )}
              </motion.div>
            </button>

            <span
              onClick={() => !isDarkMode && onToggleDarkMode()}
              className={`hidden sm:inline text-xs font-semibold tracking-tight cursor-pointer select-none transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Dark
            </span>
          </div>

          {/* Framer Code Button */}
          <button
            onClick={onOpenEmbedModal}
            title="Get Framer Component Code"
            className={`p-2 sm:px-3.5 sm:py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 shadow-xs cursor-pointer ${
              isDarkMode
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span className="hidden sm:inline">Framer Code</span>
          </button>
        </div>
      </div>
    </header>
  );
};
