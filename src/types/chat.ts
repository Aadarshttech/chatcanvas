export type ThemeId =
  | 'intercom'    // 1. Normal professional
  | 'velvet'      // 2. Chocolate
  | 'aura'        // 3. Hisabify
  | 'pastel';     // 4. Strawberry

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  iconName: string;
  category: 'Modern SaaS' | 'Minimalist' | 'Luxury' | 'Glassmorphic' | 'Friendly' | 'Enterprise';
  primaryColor: string;
  primaryLight: string;
  accentColor: string;
  textColor: string;
  bgColor: string;
  cardBg: string;
  botBubbleBg: string;
  botBubbleText: string;
  userBubbleBg: string;
  userBubbleText: string;
  borderColor: string;
  launcherShape: 'circle' | 'pill' | 'rounded-square';
  launcherText?: string;
  fontFamily: string;
  borderRadius: string;
  shadow: string;
  glassmorphism: boolean;
  avatarUrl: string;
  botName: string;
  botRole: string;
  proactiveMessage: string;
  // Dark mode & surface tokens
  isDark?: boolean;
  headerBg?: string;
  headerText?: string;
  headerBorder?: string;
  tabBg?: string;
  tabActiveColor?: string;
  tabInactiveColor?: string;
  pillBg?: string;
  pillText?: string;
  pillBorder?: string;
  inputBg?: string;
  inputBorder?: string;
  sendBtnBg?: string;
  sendBtnText?: string;
}

export type MessageSender = 'user' | 'bot' | 'system' | 'agent';

export interface QuickReplyOption {
  id: string;
  label: string;
  response: string;
  action?: 'handoff' | 'pricing' | 'demo' | 'error';
}

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  text: string;
  timestamp: string;
  isStreaming?: boolean;
  quickReplies?: QuickReplyOption[];
  status?: 'sent' | 'delivered' | 'read' | 'error';
  agentInfo?: {
    name: string;
    avatar: string;
    role: string;
  };
}
