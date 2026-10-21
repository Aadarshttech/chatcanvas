'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Code, ShieldCheck } from 'lucide-react';
import { ThemeConfig } from '../../types/chat';

interface FramerEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeConfig;
  isDarkMode?: boolean;
}

export const FramerEmbedModal: React.FC<FramerEmbedModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  isDarkMode = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [embedType, setEmbedType] = useState<'codeComponent' | 'scriptEmbed'>('codeComponent');

  const codeSnippet =
    embedType === 'codeComponent'
      ? `// Framer Code Component: AuraChatWidget.tsx
// Drop this directly into your Framer project under Assets > Code

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ChatWidgetProps {
  apiUrl?: string
  theme?: "${currentTheme.id}" | "intercom" | "nordic" | "velvet" | "aura"
  primaryColor?: string
}

export default function FramerChatWidget(props: ChatWidgetProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const primaryColor = props.primaryColor || "${currentTheme.primaryColor}"

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999999, fontFamily: "${currentTheme.fontFamily}" }}>
      {/* Isolated Container: Zero CSS collisions with Framer styles */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            style={{
              width: 380,
              height: 600,
              maxWidth: "calc(100vw - 32px)",
              maxHeight: "calc(100vh - 120px)",
              background: "${currentTheme.bgColor}",
              borderRadius: "${currentTheme.borderRadius}",
              border: "1px solid ${currentTheme.borderColor}",
              boxShadow: "${currentTheme.shadow}",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              marginBottom: 16
            }}
          >
            {/* Header */}
            <div style={{ background: primaryColor, color: "#fff", padding: "16px", display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>${currentTheme.botName}</div>
              <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>✕</button>
            </div>
            {/* Message stream & quick replies */}
            <div style={{ flex: 1, padding: 16, overflowY: "auto" }}>
              <div style={{ background: "${currentTheme.botBubbleBg}", color: "${currentTheme.botBubbleText}", padding: 12, borderRadius: 16, fontSize: 13 }}>
                ${currentTheme.proactiveMessage}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          background: primaryColor,
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20
        }}
      >
        {isOpen ? "✕" : "💬"}
      </motion.button>
    </div>
  )
}`
      : `<!-- Framer Custom Code Embed: Paste into Site Settings > General > Custom Code -->
<script
  src="https://cdn.jsdelivr.net/npm/aura-chat-widget@latest/dist/embed.js"
  data-theme="${currentTheme.id}"
  data-primary-color="${currentTheme.primaryColor}"
  data-bot-name="${currentTheme.botName}"
  async
></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className={`w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] transition-colors ${
              isDarkMode
                ? 'bg-[#0f1420] border border-slate-800 text-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
                : 'bg-white border border-slate-200 text-slate-900'
            }`}
          >
            {/* Header */}
            <div className={`p-5 border-b flex items-center justify-between transition-colors ${
              isDarkMode ? 'border-slate-800 bg-[#0f1420]' : 'border-slate-200/80 bg-white'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-xl border ${
                  isDarkMode
                    ? 'bg-slate-850 text-indigo-400 border-slate-700/80'
                    : 'bg-slate-100 text-slate-800 border-slate-200'
                }`}>
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Framer Integration Snippet
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Engineered with zero stylesheet collisions for Framer sites
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  isDarkMode
                    ? 'hover:bg-slate-800 text-slate-400 hover:text-white'
                    : 'hover:bg-slate-100 text-slate-400 hover:text-slate-700'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Switcher Tabs */}
            <div className={`flex items-center px-6 pt-4 gap-2 border-b pb-3 transition-colors ${
              isDarkMode
                ? 'border-slate-800 bg-[#0b0f19]'
                : 'border-slate-200/80 bg-slate-50/50'
            }`}>
              <button
                onClick={() => setEmbedType('codeComponent')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  embedType === 'codeComponent'
                    ? isDarkMode
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-900 text-white shadow-xs'
                    : isDarkMode
                      ? 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-800'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                React Framer Code Component
              </button>
              <button
                onClick={() => setEmbedType('scriptEmbed')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  embedType === 'scriptEmbed'
                    ? isDarkMode
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-900 text-white shadow-xs'
                    : isDarkMode
                      ? 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-800'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                1-Line HTML Script Tag
              </button>
            </div>

            {/* Code Box */}
            <div className={`p-6 overflow-y-auto flex-1 font-mono text-xs ${
              isDarkMode ? 'bg-[#080b12]' : 'bg-slate-50/30'
            }`}>
              <div className="relative">
                <pre className={`p-4 rounded-2xl overflow-x-auto leading-relaxed border shadow-inner ${
                  isDarkMode
                    ? 'bg-[#05070c] text-slate-200 border-slate-800'
                    : 'bg-slate-900 text-slate-200 border-slate-800'
                }`}>
                  {codeSnippet}
                </pre>

                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 border border-slate-700 shadow-xs transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees Box */}
              <div className={`mt-4 p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                isDarkMode
                  ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                  : 'bg-emerald-50/80 border-emerald-200/80 text-emerald-900'
              }`}>
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Style Isolation Guarantee</span>
                  Uses encapsulated inline style attributes and boundary wrappers so Framer stylesheets will never conflict or override widget elements.
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={`p-4 border-t flex items-center justify-between text-xs transition-colors ${
              isDarkMode
                ? 'border-slate-800 bg-[#0b0f19]'
                : 'border-slate-200/80 bg-slate-50'
            }`}>
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
                Theme: <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>{currentTheme.name}</strong>
              </span>
              <button
                onClick={onClose}
                className={`px-4 py-2 rounded-xl font-medium transition-colors cursor-pointer ${
                  isDarkMode
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
