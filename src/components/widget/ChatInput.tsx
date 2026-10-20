'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeConfig } from '../../types/chat';
import { Send, Paperclip, Smile, AlertCircle } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  theme: ThemeConfig;
  disabled?: boolean;
  isSimulateErrorActive?: boolean;
  onToggleSimulateError?: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  theme,
  disabled = false,
  isSimulateErrorActive,
  onToggleSimulateError,
}) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || disabled) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div
      className={`p-3 relative z-10 transition-colors ${
        theme.id === 'pastel' || theme.id === 'velvet' || theme.id === 'aura' ? 'border-t-0 bg-transparent pb-4' : 'border-t'
      }`}
      style={{
        borderColor: theme.borderColor,
        backgroundColor: theme.id === 'pastel' || theme.id === 'velvet' || theme.id === 'aura' ? 'transparent' : theme.cardBg,
      }}
    >
      {/* Simulation status bar for testing error state */}
      {isSimulateErrorActive && (
        <div
          className={`mb-2 px-2.5 py-1 text-[11px] rounded-lg flex items-center justify-between border ${
            theme.isDark
              ? 'bg-rose-950/40 text-rose-300 border-rose-800/40'
              : 'bg-rose-50 text-rose-700 border-rose-200'
          }`}
        >
          <span className="flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> Simulation: Next reply will fail
          </span>
          <button
            onClick={onToggleSimulateError}
            className={`text-[10px] font-semibold underline cursor-pointer ${
              theme.isDark ? 'hover:text-rose-200 text-rose-300' : 'hover:text-rose-900 text-rose-700'
            }`}
          >
            Turn Off
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div
          className={`flex-1 flex items-center gap-2 px-3.5 py-2.5 border transition-all focus-within:ring-2 focus-within:ring-offset-1 ${
            theme.id === 'pastel' || theme.id === 'velvet' || theme.id === 'aura' ? 'rounded-full shadow-md backdrop-blur-md' : 'rounded-xl'
          }`}
          style={{
            backgroundColor: theme.inputBg || theme.bgColor,
            borderColor: theme.inputBorder || theme.borderColor,
          }}
        >
          {(theme.id === 'pastel' || theme.id === 'velvet') && (
            <button
              type="button"
              title="Insert emoji"
              className="text-amber-800/60 hover:text-amber-900 transition-colors p-0.5 cursor-pointer"
            >
              <Smile className="w-4 h-4" />
            </button>
          )}

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={disabled ? 'Waiting for response...' : 'Ask a question or type a message...'}
            className={`w-full bg-transparent text-xs outline-none ${
              theme.isDark ? 'placeholder:text-slate-500' : 'placeholder:text-neutral-400'
            }`}
            style={{ color: theme.textColor }}
          />

          <button
            type="button"
            title="Attach file"
            className={`transition-colors p-1 cursor-pointer ${
              theme.isDark ? 'text-slate-400 hover:text-slate-200' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <Paperclip className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            title="Insert emoji"
            className={`transition-colors p-1 cursor-pointer ${
              theme.isDark ? 'text-slate-400 hover:text-slate-200' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <Smile className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Send Button */}
        <motion.button
          type="submit"
          disabled={!inputText.trim() || disabled}
          whileHover={{ scale: !inputText.trim() || disabled ? 1 : 1.05 }}
          whileTap={{ scale: !inputText.trim() || disabled ? 1 : 0.95 }}
          className={`p-2.5 rounded-full shadow-xs transition-all flex items-center justify-center cursor-pointer ${
            !inputText.trim() || disabled ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:shadow-md'
          }`}
          style={{
            backgroundColor: theme.sendBtnBg || (theme.id === 'aura' ? '#FBBF24' : theme.primaryColor),
            color:
              theme.sendBtnText ||
              (theme.id === 'aura' ? (theme.isDark ? '#0C1C16' : '#1A3D34') : '#ffffff'),
          }}
        >
          <Send className="w-4 h-4" />
        </motion.button>
      </form>
    </div>
  );
};
