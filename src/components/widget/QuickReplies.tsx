'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QuickReplyOption, ThemeConfig } from '../../types/chat';
import {
  ArrowRight,
  Sparkles,
  User,
  Users,
  HelpCircle,
  AlertCircle,
  Zap,
  FileText,
  ChevronRight,
} from 'lucide-react';

interface QuickRepliesProps {
  options: QuickReplyOption[];
  onSelect: (option: QuickReplyOption) => void;
  theme: ThemeConfig;
  disabled?: boolean;
}

export const QuickReplies: React.FC<QuickRepliesProps> = ({
  options,
  onSelect,
  theme,
  disabled = false,
}) => {
  if (!options || options.length === 0) return null;

  const isHisabify = theme.id === 'aura' || theme.name === 'Hisabify';

  // Specific pastel/luminous style mapping for Hisabify with full light/dark mode harmony
  const getHisabifyStyle = (index: number, action?: string) => {
    const isDark = Boolean(theme.isDark);

    switch (action) {
      case 'demo':
      case 'how-it-works':
        return {
          bg: isDark ? '#FFFBEB' : '#FFFDF0',
          border: '#FCD34D',
          text: '#78350F',
          iconBg: '#FEF3C7',
          iconColor: '#D97706',
          Icon: Sparkles,
        };
      case 'handoff':
        return {
          bg: isDark ? '#ECFDF5' : '#F2FAF5',
          border: '#A7F3D0',
          text: '#064E3B',
          iconBg: '#DCFCE7',
          iconColor: '#059669',
          Icon: Users,
        };
      case 'pricing':
        return {
          bg: isDark ? '#F0F9FF' : '#F4F9FF',
          border: '#BAE6FD',
          text: '#0C4A6E',
          iconBg: '#E0F2FE',
          iconColor: '#0284C7',
          Icon: FileText,
        };
      case 'error':
        return {
          bg: isDark ? '#FFF1F2' : '#FFF5F5',
          border: '#FECDD3',
          text: '#881337',
          iconBg: '#FFE4E6',
          iconColor: '#E11D48',
          Icon: AlertCircle,
        };
      default:
        // Alternate by index
        const fallbackPalettes = [
          { bg: '#FFFDF0', border: '#FDE68A', text: '#78350F', iconBg: '#FEF3C7', iconColor: '#D97706', Icon: Sparkles },
          { bg: '#F2FAF5', border: '#BBF7D0', text: '#14532D', iconBg: '#DCFCE7', iconColor: '#16A34A', Icon: Users },
          { bg: '#F4F9FF', border: '#BAE6FD', text: '#0C4A6E', iconBg: '#E0F2FE', iconColor: '#0284C7', Icon: FileText },
          { bg: '#FFF5F5', border: '#FECDD3', text: '#881337', iconBg: '#FFE4E6', iconColor: '#E11D48', Icon: AlertCircle },
        ];
        return fallbackPalettes[index % fallbackPalettes.length];
    }
  };

  const getGenericIcon = (action?: string) => {
    switch (action) {
      case 'handoff':
        return <User className="w-3.5 h-3.5 opacity-70" />;
      case 'error':
        return <AlertCircle className="w-3.5 h-3.5 text-amber-500" />;
      case 'pricing':
        return <Sparkles className="w-3.5 h-3.5 opacity-70" />;
      default:
        return <HelpCircle className="w-3.5 h-3.5 opacity-70" />;
    }
  };

  if (isHisabify) {
    return (
      <div className="flex flex-col gap-2 my-2.5 w-full">
        {options.map((option, index) => {
          const style = getHisabifyStyle(index, option.action || option.id);
          const Icon = style.Icon;

          return (
            <motion.button
              key={option.id || index}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ scale: disabled ? 1 : 1.01, x: disabled ? 0 : 2 }}
              whileTap={{ scale: disabled ? 1 : 0.98 }}
              disabled={disabled}
              onClick={() => onSelect(option)}
              className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer shadow-2xs group ${
                disabled ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-sm'
              }`}
              style={{
                backgroundColor: style.bg,
                borderColor: style.border,
                color: style.text,
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: style.iconBg,
                    color: style.iconColor,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold tracking-tight truncate">
                  {option.label}
                </span>
              </div>
              <ChevronRight
                className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                style={{ color: style.text }}
              />
            </motion.button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-1.5 my-2">
      {options.map((option, index) => (
        <motion.button
          key={option.id || index}
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
          disabled={disabled}
          onClick={() => onSelect(option)}
          className={`group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all text-left shadow-xs ${
            disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:shadow-sm'
          }`}
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.textColor,
          }}
        >
          {getGenericIcon(option.action)}
          <span>{option.label}</span>
          <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
        </motion.button>
      ))}
    </div>
  );
};

