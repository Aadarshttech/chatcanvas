'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ThemeConfig } from '../../types/chat';

interface TypingIndicatorProps {
  theme: ThemeConfig;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ theme }) => {
  const dotColor = theme.accentColor || theme.primaryColor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 px-4 py-3 rounded-2xl max-w-[100px] shadow-sm mb-2"
      style={{
        backgroundColor: theme.botBubbleBg,
        border: `1px solid ${theme.borderColor}`,
      }}
    >
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: dotColor }}
            animate={{
              y: ['0%', '-50%', '0%'],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.18,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <span className="text-[11px] font-medium opacity-60 sr-only">Typing...</span>
    </motion.div>
  );
};
