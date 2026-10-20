import { ChatMessage, QuickReplyOption } from '../types/chat';

export const INITIAL_QUICK_REPLIES: QuickReplyOption[] = [
  {
    id: 'framer-compat',
    label: 'How does Framer embed work?',
    response: 'Can you show me how this embeds into Framer without CSS conflicts?',
  },
  {
    id: 'handoff',
    label: '👤 Talk to a Human Specialist',
    response: 'I would like to speak with a human support agent.',
    action: 'handoff',
  },
  {
    id: 'pricing',
    label: '💳 Plans & Pricing',
    response: 'What are your enterprise and startup pricing tiers?',
    action: 'pricing',
  },
  {
    id: 'test-error',
    label: '⚠️ Test Error / Retry State',
    response: 'Simulate network interruption and retry state.',
    action: 'error',
  },
];

export const HISABIFY_QUICK_REPLIES: QuickReplyOption[] = [
  {
    id: 'how-it-works',
    label: 'How does Hisabify work?',
    response: 'How does Hisabify work?',
    action: 'demo',
  },
];

export const GET_INITIAL_MESSAGES = (botName: string): ChatMessage[] => {
  if (botName === 'Hisabify') {
    return [
      {
        id: 'msg-welcome-hisabify',
        sender: 'bot',
        text: `Hey there!\nI’m Hisabify, your personal expense assistant. I can help you track shared expenses, split bills, and keep your group finances in check.`,
        timestamp: 'Just now',
        quickReplies: HISABIFY_QUICK_REPLIES,
        status: 'delivered',
      },
    ];
  }

  if (botName === 'Professional') {
    return [
      {
        id: 'msg-welcome-pro',
        sender: 'bot',
        text: `Welcome to our advisory desk. I am your automated executive specialist, prepared to assist with your technical inquiries, service documentation, and direct escalation to our senior team.`,
        timestamp: 'Just now',
        // No quick reply suggestions for Professional as requested
        quickReplies: undefined,
        status: 'delivered',
      },
    ];
  }

  if (botName === 'Chocolatier') {
    return [
      {
        id: 'msg-welcome-choco',
        sender: 'bot',
        text: `Welcome to our salon. May I curate a bespoke recommendation or assist with your artisan collection today?`,
        timestamp: 'Just now',
        status: 'delivered',
      },
    ];
  }

  if (botName.includes('Strawberry')) {
    return [
      {
        id: 'msg-welcome-strawberry',
        sender: 'bot',
        text: `Hi there friend! Welcome to Strawberry Studio. How can I brighten up your day today?`,
        timestamp: 'Just now',
        status: 'delivered',
      },
    ];
  }

  return [
    {
      id: 'msg-welcome-default',
      sender: 'bot',
      text: `Hello! I'm ${botName}. How can I assist you today?`,
      timestamp: 'Just now',
      status: 'delivered',
    },
  ];
};

export const RESPONSE_LIBRARY: Record<string, { text: string; nextReplies?: QuickReplyOption[]; action?: string }> = {
  'how-it-works': {
    text: `Hisabify makes tracking shared expenses effortless:\n\n1. **Smart Bill Splitting**: Add friends or trip members to split expenses equally or by custom amounts.\n2. **Instant Receipt Scanning**: Snap a photo of any receipt to automatically parse costs.\n3. **Real-time Balances**: Instantly see who owes whom with simplified settlement calculations.\n4. **Private & Secure**: All records are end-to-end encrypted and sync seamlessly across your devices.`,
    nextReplies: undefined,
  },
};
