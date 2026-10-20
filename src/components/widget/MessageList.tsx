'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage, QuickReplyOption, ThemeConfig } from '../../types/chat';
import { QuickReplies } from './QuickReplies';
import { TypingIndicator } from './TypingIndicator';
import { HumanHandoffCard } from './HumanHandoffCard';
import { ThumbsUp, ThumbsDown, Check, CheckCheck, RefreshCw, AlertTriangle, Lock } from 'lucide-react';

interface MessageListProps {
  messages: ChatMessage[];
  theme: ThemeConfig;
  isTyping: boolean;
  onQuickReplySelect: (option: QuickReplyOption) => void;
  onRetryMessage?: (messageId: string) => void;
  isHandoffActive?: boolean;
  onReturnToAI?: () => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  theme,
  isTyping,
  onQuickReplySelect,
  onRetryMessage,
  isHandoffActive,
  onReturnToAI,
}) => {
  const endRef = useRef<HTMLDivElement>(null);
  const [reactions, setReactions] = useState<Record<string, 'up' | 'down'>>({});

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isHandoffActive]);

  const handleFeedback = (msgId: string, type: 'up' | 'down') => {
    setReactions((prev) => ({
      ...prev,
      [msgId]: prev[msgId] === type ? undefined! : type,
    }));
  };

  const renderFormattedText = (text: string) => {
    // Basic formatting for bullet points and bold
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      let content = line;
      const isBullet = content.trim().startsWith('•') || content.trim().startsWith('-');
      if (isBullet) {
        content = content.trim().substring(1).trim();
      }

      // Format **bold**
      const parts = content.split(/(\*\*.*?\*\*)/g);

      return (
        <span key={idx} className={isBullet ? 'block pl-3 my-0.5 relative before:content-["•"] before:absolute before:left-0 before:text-current before:opacity-60' : 'block my-0.5'}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-semibold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5 scroll-smooth custom-scrollbar relative">


      {/* Clean Enterprise Session Timestamp & Security Indicator */}
      <div className="flex items-center justify-center my-3 relative z-10">
        <div className="flex items-center gap-2 px-2 text-[11px] font-medium tracking-wide text-slate-500/80 dark:text-slate-400">
          <div className="w-8 h-px bg-slate-200 dark:bg-slate-700/60" />
          <span className="flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
            <Lock className="w-2.5 h-2.5 opacity-60" />
            Today • Encrypted
          </span>
          <div className="w-8 h-px bg-slate-200 dark:bg-slate-700/60" />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {messages.map((message) => {
          const isUser = message.sender === 'user';
          const isAgent = message.sender === 'agent';
          const reaction = reactions[message.id];

          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} group relative z-10`}
            >
              <div className={`flex items-end gap-2 max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Bot / Agent Avatar */}
                {!isUser && (
                  <div className="relative flex-shrink-0 mb-1">
                    <img
                      src={isAgent ? (message.agentInfo?.avatar || theme.avatarUrl) : theme.avatarUrl}
                      alt="avatar"
                      className={`w-7 h-7 rounded-full object-cover border shadow-sm ring-1.5 ${
                        theme.id === 'intercom'
                          ? theme.isDark
                            ? 'ring-slate-700 border-slate-800'
                            : 'ring-slate-300 border-slate-200'
                          : theme.id === 'aura'
                          ? 'ring-amber-300/40 bg-[#FFF7D6]'
                          : theme.isDark
                          ? 'ring-white/10'
                          : 'ring-black/5'
                      }`}
                      style={{
                        borderColor: theme.borderColor,
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                      }}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                  </div>
                )}

                {/* Bubble Container */}
                <div className="flex flex-col">
                  <div
                    className={`px-4 py-3 rounded-2xl text-[12.5px] leading-relaxed relative ${
                      isUser
                        ? 'rounded-br-xs shadow-sm font-normal'
                        : 'rounded-bl-xs shadow-xs font-normal'
                    }`}
                    style={{
                      background: isUser ? theme.userBubbleBg : theme.botBubbleBg,
                      color: isUser ? theme.userBubbleText : theme.botBubbleText,
                      border: isUser ? 'none' : `1px solid ${theme.borderColor}`,
                      backdropFilter: theme.glassmorphism ? 'blur(12px)' : 'none',
                    }}
                  >
                    {renderFormattedText(message.text)}

                    {/* Streaming Cursor */}
                    {message.isStreaming && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-1.5 h-3 ml-1 align-middle rounded-full"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                    )}

                    {/* Error State Banner */}
                    {message.status === 'error' && (
                      <div className="mt-2 pt-2 border-t border-rose-300/40 text-rose-600 flex items-center justify-between gap-2 text-[11px]">
                        <span className="flex items-center gap-1 font-medium">
                          <AlertTriangle className="w-3 h-3" /> Sending failed
                        </span>
                        {onRetryMessage && (
                          <button
                            onClick={() => onRetryMessage(message.id)}
                            className="inline-flex items-center gap-1 underline font-medium hover:text-rose-800 cursor-pointer"
                          >
                            <RefreshCw className="w-2.5 h-2.5" /> Retry
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Message Meta & Micro-interactions */}
                  <div className={`flex items-center gap-2 mt-1 px-1 text-[11px] font-medium ${
                    theme.id === 'aura' || theme.id === 'velvet' || theme.id === 'pastel'
                      ? 'text-slate-600 dark:text-slate-700'
                      : 'text-slate-500 dark:text-slate-400'
                  } ${isUser ? 'justify-end' : 'justify-start'}`}>
                    <span>{message.timestamp}</span>

                    {isUser && message.status && (
                      <span className="inline-flex items-center">
                        {message.status === 'read' ? (
                          <CheckCheck className="w-3 h-3 text-emerald-500" />
                        ) : message.status === 'delivered' ? (
                          <CheckCheck className="w-3 h-3" />
                        ) : message.status === 'sent' ? (
                          <Check className="w-3 h-3" />
                        ) : null}
                      </span>
                    )}

                    {!isUser && !message.isStreaming && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 ml-1">
                        <button
                          onClick={() => handleFeedback(message.id, 'up')}
                          title="Helpful"
                          className="p-0.5 rounded transition-colors cursor-pointer hover:bg-black/10 text-slate-600"
                        >
                          <ThumbsUp className={`w-2.5 h-2.5 ${reaction === 'up' ? 'text-emerald-600 fill-emerald-600 font-bold' : ''}`} />
                        </button>
                        <button
                          onClick={() => handleFeedback(message.id, 'down')}
                          title="Not helpful"
                          className="p-0.5 rounded transition-colors cursor-pointer hover:bg-black/10 text-slate-600"
                        >
                          <ThumbsDown className={`w-2.5 h-2.5 ${reaction === 'down' ? 'text-rose-600 fill-rose-600 font-bold' : ''}`} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Replies attached to message */}
              {message.quickReplies && message.quickReplies.length > 0 && (
                <div className="pl-9 mt-1">
                  <QuickReplies
                    options={message.quickReplies}
                    onSelect={onQuickReplySelect}
                    theme={theme}
                    disabled={isTyping}
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>


      {/* Typing indicator */}
      {isTyping && (
        <div className="pl-9">
          <TypingIndicator theme={theme} />
        </div>
      )}

      <div ref={endRef} />
    </div>
  );
};
