'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeConfig } from '../../types/chat';
import { MessageSquare, X, Sparkles, Bot, MessageCircle } from 'lucide-react';

interface ChatLauncherProps {
  isOpen: boolean;
  onToggle: () => void;
  theme: ThemeConfig;
  unreadCount?: number;
}

export const ChatLauncher: React.FC<ChatLauncherProps> = ({
  isOpen,
  onToggle,
  theme,
  unreadCount = 1,
}) => {
  const [showProactive, setShowProactive] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Proactive Floating Tooltip Bubble */}
      <AnimatePresence>
        {!isOpen && showProactive && theme.proactiveMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="max-w-[270px] p-3 rounded-2xl border shadow-xl relative cursor-pointer group"
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.borderColor,
              color: theme.textColor,
            }}
            onClick={onToggle}
          >
            {/* Close tooltip button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowProactive(false);
              }}
              className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs ${
                theme.isDark
                  ? 'bg-neutral-800 text-slate-300 hover:bg-neutral-700'
                  : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300'
              }`}
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold opacity-80 uppercase tracking-wider">
                {theme.botName}
              </span>
            </div>

            <p className="text-xs leading-snug font-medium">
              {theme.proactiveMessage}
            </p>

            {/* Bubble arrow pointing down to launcher */}
            <div
              className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 border-r border-b"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.borderColor,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Launcher Button */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={`relative flex items-center justify-center shadow-2xl transition-all cursor-pointer ${
          theme.launcherShape === 'pill'
            ? 'px-4 py-3 rounded-full gap-2.5'
            : theme.launcherShape === 'rounded-square'
            ? 'w-14 h-14 rounded-2xl'
            : 'w-14 h-14 rounded-full'
        }`}
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
          boxShadow: theme.shadow,
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >

        {/* Unread notification badge */}
        {!isOpen && unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-rose-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm"
          >
            {unreadCount}
          </motion.span>
        )}

        {/* Morphing Icon Animation */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              {theme.launcherShape === 'pill' && theme.launcherText && (
                <span className="text-white text-xs font-semibold tracking-wide">
                  {theme.launcherText}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
