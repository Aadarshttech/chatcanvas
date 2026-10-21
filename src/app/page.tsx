'use client';

import React, { useState } from 'react';
import { CHATBOT_THEMES, getEffectiveTheme } from '../data/themes';
import { ThemeId } from '../types/chat';
import { ShowroomNavbar, DeviceMode } from '../components/showroom/ShowroomNavbar';
import { StudioCanvas } from '../components/showroom/StudioCanvas';
import { FramerEmbedModal } from '../components/showroom/FramerEmbedModal';

export default function ShowroomPage() {
  const [selectedThemeId, setSelectedThemeId] = useState<ThemeId>('intercom');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const baseTheme =
    CHATBOT_THEMES.find((t) => t.id === selectedThemeId) || CHATBOT_THEMES[0];

  const currentTheme = getEffectiveTheme(baseTheme, isDarkMode);

  return (
    <main
      className={`min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#07090e] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* Studio Top Navigation Bar with Device Modes & Dark Mode Switch */}
      <ShowroomNavbar
        currentTheme={currentTheme}
        deviceMode={deviceMode}
        onDeviceModeChange={setDeviceMode}
        onOpenEmbedModal={() => setIsEmbedModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />

      {/* Centerpiece: Hardware Showcase Canvas with Strict Dark/Light Adaptation */}
      <StudioCanvas
        currentTheme={currentTheme}
        themes={CHATBOT_THEMES}
        selectedThemeId={selectedThemeId}
        onSelectTheme={setSelectedThemeId}
        deviceMode={deviceMode}
        onOpenEmbedModal={() => setIsEmbedModalOpen(true)}
        isDarkMode={isDarkMode}
      />

      {/* Framer Code Component Export Modal */}
      <FramerEmbedModal
        isOpen={isEmbedModalOpen}
        onClose={() => setIsEmbedModalOpen(false)}
        currentTheme={currentTheme}
        isDarkMode={isDarkMode}
      />
    </main>
  );
}
