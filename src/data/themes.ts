import { ThemeConfig } from '../types/chat';

export const CHATBOT_THEMES: ThemeConfig[] = [
  // 1. Professional (Executive Slate & Tech Architecture)
  {
    id: 'intercom',
    name: 'Professional',
    tagline: 'Executive Slate & Obsidian Minimal • Geometric architecture sans',
    iconName: 'Briefcase',
    category: 'Enterprise',
    primaryColor: '#0f172a', // Refined Executive Slate 900
    primaryLight: '#f8fafc',
    accentColor: '#334155', // Slate 700
    textColor: '#0f172a',
    bgColor: '#ffffff',
    cardBg: '#f8fafc',
    botBubbleBg: '#f1f5f9',
    botBubbleText: '#0f172a',
    userBubbleBg: '#0f172a',
    userBubbleText: '#ffffff',
    borderColor: '#e2e8f0',
    launcherShape: 'pill',
    launcherText: 'Support',
    fontFamily: 'var(--font-jakarta), system-ui, -apple-system, sans-serif',
    borderRadius: '1rem',
    shadow: '0 14px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
    glassmorphism: false,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face',
    botName: 'Professional',
    botRole: 'Support Specialist',
    proactiveMessage: 'Welcome. How can I assist you today?',
    isDark: false,
    headerBg: '#0f172a', // Solid Executive Slate 900 (no gradient fade)
    headerText: '#f8fafc',
    headerBorder: '#1e293b',
    tabBg: '#ffffff',
    tabActiveColor: '#0f172a',
    tabInactiveColor: '#64748b',
    pillBg: 'rgba(15, 23, 42, 0.06)',
    pillText: '#334155',
    pillBorder: 'rgba(15, 23, 42, 0.12)',
    inputBg: '#ffffff',
    inputBorder: '#e2e8f0',
    sendBtnBg: '#0f172a',
    sendBtnText: '#ffffff',
  },

  // 2. Chocolate
  {
    id: 'velvet',
    name: 'Chocolate',
    tagline: 'Artisan Cocoa & Warm Truffle • Rich velvet luxury serif typography',
    iconName: 'Cookie',
    category: 'Luxury',
    primaryColor: '#6d4327', // Rich Roasted Cocoa
    primaryLight: '#fbf7f2',
    accentColor: '#b47b48', // Warm caramel
    textColor: '#361d10',
    bgColor: '#ffffff',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    botBubbleBg: 'rgba(245, 235, 224, 0.88)',
    botBubbleText: '#361d10',
    userBubbleBg: '#542f1a',
    userBubbleText: '#fff8f2',
    borderColor: '#e8d8c8',
    launcherShape: 'pill',
    launcherText: 'Concierge',
    fontFamily: 'var(--font-fraunces), Georgia, Cambria, serif',
    borderRadius: '1.75rem',
    shadow: '0 20px 45px -8px rgba(84, 47, 26, 0.22), 0 6px 16px -2px rgba(0, 0, 0, 0.05)',
    glassmorphism: false,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
    botName: 'Chocolatier',
    botRole: 'Luxury Concierge',
    proactiveMessage: 'Welcome to our salon. May I curate a bespoke recommendation for you?',
    isDark: false,
    headerBg: 'transparent',
    headerText: '#ffffff',
    headerBorder: 'transparent',
    tabBg: 'transparent',
    tabActiveColor: '#542f1a',
    tabInactiveColor: '#8a6550',
    pillBg: 'rgba(255, 255, 255, 0.65)',
    pillText: '#542f1a',
    pillBorder: 'rgba(255, 255, 255, 0.8)',
    inputBg: 'rgba(255, 255, 255, 0.95)',
    inputBorder: '#e8d8c8',
    sendBtnBg: '#542f1a',
    sendBtnText: '#ffffff',
  },

  // 3. Hisabify
  {
    id: 'aura',
    name: 'Hisabify',
    tagline: 'Cozy Botanical Expense Assistant • Friendly FinTech split calculator',
    iconName: 'Receipt',
    category: 'Friendly',
    primaryColor: '#2D6A4F', // Forest green
    primaryLight: '#E8F5EE',
    accentColor: '#F59E0B', // Sunny Amber
    textColor: '#1A3D34', // Deep botanical forest slate
    bgColor: '#FAF9F4', // Soft warm parchment
    cardBg: '#FFFFFF',
    botBubbleBg: '#EBF6F0', // Soft pastel mint
    botBubbleText: '#1B4332',
    userBubbleBg: '#2D6A4F',
    userBubbleText: '#FFFFFF',
    borderColor: '#E2EBE4',
    launcherShape: 'circle',
    launcherText: 'Hisabify',
    fontFamily: 'var(--font-outfit), system-ui, -apple-system, sans-serif',
    borderRadius: '1.75rem',
    shadow: '0 16px 36px -4px rgba(45, 106, 79, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
    glassmorphism: false,
    avatarUrl: '/hisabify-avatar-smooth.png',
    botName: 'Hisabify',
    botRole: 'Expense Assistant',
    proactiveMessage: 'Hey there! Need help splitting a bill or tracking shared expenses?',
    isDark: false,
    headerBg: 'transparent',
    headerText: '#ffffff',
    headerBorder: 'transparent',
    tabBg: 'transparent',
    tabActiveColor: '#F59E0B',
    tabInactiveColor: '#E8F5EE',
    pillBg: 'rgba(255, 255, 255, 0.7)',
    pillText: '#1F513F',
    pillBorder: 'rgba(255, 255, 255, 0.85)',
    inputBg: 'rgba(255, 255, 255, 0.95)',
    inputBorder: '#C8E8D7',
    sendBtnBg: '#FBBF24',
    sendBtnText: '#1A3D34',
  },

  // 4. Strawberry
  {
    id: 'pastel',
    name: 'Strawberry',
    tagline: 'Sweet Berry Milkshake & Fresh Red • Playful rounded humanist curves',
    iconName: 'Sparkles',
    category: 'Friendly',
    primaryColor: '#e11d48', // Ripe Sweet Strawberry Red
    primaryLight: '#fff1f2',
    accentColor: '#e11d48', // Deep Berry
    textColor: '#3b0718',
    bgColor: '#ffffff',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    botBubbleBg: 'rgba(255, 235, 239, 0.88)',
    botBubbleText: '#3b0718',
    userBubbleBg: '#e11d48',
    userBubbleText: '#ffffff',
    borderColor: '#fce7f3',
    launcherShape: 'pill',
    launcherText: 'Say Hello! 🍓',
    fontFamily: 'var(--font-friendly), -apple-system, sans-serif',
    borderRadius: '1.75rem',
    shadow: '0 20px 45px -8px rgba(225, 29, 72, 0.22), 0 6px 16px -2px rgba(0, 0, 0, 0.05)',
    glassmorphism: false,
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face',
    botName: 'Strawberry Milo',
    botRole: 'Friendly Berry Specialist',
    proactiveMessage: 'Hi friend! How can I brighten up your day today?',
    isDark: false,
    headerBg: 'transparent',
    headerText: '#ffffff',
    headerBorder: 'transparent',
    tabBg: 'transparent',
    tabActiveColor: '#e11d48',
    tabInactiveColor: '#9f1239',
    pillBg: 'rgba(255, 255, 255, 0.65)',
    pillText: '#9f1239',
    pillBorder: 'rgba(255, 255, 255, 0.8)',
    inputBg: 'rgba(255, 255, 255, 0.95)',
    inputBorder: '#fce7f3',
    sendBtnBg: '#e11d48',
    sendBtnText: '#ffffff',
  },
];

export function getEffectiveTheme(theme: ThemeConfig, isDarkMode: boolean): ThemeConfig {
  if (!isDarkMode) {
    return {
      ...theme,
      isDark: false,
    };
  }

  switch (theme.id) {
    case 'intercom':
      return {
        ...theme,
        isDark: true,
        bgColor: '#090d16', // Obsidian Deep Night
        cardBg: '#0f172a', // Rich Slate 900
        textColor: '#f8fafc',
        botBubbleBg: '#1e293b', // Sleek slate 800 bubble
        botBubbleText: '#f8fafc',
        userBubbleBg: '#ffffff', // Crisp high-contrast executive white bubble
        userBubbleText: '#0f172a',
        borderColor: '#1e293b',
        primaryColor: '#38bdf8', // Cyber sky accent
        primaryLight: '#0f172a',
        accentColor: '#94a3b8',
        headerBg: theme.headerBg, // Preserve exact light mode navbar settings
        headerText: theme.headerText,
        headerBorder: theme.headerBorder,
        tabBg: theme.tabBg,
        tabActiveColor: theme.tabActiveColor,
        tabInactiveColor: theme.tabInactiveColor,
        pillBg: 'rgba(255, 255, 255, 0.06)',
        pillText: '#94a3b8',
        pillBorder: 'rgba(255, 255, 255, 0.1)',
        inputBg: '#090d16',
        inputBorder: '#1e293b',
        sendBtnBg: '#ffffff',
        sendBtnText: '#090d16',
        shadow: '0 18px 40px -4px rgba(0, 0, 0, 0.7), 0 4px 14px -2px rgba(0, 0, 0, 0.45)',
      };

    case 'velvet':
      return {
        ...theme,
        isDark: true,
        bgColor: '#150E0A', // Dark espresso night
        cardBg: '#1E140E', // Dark cocoa truffle
        textColor: '#FBF5F0',
        botBubbleBg: '#2A1C14', // Velvety dark chocolate bubble
        botBubbleText: '#FBF5F0',
        userBubbleBg: '#7A4826', // Warm caramel mocha
        userBubbleText: '#FFF7ED',
        borderColor: '#3D281C',
        primaryColor: '#D97706',
        primaryLight: '#3D2010',
        accentColor: '#F59E0B',
        headerBg: theme.headerBg, // Keep exact same navbar setting as light mode (transparent)
        headerText: theme.headerText,
        headerBorder: theme.headerBorder,
        tabBg: theme.tabBg,
        tabActiveColor: theme.tabActiveColor,
        tabInactiveColor: theme.tabInactiveColor,
        pillBg: 'rgba(217, 119, 6, 0.15)',
        pillText: '#FCD34D',
        pillBorder: 'rgba(217, 119, 6, 0.25)',
        inputBg: '#150E0A',
        inputBorder: '#3D281C',
        sendBtnBg: '#D97706',
        sendBtnText: '#150E0A',
        shadow: '0 18px 40px -4px rgba(0, 0, 0, 0.65), 0 4px 14px -2px rgba(0, 0, 0, 0.45)',
      };

    case 'aura':
      return {
        ...theme,
        isDark: true,
        bgColor: '#FAF9F4', // Keep the warm cream canvas of the illustration
        cardBg: 'rgba(255, 255, 255, 0.95)',
        textColor: '#1A3D34', // Deep botanical forest slate
        botBubbleBg: '#183C2F', // Rich emerald container
        botBubbleText: '#FFFFFF', // High contrast crisp white
        userBubbleBg: '#2D6A4F',
        userBubbleText: '#FFFFFF',
        borderColor: '#E2EBE4',
        primaryColor: '#2D6A4F',
        primaryLight: '#E8F5EE',
        accentColor: '#F59E0B',
        headerBg: theme.headerBg, // Keep exact same navbar setting as light mode (transparent)
        headerText: theme.headerText,
        headerBorder: theme.headerBorder,
        tabBg: theme.tabBg,
        tabActiveColor: theme.tabActiveColor,
        tabInactiveColor: theme.tabInactiveColor,
        pillBg: 'rgba(255, 255, 255, 0.7)',
        pillText: '#1F513F',
        pillBorder: 'rgba(255, 255, 255, 0.85)',
        inputBg: 'rgba(255, 255, 255, 0.95)',
        inputBorder: '#C8E8D7',
        sendBtnBg: '#FBBF24',
        sendBtnText: '#1A3D34',
        shadow: '0 20px 40px -4px rgba(0, 0, 0, 0.4), 0 6px 16px -2px rgba(0, 0, 0, 0.2)',
      };

    case 'pastel':
      return {
        ...theme,
        isDark: true,
        bgColor: '#17090F', // Midnight ripe strawberry
        cardBg: '#230E17', // Rich berry card
        textColor: '#FFE4E8',
        botBubbleBg: '#301320', // Velvety strawberry pulp bubble
        botBubbleText: '#FFE4E8',
        userBubbleBg: '#E11D48', // Ripe strawberry glaze
        userBubbleText: '#FFFFFF',
        borderColor: '#43192B',
        primaryColor: '#FB7185',
        primaryLight: '#4C0519',
        accentColor: '#F43F5E',
        headerBg: theme.headerBg, // Keep exact same navbar setting as light mode (transparent)
        headerText: theme.headerText,
        headerBorder: theme.headerBorder,
        tabBg: theme.tabBg,
        tabActiveColor: theme.tabActiveColor,
        tabInactiveColor: theme.tabInactiveColor,
        pillBg: 'rgba(251, 113, 133, 0.15)',
        pillText: '#FECDD3',
        pillBorder: 'rgba(251, 113, 133, 0.25)',
        inputBg: '#17090F',
        inputBorder: '#43192B',
        sendBtnBg: '#FB7185',
        sendBtnText: '#FFFFFF',
        shadow: '0 18px 40px -4px rgba(0, 0, 0, 0.65), 0 4px 14px -2px rgba(0, 0, 0, 0.4)',
      };

    default:
      return {
        ...theme,
        isDark: true,
        bgColor: '#0F172A',
        cardBg: '#1E293B',
        textColor: '#F8FAFC',
        botBubbleBg: '#1E293B',
        botBubbleText: '#F1F5F9',
        borderColor: '#334155',
        tabBg: '#1E293B',
        tabActiveColor: theme.primaryColor,
        tabInactiveColor: '#64748B',
        shadow: '0 16px 36px -4px rgba(0, 0, 0, 0.6)',
      };
  }
}
