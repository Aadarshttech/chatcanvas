'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage, QuickReplyOption, ThemeConfig } from '../../types/chat';
import { GET_INITIAL_MESSAGES, RESPONSE_LIBRARY } from '../../data/mockMessages';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { ChatLauncher } from './ChatLauncher';
import {
  RotateCcw,
  Minus,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface ChatWidgetProps {
  theme: ThemeConfig;
  isOpen: boolean;
  onToggle: () => void;
  isMobilePreview?: boolean;
  embedded?: boolean;
  simulationTrigger?: 'stream' | 'handoff' | 'error' | 'reset' | null;
  simulationCount?: number;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  theme,
  isOpen,
  onToggle,
  isMobilePreview = false,
  embedded = false,
  simulationTrigger = null,
  simulationCount = 0,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => GET_INITIAL_MESSAGES(theme.botName));
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isHandoffActive, setIsHandoffActive] = useState(false);
  const [isSimulateErrorActive, setIsSimulateErrorActive] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  // Reset messages when theme changes botName
  useEffect(() => {
    setMessages(GET_INITIAL_MESSAGES(theme.botName));
    setIsHandoffActive(false);
  }, [theme.botName]);

  // Clear unread when opened
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  // Handle external simulation triggers from the studio toolbar
  useEffect(() => {
    if (!simulationTrigger) return;
    if (simulationTrigger === 'stream') {
      handleSendMessage('Can you tell me more about your pricing and Framer setup?');
    } else if (simulationTrigger === 'handoff') {
      setIsHandoffActive(true);
      triggerStreamingReply('Transferring this chat to Sarah Mitchell (Human Lead). She is available now!');
    } else if (simulationTrigger === 'error') {
      setIsSimulateErrorActive(true);
      handleSendMessage('Testing network timeout retry state.');
    } else if (simulationTrigger === 'reset') {
      handleResetConversation();
    }
  }, [simulationTrigger, simulationCount]);

  // Subtle web audio chime for Intercom-level polish without external assets
  const playChime = (type: 'send' | 'receive' | 'error') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'send') {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'receive') {
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else {
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.setValueAtTime(200, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch {
      // AudioContext unavailable or blocked by browser policy
    }
  };

  // Streaming response generator
  const triggerStreamingReply = (responseText: string, nextReplies?: QuickReplyOption[]) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const msgId = `bot-${Date.now()}`;

      // Start streaming message
      const initialBotMessage: ChatMessage = {
        id: msgId,
        sender: isHandoffActive ? 'agent' : 'bot',
        text: '',
        timestamp: 'Just now',
        isStreaming: true,
        agentInfo: isHandoffActive
          ? {
              name: 'Sarah Mitchell',
              avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
              role: 'Support Specialist',
            }
          : undefined,
      };

      setMessages((prev) => [...prev, initialBotMessage]);
      playChime('receive');

      let currentLength = 0;
      const step = 4;
      const interval = setInterval(() => {
        currentLength += step;
        const currentSlice = responseText.slice(0, currentLength);

        setMessages((prev) =>
          prev.map((m) =>
            m.id === msgId
              ? {
                  ...m,
                  text: currentSlice,
                }
              : m
          )
        );

        if (currentLength >= responseText.length) {
          clearInterval(interval);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === msgId
                ? {
                    ...m,
                    text: responseText,
                    isStreaming: false,
                    quickReplies: nextReplies,
                  }
                : m
            )
          );
        }
      }, 25);
    }, 900);
  };

  const handleSendMessage = (text: string) => {
    playChime('send');

    const userMsgId = `user-${Date.now()}`;
    const userMessage: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text,
      timestamp: 'Just now',
      status: 'delivered',
    };

    setMessages((prev) => [...prev, userMessage]);

    // Handle error simulation
    if (isSimulateErrorActive) {
      setTimeout(() => {
        playChime('error');
        setMessages((prev) =>
          prev.map((m) =>
            m.id === userMsgId ? { ...m, status: 'error' } : m
          )
        );
      }, 700);
      return;
    }

    // Check for How Hisabify Works
    if (text.toLowerCase().includes('hisabify') || text.toLowerCase().includes('work')) {
      triggerStreamingReply(RESPONSE_LIBRARY['how-it-works'].text);
      return;
    }

    // Default simple reply without suggestion buttons
    triggerStreamingReply(
      `Thanks for reaching out! Let me know if you have any questions about how Hisabify works, tracking expenses, or splitting bills.`
    );
  };

  const handleQuickReplySelect = (option: QuickReplyOption) => {
    handleSendMessage(option.response);
  };

  const handleRetryMessage = (messageId: string) => {
    setIsSimulateErrorActive(false);
    setMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, status: 'delivered' } : m))
    );
    triggerStreamingReply(`Reconnected successfully! Your message was delivered and processed.`);
  };

  const handleResetConversation = () => {
    setMessages(GET_INITIAL_MESSAGES(theme.botName));
    setIsHandoffActive(false);
    setIsSimulateErrorActive(false);
    playChime('send');
  };



  return (
    <>
      {/* Floating Launcher (only when not in embedded stage mode) */}
      {!embedded && (
        <ChatLauncher
          isOpen={isOpen}
          onToggle={onToggle}
          theme={theme}
          unreadCount={unreadCount}
        />
      )}

      {/* Main Chat Panel Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={embedded ? { opacity: 0, scale: 0.98 } : { opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={embedded ? { opacity: 0, scale: 0.98 } : { opacity: 0, y: 25, scale: 0.94 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className={`flex flex-col overflow-hidden border transition-all ${
              embedded
                ? 'relative w-full h-[520px] sm:h-[550px] max-h-[100%] rounded-2xl mx-auto shadow-none'
                : isMobilePreview
                ? 'fixed z-50 inset-x-3 bottom-3 top-16 rounded-3xl shadow-xl'
                : 'fixed z-50 bottom-24 right-6 w-[410px] h-[640px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-120px)] shadow-xl'
            }`}
            style={{
              backgroundColor: theme.bgColor,
              borderColor: theme.borderColor,
              borderRadius: isMobilePreview ? '1.5rem' : theme.borderRadius,
              boxShadow: embedded ? 'none' : theme.shadow,
              fontFamily: theme.fontFamily,
              backdropFilter: theme.glassmorphism ? 'blur(20px)' : 'none',
            }}
          >
            {/* Full Strawberry Illustration Background Artwork */}
            {theme.id === 'pastel' && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-0 select-none bg-cover bg-top bg-no-repeat"
                style={{
                  backgroundImage: "url('/strawberry-bg.png')",
                  backgroundPosition: 'top center',
                  backgroundSize: '100% 100%',
                }}
              />
            )}

            {/* Full Chocolate Illustration Background Artwork */}
            {theme.id === 'velvet' && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-0 select-none bg-cover bg-top bg-no-repeat"
                style={{
                  backgroundImage: "url('/chocolate-bg.jpg')",
                  backgroundPosition: 'top center',
                  backgroundSize: '100% 100%',
                }}
              />
            )}

            {/* Full Hisabify Illustration Background Artwork */}
            {theme.id === 'aura' && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-0 select-none bg-cover bg-top bg-no-repeat"
                style={{
                  backgroundImage: "url('/hisabify-bg.png')",
                  backgroundPosition: 'top center',
                  backgroundSize: '100% 100%',
                }}
              />
            )}

            {/* Widget Top Header */}
            <div
              className={`p-4 flex items-center justify-between relative overflow-hidden transition-colors ${
                theme.id === 'pastel' || theme.id === 'velvet' || theme.id === 'aura' ? 'z-10' : ''
              }`}
              style={{
                background:
                  theme.headerBg ||
                  `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
                color: theme.headerText || '#ffffff',
                borderBottom:
                  theme.headerBorder && theme.headerBorder !== 'transparent'
                    ? `1px solid ${theme.headerBorder}`
                    : 'none',
              }}
            >
              {/* Header Profile / Bot Info */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <img
                    src={isHandoffActive ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face' : theme.avatarUrl}
                    alt={theme.botName}
                    className={`w-10 h-10 rounded-full object-cover shadow-md ${
                      theme.id === 'aura'
                        ? theme.isDark
                          ? 'ring-2 ring-amber-400/40 bg-[#16362B]'
                          : 'ring-2 ring-amber-300/50 bg-[#FFF7D6]'
                        : 'ring-2 ring-white/30'
                    }`}
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#10251D] rounded-full" />
                </div>

                <div>
                  <h3
                    className="text-sm font-bold tracking-tight leading-none"
                    style={{
                      color: theme.headerText || (theme.id === 'aura' && !theme.isDark ? '#1A3D34' : '#ffffff'),
                    }}
                  >
                    {isHandoffActive ? 'Sarah Mitchell' : theme.botName}
                  </h3>
                  <p
                    className="text-[11px] mt-1 leading-tight flex items-center gap-1.5 font-medium"
                    style={{
                      color:
                        theme.id === 'aura'
                          ? 'rgba(255, 255, 255, 0.92)'
                          : 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {isHandoffActive ? 'Typically replies in <1m' : 'Online'}
                  </p>
                </div>
              </div>

              {/* Header Action Controls */}
              <div
                className="flex items-center gap-1 relative z-10"
                style={{
                  color: theme.headerText || 'rgba(255, 255, 255, 0.95)',
                }}
              >
                {/* Reset Conversation */}
                <button
                  onClick={handleResetConversation}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-white/15"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Subtle vertical separator as shown in reference */}
                <div className="w-px h-3 bg-white/20 mx-0.5" />

                {/* Sound Toggle */}
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? 'Mute sound' : 'Enable sound'}
                  className="p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-white/15"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Minimize Button */}
                <button
                  onClick={onToggle}
                  title="Minimize chat"
                  className="p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-white/15"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Panel Body */}
            <MessageList
              messages={messages}
              theme={theme}
              isTyping={isTyping}
              onQuickReplySelect={handleQuickReplySelect}
              onRetryMessage={handleRetryMessage}
              isHandoffActive={isHandoffActive}
              onReturnToAI={() => setIsHandoffActive(false)}
            />

            <ChatInput
              onSendMessage={handleSendMessage}
              theme={theme}
              disabled={isTyping}
              isSimulateErrorActive={isSimulateErrorActive}
              onToggleSimulateError={() => setIsSimulateErrorActive(!isSimulateErrorActive)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
