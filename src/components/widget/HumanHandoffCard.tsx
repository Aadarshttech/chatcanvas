'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ThemeConfig } from '../../types/chat';
import { ShieldCheck, Clock, UserCheck, MessageSquareHeart } from 'lucide-react';

interface HumanHandoffCardProps {
  theme: ThemeConfig;
  agentName?: string;
  agentRole?: string;
  agentAvatar?: string;
  onReturnToAI?: () => void;
}

export const HumanHandoffCard: React.FC<HumanHandoffCardProps> = ({
  theme,
  agentName = 'Sarah Mitchell',
  agentRole = 'Senior Support Specialist (Human Lead)',
  agentAvatar = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
  onReturnToAI,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: -8 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="p-3.5 my-3 rounded-xl border shadow-sm relative overflow-hidden"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.borderColor,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.primaryColor}, ${theme.accentColor})`,
        }}
      />

      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <img
            src={agentAvatar}
            alt={agentName}
            className={`w-10 h-10 rounded-full object-cover ring-2 ${
              theme.isDark ? 'ring-emerald-500/40' : 'ring-white'
            } shadow-xs`}
          />
          <span
            className={`absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 rounded-full ${
              theme.isDark ? 'border-neutral-900' : 'border-white'
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs font-semibold" style={{ color: theme.textColor }}>
              {agentName}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium rounded-full ${
                theme.isDark ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-500/10 text-emerald-600'
              }`}
            >
              <UserCheck className="w-2.5 h-2.5" /> Human Handoff
            </span>
          </div>

          <p className="text-[11px] opacity-75 leading-tight mb-2" style={{ color: theme.textColor }}>
            {agentRole}
          </p>

          <div className="flex items-center gap-3 text-[11px] opacity-80" style={{ color: theme.textColor }}>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-500" /> Replies in ~45s
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-sky-500" /> Verified Agent
            </span>
          </div>
        </div>
      </div>

      <div
        className="mt-3 pt-2.5 border-t flex items-center justify-between text-[11px]"
        style={{ borderColor: theme.borderColor }}
      >
        <span
          className={`font-medium flex items-center gap-1 ${
            theme.isDark ? 'text-emerald-400' : 'text-emerald-600'
          }`}
        >
          <MessageSquareHeart className="w-3.5 h-3.5" /> Direct operator connected
        </span>
        {onReturnToAI && (
          <button
            onClick={onReturnToAI}
            className="text-xs font-medium underline opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            style={{ color: theme.primaryColor }}
          >
            Switch back to AI
          </button>
        )}
      </div>
    </motion.div>
  );
};
