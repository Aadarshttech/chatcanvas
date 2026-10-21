'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeConfig, ThemeId } from '../../types/chat';
import { ChatWidget } from '../widget/ChatWidget';
import { DeviceMode } from './ShowroomNavbar';
import {
  Sparkles,
  UserCheck,
  AlertTriangle,
  RotateCcw,
  Wifi,
  Copy,
  Check,
  Code2,
  MessageSquare,
  Cpu,
  Zap,
  Receipt,
  HeartHandshake,
  ShieldCheck,
  Lock,
  Globe,
  RefreshCw,
  Search,
  Sliders,
  ChevronLeft,
  Phone,
  Compass,
  MessageCircle,
} from 'lucide-react';
import { ThemeAppIcon } from './ThemeAppIcon';

interface StudioCanvasProps {
  currentTheme: ThemeConfig;
  themes: ThemeConfig[];
  selectedThemeId: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
  deviceMode: DeviceMode;
  onOpenEmbedModal: () => void;
  isDarkMode?: boolean;
}

export const StudioCanvas: React.FC<StudioCanvasProps> = ({
  currentTheme,
  themes,
  selectedThemeId,
  onSelectTheme,
  deviceMode,
  onOpenEmbedModal,
  isDarkMode = false,
}) => {
  const [simulationTrigger, setSimulationTrigger] = useState<
    'stream' | 'handoff' | 'error' | 'reset' | null
  >(null);
  const [simulationCount, setSimulationCount] = useState(0);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [hoveredDockItem, setHoveredDockItem] = useState<string | null>(null);
  const [isChatAppOpen, setIsChatAppOpen] = useState(false);

  const triggerSimulation = (type: 'stream' | 'handoff' | 'error' | 'reset') => {
    setSimulationTrigger(type);
    setSimulationCount((c) => c + 1);
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(`<ChatWidget theme="${currentTheme.id}" />`);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const getThemeIcon = (id: ThemeId) => {
    switch (id) {
      case 'intercom':
        return <MessageSquare className="w-5 h-5 text-white" />;
      case 'velvet':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'aura':
        return (
          <img
            src="/hisabify-logo.png"
            alt="Hisabify"
            className="w-5 h-5 rounded-md object-cover"
          />
        );
      case 'pastel':
        return <HeartHandshake className="w-5 h-5 text-white" />;
      default:
        return <MessageSquare className="w-5 h-5 text-white" />;
    }
  };

  const getFontDisplayName = (id: ThemeId) => {
    switch (id) {
      case 'intercom':
        return 'Plus Jakarta Sans (Executive)';
      case 'velvet':
        return 'Fraunces Serif (Velvet Cocoa)';
      case 'aura':
        return 'Fredoka Rounded Sans (Botanical)';
      case 'pastel':
        return 'DM Sans (Friendly Berry)';
      default:
        return 'Plus Jakarta Sans';
    }
  };

  const getThemeIconEmoji = (id: ThemeId) => {
    switch (id) {
      case 'pastel':
        return '🍓';
      case 'velvet':
        return '🍫';
      case 'aura':
        return (
          <img
            src="/hisabify-logo.png"
            alt="Hisabify"
            className="w-8 h-8 rounded-xl object-cover inline-block shadow-sm"
          />
        );
      case 'intercom':
        return '💼';
      default:
        return '💬';
    }
  };

  const getSafariThemeStyles = (id: ThemeId, dark: boolean) => {
    switch (id) {
      case 'pastel':
        return {
          windowBg: dark
            ? 'bg-[#180B12]/95 border-rose-950/80 shadow-[0_30px_90px_rgba(225,29,72,0.15)] text-rose-50'
            : 'bg-gradient-to-br from-[#FFF5F6] via-[#FFF9FA] to-[#FFEBEF] border-rose-200/80 shadow-[0_30px_90px_rgba(225,29,72,0.12)] text-slate-900',
          headerBg: dark ? 'bg-[#200F18]/90 border-rose-950/80' : 'bg-[#FFE8EC]/70 border-rose-200/70',
          addressBarBg: dark ? 'bg-[#12070D] border-rose-900/40 text-rose-200' : 'bg-white/90 border-rose-200/80 text-rose-900',
          calloutCardBg: dark
            ? 'bg-[#25101C]/90 border-rose-900/50 text-rose-100'
            : 'bg-white/95 border-rose-200/80 text-slate-900 shadow-md shadow-rose-500/5',
          calloutBubbleBg: dark
            ? 'bg-[#180912]/80 border-rose-900/40 text-rose-200'
            : 'bg-[#FFF0F3] border-rose-200/70 text-[#9F1239]',
          decorSvg: 'strawberry',
          titleColor: dark ? 'text-rose-100' : 'text-[#881337]',
          subtitleColor: dark ? 'text-rose-300/80' : 'text-[#4C0519]',
          desktopWallpaper: dark
            ? 'bg-gradient-to-br from-[#1C0A14] via-[#2A0F1F] to-[#14060E]'
            : 'bg-gradient-to-br from-[#FFE8EC] via-[#FFF1F4] to-[#FFDEE6]',
        };

      case 'velvet':
        return {
          windowBg: dark
            ? 'bg-[#1C1410]/95 border-[#3E2519]/70 shadow-[0_30px_90px_rgba(0,0,0,0.6)] text-[#FDF8F3]'
            : 'bg-gradient-to-br from-[#FAF5F0] via-[#FCF8F5] to-[#F5ECE4] border-amber-200/80 shadow-[0_30px_90px_rgba(84,47,26,0.12)] text-slate-900',
          headerBg: dark ? 'bg-[#251A14]/90 border-[#3E2519]/80' : 'bg-[#EFE4DA]/70 border-amber-200/70',
          addressBarBg: dark ? 'bg-[#140E0A] border-[#4A2D1F]/50 text-[#FCE7D2]' : 'bg-white/90 border-amber-200/80 text-amber-900',
          calloutCardBg: dark
            ? 'bg-[#281D17]/90 border-[#4D3123]/70 text-[#FFF7ED] shadow-lg shadow-black/20'
            : 'bg-white/95 border-amber-200/80 text-slate-900 shadow-md shadow-amber-900/5',
          calloutBubbleBg: dark
            ? 'bg-[#1E1510]/90 border-[#4D3123]/50 text-[#FDE68A]'
            : 'bg-[#F7EFE8] border-amber-200/70 text-[#542F1A]',
          decorSvg: 'chocolate',
          titleColor: dark ? 'text-[#FFF7ED]' : 'text-[#3E1F0F]',
          subtitleColor: dark ? 'text-[#FCD34D]' : 'text-[#542F1A]',
          desktopWallpaper: dark
            ? 'bg-gradient-to-br from-[#120B07] via-[#1F130D] to-[#0A0604]'
            : 'bg-gradient-to-br from-[#EFE5DB] via-[#F8F1EB] to-[#E5D7CB]',
        };

      case 'aura':
        return {
          windowBg: dark
            ? 'bg-[#0E1B15]/95 border-emerald-950/80 shadow-[0_30px_90px_rgba(45,106,79,0.15)] text-emerald-50'
            : 'bg-gradient-to-br from-[#F6FBF8] via-[#FAFDFB] to-[#EEF7F2] border-emerald-200/80 shadow-[0_30px_90px_rgba(45,106,79,0.12)] text-slate-900',
          headerBg: dark ? 'bg-[#14261E]/90 border-emerald-950/80' : 'bg-[#E3F2E9]/70 border-emerald-200/70',
          addressBarBg: dark ? 'bg-[#0A140F] border-emerald-900/40 text-emerald-200' : 'bg-white/90 border-emerald-200/80 text-emerald-900',
          calloutCardBg: dark
            ? 'bg-[#162D23]/90 border-emerald-900/50 text-emerald-100'
            : 'bg-white/95 border-emerald-200/80 text-slate-900 shadow-md shadow-emerald-900/5',
          calloutBubbleBg: dark
            ? 'bg-[#0E1E17]/80 border-emerald-900/40 text-emerald-200'
            : 'bg-[#EBF7F0] border-emerald-200/70 text-[#14532D]',
          decorSvg: 'botanical',
          titleColor: dark ? 'text-emerald-100' : 'text-[#14532D]',
          subtitleColor: dark ? 'text-emerald-300/80' : 'text-[#1F513F]',
          desktopWallpaper: dark
            ? 'bg-gradient-to-br from-[#0B1712] via-[#142920] to-[#07110C]'
            : 'bg-gradient-to-br from-[#E2F0E7] via-[#EEF7F2] to-[#D5EADC]',
        };

      case 'intercom':
      default:
        return {
          windowBg: dark
            ? 'bg-[#0F172A]/95 border-slate-800 shadow-[0_30px_90px_rgba(0,0,0,0.7)] text-white'
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100/90 border-slate-200/90 shadow-2xl text-slate-900',
          headerBg: dark ? 'bg-[#181a24] border-white/10' : 'bg-slate-100/80 border-slate-200/80',
          addressBarBg: dark ? 'bg-[#0f1117] border-white/10 text-slate-300' : 'bg-white border-slate-200/90 text-slate-600',
          calloutCardBg: dark
            ? 'bg-[#151922] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900 shadow-sm',
          calloutBubbleBg: dark
            ? 'bg-slate-900/80 border-slate-800/80 text-slate-200'
            : 'bg-slate-50 border-slate-200/70 text-slate-800',
          decorSvg: null,
          titleColor: dark ? 'text-white' : 'text-slate-900',
          subtitleColor: dark ? 'text-slate-300' : 'text-slate-700',
          desktopWallpaper: dark
            ? 'bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#1e1b4b]'
            : 'bg-gradient-to-br from-[#e0e7ff] via-[#e8f0fe] to-[#f1f5f9]',
        };
    }
  };

  return (
    <div
      className={`w-full flex-1 py-6 sm:py-8 px-2 sm:px-6 flex flex-col items-center justify-center transition-colors duration-300 ${
        isDarkMode ? 'studio-grid-dark bg-[#07090e]' : 'studio-grid bg-[#f8fafc]'
      }`}
    >
      {/* =========================================================================
          DEVICE FRAME: EXPANDED IMAC 24"/27" / WIDESCREEN IPAD PRO / IPHONE
          ========================================================================= */}
      <div className="w-full flex flex-col items-center justify-center transition-all duration-500">
        
        {/* ==================== 1. IMAC DESKTOP VIEW (EXPANDED & DOCK) ==================== */}
        {deviceMode === 'desktop' && (
          <div className="relative w-full max-w-[1240px] xl:max-w-[1280px] transition-all">
            {/* iMac Aluminum Chassis */}
            <div className="relative mx-auto rounded-[32px] p-3 sm:p-4 bg-[#1b1c1e] border-[3px] border-[#313337] shadow-[0_45px_120px_-20px_rgba(0,0,0,0.4),0_15px_45px_rgba(0,0,0,0.18)] ring-1 ring-white/10">
              
              {/* iMac Display Enclosure */}
              <div className="relative rounded-[22px] overflow-hidden bg-slate-900 border border-slate-700/60 flex flex-col min-h-[740px] sm:min-h-[790px] shadow-inner">
                
                {/* macOS Menu Bar */}
                <div className="w-full px-4 py-1.5 bg-slate-900/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between text-xs text-slate-300 select-none z-30">
                  {/* Left: Apple Menu */}
                  <div className="flex items-center gap-4 font-medium">
                    <span className="text-white text-sm cursor-pointer hover:opacity-80"></span>
                    <span className="font-semibold text-white tracking-tight">ChatCanvas</span>
                    <span className="hidden sm:inline hover:text-white cursor-pointer">File</span>
                    <span className="hidden sm:inline hover:text-white cursor-pointer">Edit</span>
                    <span className="hidden sm:inline hover:text-white cursor-pointer">View</span>
                    <span className="hidden md:inline hover:text-white cursor-pointer">Window</span>
                  </div>

                  {/* Center: FaceTime Camera dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-black/90 ring-1 ring-white/20 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-blue-950/80" />
                  </div>

                  {/* Right: macOS Status Items */}
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300">
                      <span>Active:</span>
                      <strong className="text-white font-medium">{currentTheme.name}</strong>
                    </div>
                    <Wifi className="w-3.5 h-3.5 text-slate-300" />
                    <span className="text-[11px] text-slate-300 font-mono">Tue Oct 20 9:41 AM</span>
                  </div>
                </div>

                {/* macOS Desktop Area with Safari Window */}
                {(() => {
                  const st = getSafariThemeStyles(currentTheme.id, isDarkMode);

                  return (
                    <div
                      className={`flex-1 relative p-3 sm:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 ${st.desktopWallpaper}`}
                    >
                      {/* Safari Window (Elevated on the Mac Desktop) */}
                      <div
                        className={`w-full max-w-[1140px] mx-auto rounded-2xl border overflow-hidden flex flex-col transition-all backdrop-blur-md relative ${st.windowBg}`}
                      >
                        {/* Themed ambient illustration (Only in light mode) */}
                        {!isDarkMode && currentTheme.id === 'pastel' && (
                          <div className="absolute bottom-0 left-0 w-64 h-24 sm:w-80 sm:h-28 pointer-events-none select-none z-0">
                            <img
                              src="/strawberry-wide-bg.png"
                              alt="Strawberry Decor"
                              className="w-full h-full object-contain object-left-bottom"
                            />
                          </div>
                        )}




                        {/* Safari Window Header Bar */}
                        <div
                          className={`px-4 py-2.5 border-b flex items-center justify-between gap-4 select-none transition-colors relative z-10 ${st.headerBg}`}
                        >
                          {/* macOS Window Traffic Lights */}
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer" />
                          </div>

                          {/* Safari Address Bar */}
                          <div
                            className={`flex-1 max-w-[460px] mx-auto px-3.5 py-1 rounded-xl text-[11px] font-mono flex items-center justify-center gap-2 shadow-2xs border transition-colors ${st.addressBarBg}`}
                          >
                            <Lock className="w-3 h-3 opacity-60" />
                            <span className="truncate">client-studio.framer.app</span>
                            <RefreshCw className="w-2.5 h-2.5 opacity-60 ml-auto" />
                          </div>

                          {/* Copy Snippet Button */}
                          <button
                            onClick={handleCopySnippet}
                            onMouseEnter={() => setActiveTooltip('Copy <ChatWidget /> Embed Code')}
                            onMouseLeave={() => setActiveTooltip(null)}
                            title="Copy Snippet"
                            className={`p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                              isDarkMode
                                ? 'bg-white/10 border-white/15 text-slate-100 hover:bg-white/20'
                                : 'bg-white/90 border-slate-200 text-slate-800 hover:bg-white'
                            }`}
                          >
                            {copiedSnippet ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Embed Code</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Active Tooltip Banner */}
                        {activeTooltip && (
                          <div className="w-full bg-slate-900 text-white text-[10px] font-medium py-1 text-center tracking-tight transition-all border-y border-white/10 relative z-10">
                            {activeTooltip}
                          </div>
                        )}

                        {/* Safari Page Content (Spacious Dual Pane) */}
                        <div className="p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[540px] relative z-10">
                          {/* Left: Ambient Framer Site Showcase */}
                          <div className="hidden md:flex flex-col justify-center flex-1 max-w-[460px] pl-2 select-none">
                            {/* Main Theme Heading */}
                            <div className="flex items-center gap-2.5 mb-2.5">
                              <h2
                                className={`text-3xl lg:text-4xl font-bold tracking-tight leading-tight transition-colors ${st.titleColor}`}
                                style={{ fontFamily: currentTheme.fontFamily }}
                              >
                                {currentTheme.name}
                              </h2>
                            </div>

                            {/* Structured Subtitle & Typography Description */}
                            <div className="space-y-1 mb-5">
                              <p
                                className={`text-sm font-semibold leading-normal transition-colors ${st.titleColor}`}
                              >
                                {currentTheme.tagline.split('•')[0].trim()}
                              </p>
                              {currentTheme.tagline.split('•')[1] && (
                                <p
                                  className={`text-xs leading-relaxed transition-colors opacity-80 ${st.subtitleColor}`}
                                >
                                  {currentTheme.tagline.split('•')[1].trim()}
                                </p>
                              )}
                            </div>

                            {/* Proactive Greeting Speech Bubble Callout */}
                            {currentTheme.proactiveMessage && (
                              <div className="mt-2 max-w-[400px] w-full">
                                <div
                                  className={`p-4 rounded-2xl border transition-all ${st.calloutCardBg}`}
                                  style={{ fontFamily: currentTheme.fontFamily }}
                                >
                                  {/* Bot Info Header */}
                                  <div className="flex items-center justify-between mb-2.5">
                                    <div className="flex items-center gap-2.5">
                                      <div className="relative">
                                        <img
                                          src={currentTheme.avatarUrl}
                                          alt={currentTheme.botName}
                                          className="w-9 h-9 rounded-full object-cover border shadow-2xs"
                                        />
                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                                      </div>

                                      <div>
                                        <span className={`text-xs font-bold tracking-tight block ${st.titleColor}`}>
                                          {currentTheme.botName}
                                        </span>
                                        <span className="text-[11px] block mt-0.5 opacity-70">
                                          Active now
                                        </span>
                                      </div>
                                    </div>

                                    <span className="text-[11px] font-medium opacity-60">
                                      Just now
                                    </span>
                                  </div>

                                  {/* Greeting Bubble Body */}
                                  <div
                                    className={`p-3 rounded-xl border text-xs sm:text-[13px] leading-relaxed transition-colors ${st.calloutBubbleBg}`}
                                  >
                                    <p>{currentTheme.proactiveMessage}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Right: The Interactive Chatbot Widget */}
                          <div className="w-full max-w-[390px] flex-shrink-0 flex items-center justify-center">
                            <ChatWidget
                              theme={currentTheme}
                              isOpen={true}
                              onToggle={() => {}}
                              isMobilePreview={false}
                              embedded={true}
                              simulationTrigger={simulationTrigger}
                              simulationCount={simulationCount}
                            />
                          </div>
                        </div>
                      </div>

                      {/* =========================================================
                          MACOS DOCK: Theme Icons as Bespoke Apple Squircle App Icons
                          ========================================================= */}
                      <div className="w-full pt-4 pb-2 flex flex-col items-center justify-center select-none z-30 relative">
                        {/* Floating macOS Dock Tooltip */}
                        <AnimatePresence>
                          {hoveredDockItem && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              className="absolute -top-7 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-medium tracking-tight shadow-xl backdrop-blur-md border border-white/10 pointer-events-none"
                            >
                              {hoveredDockItem}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div
                          className={`px-4 py-2.5 rounded-[26px] backdrop-blur-2xl border flex items-center gap-3.5 transition-colors ${
                            isDarkMode
                              ? 'bg-[#161820]/85 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.65)]'
                              : 'bg-white/75 border-white/80 shadow-[0_20px_45px_rgba(0,0,0,0.12)]'
                          }`}
                        >
                          {themes.map((theme) => {
                            const isSelected = selectedThemeId === theme.id;

                            return (
                              <button
                                key={theme.id}
                                onClick={() => onSelectTheme(theme.id)}
                                onMouseEnter={() => setHoveredDockItem(`${theme.name} • ${theme.category}`)}
                                onMouseLeave={() => setHoveredDockItem(null)}
                                className="relative flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:-translate-y-2.5 active:scale-95"
                              >
                                <ThemeAppIcon
                                  themeId={theme.id}
                                  size={52}
                                  isSelected={isSelected}
                                />

                                {/* Active Theme Indicator Dot */}
                                <span
                                  className={`w-1.5 h-1.5 rounded-full mt-1.5 transition-all ${
                                    isSelected
                                      ? isDarkMode
                                        ? 'bg-white scale-125'
                                        : 'bg-slate-900 scale-125'
                                      : 'bg-transparent'
                                  }`}
                                />
                              </button>
                            );
                          })}

                          <div className={`w-px h-8 mx-1 ${isDarkMode ? 'bg-white/15' : 'bg-slate-300'}`} />

                          {/* Framer Code Modal Launcher in Dock */}
                          <button
                            onClick={onOpenEmbedModal}
                            onMouseEnter={() => setHoveredDockItem('Framer Embed Code Component')}
                            onMouseLeave={() => setHoveredDockItem(null)}
                            className="relative flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:-translate-y-2.5 active:scale-95"
                          >
                            <ThemeAppIcon themeId="framer-code" size={52} />
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-transparent" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* iMac Aluminum Stand Neck & Base */}
            <div className="flex flex-col items-center select-none">
              <div className="w-40 h-10 bg-gradient-to-b from-[#25272a] to-[#1c1d1f] shadow-md border-x border-[#33353a]" />
              <div className="w-64 h-3.5 bg-gradient-to-b from-[#2a2b2e] to-[#18191b] rounded-b-xl shadow-xl border-t border-white/10" />
            </div>
          </div>
        )}

        {/* ==================== 2. WIDESCREEN IPAD PRO VIEW ==================== */}
        {deviceMode === 'ipad' && (
          <div className="relative w-full max-w-[1120px] transition-all">
            {/* iPad Pro Hardware Chassis */}
            <div className="relative mx-auto rounded-[48px] p-3.5 sm:p-5 bg-[#17181a] border-[3px] border-[#2c2d31] shadow-[0_35px_100px_-20px_rgba(0,0,0,0.38),0_12px_36px_rgba(0,0,0,0.15)] ring-1 ring-white/10">
              
              {/* iPad Hardware Buttons */}
              <div className="hidden sm:block absolute -top-[5px] right-32 w-14 h-[3px] bg-[#3a3b40] rounded-t-sm" />
              <div className="hidden sm:block absolute -right-[5px] top-28 w-[3px] h-11 bg-[#3a3b40] rounded-r-sm" />
              <div className="hidden sm:block absolute -right-[5px] top-44 w-[3px] h-11 bg-[#3a3b40] rounded-r-sm" />

              {/* iPad Retina Display Screen (Landscape Widescreen) */}
              {(() => {
                const st = getSafariThemeStyles(currentTheme.id, isDarkMode);

                return (
                  <div
                    className={`relative rounded-[32px] overflow-hidden flex flex-col min-h-[670px] sm:min-h-[710px] shadow-inner transition-colors duration-500 border ${
                      isDarkMode ? 'border-white/10' : 'border-slate-200/80'
                    } ${st.windowBg}`}
                  >
                    {/* iPadOS Status Bar */}
                    <div
                      className={`w-full px-6 pt-3 pb-2 flex items-center justify-between text-xs font-medium select-none z-20 border-b transition-colors ${st.headerBg}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>9:41</span>
                        <span className={`text-[11px] hidden sm:inline font-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>Tuesday, October 20</span>
                      </div>

                      {/* Front Camera Pinhole */}
                      <div className="w-2.5 h-2.5 rounded-full bg-black/90 ring-2 ring-black/30 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-blue-950/80" />
                      </div>

                      {/* Connectivity & Battery */}
                      <div className="flex items-center gap-2">
                        <Wifi className={`w-3.5 h-3.5 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`} />
                        <div className={`w-5 h-2.5 border rounded-sm p-0.5 flex items-center ${isDarkMode ? 'border-slate-500' : 'border-slate-600'}`}>
                          <div className="w-full h-full bg-emerald-500 rounded-2xs" />
                        </div>
                      </div>
                    </div>

                    {/* Safari / Framer Site Browser Chrome on iPad */}
                    <div
                      className={`w-full px-4 sm:px-6 py-2 border-b flex items-center justify-between gap-4 select-none transition-colors ${st.headerBg}`}
                    >
                        <div className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <span className="text-xs font-mono">‹</span>
                          <span className="text-xs font-mono">›</span>
                        </div>

                        {/* Safari Smart Search Bar */}
                        <div
                          className={`flex-1 max-w-[420px] mx-auto px-3.5 py-1 rounded-xl text-[11px] font-mono flex items-center justify-center gap-2 shadow-2xs border transition-colors ${st.addressBarBg}`}
                        >
                          <Lock className="w-3 h-3 opacity-60" />
                          <span className="truncate">client-studio.framer.app</span>
                          <RefreshCw className="w-2.5 h-2.5 opacity-60 ml-auto" />
                        </div>

                        {/* Copy Snippet Button */}
                        <button
                          onClick={handleCopySnippet}
                          onMouseEnter={() => setActiveTooltip('Copy <ChatWidget /> Embed Code')}
                          onMouseLeave={() => setActiveTooltip(null)}
                          title="Copy Snippet"
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                            isDarkMode
                              ? 'bg-white/10 border-white/15 text-slate-100 hover:bg-white/20'
                              : 'bg-white/90 border-slate-200 text-slate-800 hover:bg-white'
                          }`}
                        >
                          {copiedSnippet ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Embed Code</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Active Tooltip Banner */}
                      {activeTooltip && (
                        <div className="w-full bg-slate-900 text-white text-[10px] font-medium py-1 text-center tracking-tight transition-all border-y border-white/10">
                          {activeTooltip}
                        </div>
                      )}

                      {/* Main Widescreen iPad Stage Canvas */}
                      <div
                        className={`flex-1 relative p-6 sm:p-8 min-h-[580px] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden transition-all duration-500 ${st.windowBg}`}
                      >
                        {/* Themed ambient illustration (Only in light mode) */}
                        {!isDarkMode && currentTheme.id === 'pastel' && (
                          <div className="absolute bottom-0 left-0 w-56 h-20 sm:w-72 sm:h-24 pointer-events-none select-none z-0">
                            <img
                              src="/strawberry-wide-bg.png"
                              alt="Strawberry Decor"
                              className="w-full h-full object-contain object-left-bottom"
                            />
                          </div>
                        )}



                  
                  {/* Left Side: Ambient Framer Site Canvas */}
                  <div className="hidden md:flex flex-col justify-center flex-1 max-w-[440px] pl-2 select-none relative z-10">

                    {/* Main Theme Heading */}
                    <h2
                      className={`text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-2.5 transition-colors ${st.titleColor}`}
                      style={{ fontFamily: currentTheme.fontFamily }}
                    >
                      {currentTheme.name}
                    </h2>

                    {/* Structured Subtitle & Typography Description */}
                    <div className="space-y-1 mb-5">
                      <p
                        className={`text-sm font-semibold leading-normal transition-colors ${st.titleColor}`}
                      >
                        {currentTheme.tagline.split('•')[0].trim()}
                      </p>
                      {currentTheme.tagline.split('•')[1] && (
                        <p
                          className={`text-xs leading-relaxed transition-colors opacity-80 ${st.subtitleColor}`}
                        >
                          {currentTheme.tagline.split('•')[1].trim()}
                        </p>
                      )}
                    </div>

                    {/* Proactive Greeting Speech Bubble Callout */}
                    {currentTheme.proactiveMessage && (
                      <div className="mt-2 max-w-[400px] w-full">
                        <div
                          className={`p-4 rounded-2xl border transition-all ${st.calloutCardBg}`}
                          style={{ fontFamily: currentTheme.fontFamily }}
                        >
                          {/* Bot Info Header */}
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="relative">
                                <img
                                  src={currentTheme.avatarUrl}
                                  alt={currentTheme.botName}
                                  className="w-9 h-9 rounded-full object-cover border shadow-2xs"
                                />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                              </div>

                              <div>
                                <span className={`text-xs font-bold tracking-tight block ${st.titleColor}`}>
                                  {currentTheme.botName}
                                </span>
                                <span className="text-[11px] block mt-0.5 opacity-70">
                                  Active now
                                </span>
                              </div>
                            </div>

                            <span className="text-[11px] font-medium opacity-60">
                              Just now
                            </span>
                          </div>

                          {/* Greeting Bubble Body */}
                          <div
                            className={`p-3 rounded-xl border text-xs sm:text-[13px] leading-relaxed transition-colors ${st.calloutBubbleBg}`}
                          >
                            <p>{currentTheme.proactiveMessage}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side: The Interactive Chat Widget */}
                  <div className="w-full max-w-[380px] flex-shrink-0 flex items-center justify-center relative z-10">
                    <ChatWidget
                      theme={currentTheme}
                      isOpen={true}
                      onToggle={() => {}}
                      isMobilePreview={false}
                      embedded={true}
                      simulationTrigger={simulationTrigger}
                      simulationCount={simulationCount}
                    />
                  </div>
                </div>

                {/* =========================================================
                    IPADOS DOCK: Theme Icons as Bespoke Apple Squircle App Icons
                    ========================================================= */}
                <div
                  className="w-full pb-3 pt-2 flex flex-col items-center justify-center select-none z-20 border-t border-black/5 dark:border-white/10 relative transition-colors bg-transparent"
                >
                  {/* Floating iPad Dock Tooltip */}
                  <AnimatePresence>
                    {hoveredDockItem && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute -top-6 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-medium tracking-tight shadow-xl backdrop-blur-md border border-white/10 pointer-events-none"
                      >
                        {hoveredDockItem}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={`px-4 py-2 rounded-[24px] backdrop-blur-2xl border flex items-center gap-3.5 transition-colors ${
                      isDarkMode
                        ? 'bg-[#1a1c24]/85 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)]'
                        : 'bg-white/60 border-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.08)]'
                    }`}
                  >
                    {themes.map((theme) => {
                      const isSelected = selectedThemeId === theme.id;

                      return (
                        <button
                          key={theme.id}
                          onClick={() => onSelectTheme(theme.id)}
                          onMouseEnter={() => setHoveredDockItem(`${theme.name} • ${theme.category}`)}
                          onMouseLeave={() => setHoveredDockItem(null)}
                          className="relative flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:-translate-y-2 active:scale-95"
                        >
                          <ThemeAppIcon
                            themeId={theme.id}
                            size={48}
                            isSelected={isSelected}
                          />

                          {/* Active Theme Indicator Dot */}
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 transition-all ${
                              isSelected
                                ? isDarkMode
                                  ? 'bg-white scale-125'
                                  : 'bg-slate-900 scale-125'
                                : 'bg-transparent'
                            }`}
                          />
                        </button>
                      );
                    })}

                    <div className={`w-px h-7 mx-1 ${isDarkMode ? 'bg-white/15' : 'bg-slate-300'}`} />

                    {/* Framer Code Modal Launcher in Dock */}
                    <button
                      onClick={onOpenEmbedModal}
                      onMouseEnter={() => setHoveredDockItem('Framer Embed Code Component')}
                      onMouseLeave={() => setHoveredDockItem(null)}
                      className="relative flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:-translate-y-2 active:scale-95"
                    >
                      <ThemeAppIcon themeId="framer-code" size={48} />
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-transparent" />
                    </button>
                  </div>

                  {/* iPad Home Indicator Bar */}
                  <div className={`w-32 h-1 rounded-full mx-auto mt-2 ${isDarkMode ? 'bg-white/40' : 'bg-slate-400/80'}`} />
                </div>
              </div>
            );
          })()}
            </div>
          </div>
        )}

        {/* ==================== 3. IPHONE VIEW (WITH HOMESCREEN APP ICONS & CHAT LAUNCH) ==================== */}
        {deviceMode === 'iphone' && (
          <div className="relative mx-auto rounded-[50px] p-3.5 bg-[#17181a] border-[3px] border-[#2b2c30] shadow-[0_35px_90px_-15px_rgba(0,0,0,0.35),0_12px_36px_rgba(0,0,0,0.15)] max-w-[390px] w-full transition-all">
            {/* iPhone Hardware Buttons */}
            <div className="hidden sm:block absolute -left-[5px] top-24 w-[3px] h-8 bg-[#3a3b40] rounded-l-sm" />
            <div className="hidden sm:block absolute -left-[5px] top-36 w-[3px] h-12 bg-[#3a3b40] rounded-l-sm" />
            <div className="hidden sm:block absolute -left-[5px] top-52 w-[3px] h-12 bg-[#3a3b40] rounded-l-sm" />
            <div className="hidden sm:block absolute -right-[5px] top-32 w-[3px] h-16 bg-[#3a3b40] rounded-r-sm" />

            {/* iPhone Display Screen */}
            <div className={`rounded-[40px] overflow-hidden min-h-[730px] flex flex-col justify-between relative shadow-inner transition-colors duration-500 ${
              !isChatAppOpen
                ? isDarkMode
                  ? 'bg-gradient-to-br from-[#090d16] via-[#111322] to-[#1a0f2e] relative'
                  : 'bg-gradient-to-br from-[#dbeafe] via-[#ede9fe] to-[#fce7f3] relative'
                : isDarkMode
                  ? 'bg-[#0a0d14] border border-slate-800'
                  : 'bg-slate-100 border border-slate-200/80'
            }`}>
              
              {/* Authentic Apple iOS Fluid Ambient Wallpaper */}
              {!isChatAppOpen && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  {isDarkMode ? (
                    <>
                      {/* Dark dynamic deep space / indigo ambient ribbons */}
                      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent blur-3xl" />
                      <div className="absolute top-1/4 -right-16 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-600/25 via-violet-600/20 to-transparent blur-3xl" />
                      <div className="absolute -bottom-16 left-6 w-80 h-80 rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-indigo-700/15 to-transparent blur-3xl" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                    </>
                  ) : (
                    <>
                      {/* Fluid light ambient ribbons */}
                      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-br from-sky-400/40 via-blue-500/20 to-transparent blur-3xl" />
                      <div className="absolute top-1/4 -right-16 w-72 h-72 rounded-full bg-gradient-to-bl from-amber-300/35 via-rose-300/25 to-transparent blur-3xl" />
                      <div className="absolute -bottom-16 left-6 w-80 h-80 rounded-full bg-gradient-to-tr from-violet-400/30 via-indigo-300/20 to-transparent blur-3xl" />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/10" />
                    </>
                  )}
                </div>
              )}

              {/* iPhone Dynamic Island & Status Bar */}
              <div className="pt-2.5 px-6 flex items-center justify-between select-none z-30 relative">
                <div className={`text-xs font-semibold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  9:41
                </div>

                {/* Dynamic Island */}
                <div className="w-26 h-6.5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md border border-neutral-800/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-950/90 ring-1 ring-blue-900/50" />
                </div>

                {/* Status Bar Icons: 4-Bar Signal, Wi-Fi, Authentic Battery Pill */}
                <div className={`flex items-center gap-1.5 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  {/* 4-bar Signal Indicator */}
                  <div className="flex items-end gap-[1.5px] h-3">
                    <span className="w-[2.5px] h-1 bg-current rounded-2xs" />
                    <span className="w-[2.5px] h-1.5 bg-current rounded-2xs" />
                    <span className="w-[2.5px] h-2 bg-current rounded-2xs" />
                    <span className="w-[2.5px] h-2.5 bg-current rounded-2xs" />
                  </div>

                  <Wifi className={`w-3.5 h-3.5 ml-0.5 ${isDarkMode ? 'text-white' : 'text-slate-800'}`} />

                  {/* iOS Battery Pill */}
                  <div className="flex items-center ml-0.5">
                    <div className={`w-5 h-2.5 border rounded-[3px] p-[1px] flex items-center ${isDarkMode ? 'border-white/80' : 'border-slate-800'}`}>
                      <div className="w-[90%] h-full bg-emerald-500 rounded-2xs" />
                    </div>
                    <div className={`w-[1.5px] h-[3px] rounded-r-xs ${isDarkMode ? 'bg-white/80' : 'bg-slate-800'}`} />
                  </div>
                </div>
              </div>

              {/* =================================================================
                  VIEW A: IPHONE HOMESCREEN (FIRST VIEW WITH EXACT APP ICONS)
                  ================================================================= */}
              {!isChatAppOpen ? (
                <div className="flex-1 flex flex-col justify-between px-4 pt-2 pb-3 select-none z-20 relative">
                  
                  {/* Top iOS Widgets: Authentic Calendar & Weather (2x2 side-by-side, no badges) */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {/* Calendar Widget */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3.5 rounded-[22px] backdrop-blur-2xl flex flex-col justify-between h-[118px] cursor-pointer transition-colors ${
                        isDarkMode
                          ? 'bg-slate-900/65 border border-white/15 text-white shadow-[0_8px_25px_rgba(0,0,0,0.4)]'
                          : 'bg-white/75 border border-white/90 text-slate-900 shadow-[0_8px_25px_rgba(0,0,0,0.06)]'
                      }`}
                    >
                      <div>
                        <span className="text-[11px] font-bold text-rose-500 tracking-wider uppercase">
                          Tuesday
                        </span>
                      </div>
                      <div>
                        <div className={`text-3xl font-light tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          20
                        </div>
                        <div className={`text-[11px] font-medium mt-1 truncate ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                          Framer Live Showcase
                        </div>
                        <div className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                          9:41 AM • Ready
                        </div>
                      </div>
                    </motion.div>

                    {/* Weather Widget */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3.5 rounded-[22px] backdrop-blur-2xl flex flex-col justify-between h-[118px] cursor-pointer transition-colors ${
                        isDarkMode
                          ? 'bg-slate-900/65 border border-white/15 text-white shadow-[0_8px_25px_rgba(0,0,0,0.4)]'
                          : 'bg-white/75 border border-white/90 text-slate-900 shadow-[0_8px_25px_rgba(0,0,0,0.06)]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          Cupertino
                        </span>
                        <span className="text-amber-500 text-sm">☀️</span>
                      </div>
                      <div>
                        <div className={`text-3xl font-light tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          72°
                        </div>
                        <div className={`text-[11px] font-medium mt-1 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                          Mostly Sunny
                        </div>
                        <div className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                          H: 76° • L: 58°
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* =========================================================
                      AUTHENTIC 4-COLUMN EXACT IPHONE APP GRID
                      (CLICKING ANY APP ICON OPENS THE CHATBOT)
                      ========================================================= */}
                  <div className="my-auto py-2">
                    <div className="grid grid-cols-4 gap-y-5 gap-x-2 justify-items-center w-full">
                      {/* Row 1: The 4 Chatbot Apps */}
                      {themes.map((theme) => {
                        const isSelected = selectedThemeId === theme.id;

                        return (
                          <motion.button
                            key={theme.id}
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.88 }}
                            onClick={() => {
                              onSelectTheme(theme.id);
                              setIsChatAppOpen(true);
                            }}
                            className="flex flex-col items-center gap-1.5 group cursor-pointer relative"
                          >
                            <ThemeAppIcon
                              themeId={theme.id}
                              size={54}
                              isSelected={isSelected}
                            />

                            <span className={`text-[11px] font-medium tracking-tight leading-tight max-w-[68px] text-center truncate ${
                              isDarkMode
                                ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                                : 'text-slate-800'
                            }`}>
                              {theme.name}
                            </span>
                          </motion.button>
                        );
                      })}

                      {/* Row 2: Framer Code App */}
                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.88 }}
                        onClick={onOpenEmbedModal}
                        title="Framer Code Component"
                        className="flex flex-col items-center gap-1.5 group cursor-pointer relative"
                      >
                        <ThemeAppIcon themeId="framer-code" size={54} />
                        <span className={`text-[11px] font-medium tracking-tight leading-tight max-w-[68px] text-center truncate ${
                          isDarkMode
                            ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                            : 'text-slate-800'
                        }`}>
                          Framer
                        </span>
                      </motion.button>

                      {/* Native iOS Settings App */}
                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.88 }}
                        onClick={() => {
                          setIsChatAppOpen(true);
                        }}
                        title="Settings"
                        className="flex flex-col items-center gap-1.5 group cursor-pointer relative"
                      >
                        <ThemeAppIcon themeId="settings" size={54} />
                        <span className={`text-[11px] font-medium tracking-tight leading-tight max-w-[68px] text-center truncate ${
                          isDarkMode
                            ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                            : 'text-slate-800'
                        }`}>
                          Settings
                        </span>
                      </motion.button>
                    </div>
                  </div>

                  {/* iOS Search / Page Dots Pill */}
                  <div className="w-full flex justify-center py-1">
                    <div className={`px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-2xs cursor-pointer transition-colors ${
                      isDarkMode
                        ? 'bg-slate-900/60 border border-white/15 text-white/90 hover:bg-slate-900/80'
                        : 'bg-white/70 border border-white/85 text-slate-700 hover:bg-white/90'
                    }`}>
                      <Search className={`w-3 h-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`} />
                      <span className="font-medium text-[11px] tracking-tight">Search</span>
                      <span className={`text-[9px] ml-1 tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>• • •</span>
                    </div>
                  </div>

                  {/* iOS Native Bottom Frosted Dock */}
                  <div className="w-full">
                    <div className={`w-full px-4 py-2.5 rounded-[30px] backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.2)] flex items-center justify-between transition-colors ${
                      isDarkMode
                        ? 'bg-slate-900/65 border border-white/15'
                        : 'bg-white/70 border border-white/85'
                    }`}>
                      {/* Phone App */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        title="Phone"
                      >
                        <ThemeAppIcon themeId="phone" size={50} />
                      </motion.div>

                      {/* Safari App */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        title="Safari"
                      >
                        <ThemeAppIcon themeId="safari" size={50} />
                      </motion.div>

                      {/* Messages App */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        title="Messages"
                      >
                        <ThemeAppIcon themeId="messages" size={50} />
                      </motion.div>

                      {/* Chatbot App Launcher in Dock */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsChatAppOpen(true)}
                        title={`Launch ${currentTheme.name}`}
                        className="cursor-pointer relative"
                      >
                        <ThemeAppIcon themeId={selectedThemeId} size={50} />
                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full shadow-sm ${
                          isDarkMode ? 'bg-white' : 'bg-slate-800'
                        }`} />
                      </motion.div>
                    </div>

                    {/* iOS Home Indicator */}
                    <div className={`w-32 h-1 rounded-full mx-auto mt-2 ${
                      isDarkMode ? 'bg-white/40' : 'bg-slate-800/40'
                    }`} />
                  </div>
                </div>
              ) : (
                /* =================================================================
                    VIEW B: ACTIVE CHATBOT VIEW (LAUNCHED UPON CLICKING APP ICON)
                    ================================================================= */
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                  className="flex-1 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top iOS App Navigation Bar (< Home + Actions) */}
                  <div className={`px-3 pt-1.5 pb-1 flex items-center justify-between select-none z-20 border-b backdrop-blur-md transition-colors ${
                    isDarkMode
                      ? 'border-slate-800 bg-[#0c1018]/90 text-white'
                      : 'border-slate-200/60 bg-white/80 text-slate-900'
                  }`}>
                    <button
                      onClick={() => setIsChatAppOpen(false)}
                      className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                        isDarkMode
                          ? 'text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700'
                          : 'text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4 text-indigo-400 -ml-1" />
                      <span>Home</span>
                    </button>

                    <button
                      onClick={handleCopySnippet}
                      title="Copy Snippet"
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                        isDarkMode
                          ? 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-700 text-slate-200'
                          : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      {copiedSnippet ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Embed Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* The Chatbot Widget */}
                  <div className="flex-1 p-2 sm:p-2.5 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full max-h-[510px]">
                      <ChatWidget
                        theme={currentTheme}
                        isOpen={true}
                        onToggle={() => setIsChatAppOpen(false)}
                        isMobilePreview={true}
                        embedded={true}
                        simulationTrigger={simulationTrigger}
                        simulationCount={simulationCount}
                      />
                    </div>
                  </div>

                  {/* Bottom iOS Dock (allows switching between chatbots inside chat mode) */}
                  <div className={`w-full px-3 pb-2 pt-1 flex flex-col items-center justify-center select-none z-20 border-t transition-colors ${
                    isDarkMode
                      ? 'bg-[#0c1018]/90 border-slate-800/80'
                      : 'bg-slate-50/90 border-slate-200/50'
                  }`}>
                    <div className={`w-full px-2 py-1.5 rounded-[22px] backdrop-blur-xl border shadow-sm flex items-center justify-between gap-1 overflow-x-auto scrollbar-none ${
                      isDarkMode
                        ? 'bg-slate-900/80 border-slate-800'
                        : 'bg-white/80 border-white/90'
                    }`}>
                      {themes.map((theme) => {
                        const isSelected = selectedThemeId === theme.id;

                        return (
                          <button
                            key={theme.id}
                            onClick={() => onSelectTheme(theme.id)}
                            title={`${theme.name} (${theme.category})`}
                            className="relative flex flex-col items-center flex-shrink-0 cursor-pointer transition-transform duration-200 hover:-translate-y-1 active:scale-90"
                          >
                            <ThemeAppIcon
                              themeId={theme.id}
                              size={38}
                              isSelected={isSelected}
                            />

                            <span
                              className={`w-1 h-1 rounded-full mt-1 transition-all ${
                                isSelected
                                  ? isDarkMode ? 'bg-white scale-125' : 'bg-slate-900 scale-125'
                                  : 'bg-transparent'
                              }`}
                            />
                          </button>
                        );
                      })}

                      <div className={`w-px h-6 mx-0.5 flex-shrink-0 ${
                        isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
                      }`} />

                      <button
                        onClick={onOpenEmbedModal}
                        title="View Framer Code Component"
                        className="flex-shrink-0 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                      >
                        <ThemeAppIcon themeId="framer-code" size={38} />
                        <span className="w-1 h-1 rounded-full mt-1 bg-transparent block" />
                      </button>
                    </div>

                    {/* Tap home bar to return to Homescreen */}
                    <button
                      onClick={() => setIsChatAppOpen(false)}
                      title="Tap home bar to go Home"
                      className={`w-28 h-1 rounded-full mx-auto mt-2 cursor-pointer transition-colors ${
                        isDarkMode
                          ? 'bg-slate-600 hover:bg-slate-400'
                          : 'bg-slate-400/80 hover:bg-slate-600'
                      }`}
                    />
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
