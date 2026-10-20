'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeConfig } from '../../types/chat';
import {
  Search,
  X,
  ChevronDown,
  BookOpen,
  Code2,
  CreditCard,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  FileQuestion,
  Clock,
} from 'lucide-react';

interface ArticleItem {
  id: string;
  category: 'All' | 'General' | 'Integration' | 'Plans' | 'Security';
  title: string;
  summary: string;
  content: string[];
  readTime: string;
  icon: React.ElementType;
}

const KNOWLEDGE_ARTICLES: ArticleItem[] = [
  {
    id: 'framer-embed',
    category: 'Integration',
    title: 'How do I embed the widget on our website?',
    summary: 'Simple one-click embed via React component or standalone HTML script tag.',
    content: [
      'Copy your unique embed snippet from the studio export modal.',
      'Paste the code into your Framer custom code block or your website root layout.',
      'All styling is scoped locally to avoid interfering with existing page styles.',
      'Theme changes and colors sync seamlessly without redeploying code.',
    ],
    readTime: '1 min',
    icon: Code2,
  },
  {
    id: 'custom-backend',
    category: 'Integration',
    title: 'Can we connect our custom backend or API?',
    summary: 'Connect any SSE stream, WebSocket, or REST endpoint with streaming typewriter support.',
    content: [
      'Point the widget endpoint prop to your streaming Server-Sent Events (SSE) route.',
      'Supports OpenAI, Anthropic, LangChain, or internal custom LLM microservices.',
      'Built-in reconnect logic and timeout fallbacks ensure zero lost customer messages.',
    ],
    readTime: '2 min',
    icon: Sparkles,
  },
  {
    id: 'human-handoff',
    category: 'General',
    title: 'How does live human handoff work?',
    summary: 'Automatically route complex conversations to your team members in real-time.',
    content: [
      'Trigger handoff via quick reply options or automated sentiment detection.',
      'Displays verified agent photo, name, and response time badge.',
      'Preserves full conversation history so agents have immediate context.',
    ],
    readTime: '2 min',
    icon: MessageSquare,
  },
  {
    id: 'customization',
    category: 'General',
    title: 'Can we customize colors, avatar, and position?',
    summary: 'Tailor every visual detail from fonts and border radius to launcher behavior.',
    content: [
      'Full control over primary, accent, bubble, and background color tokens.',
      'Choose between floating circle launchers, pill badges, or inline page embeds.',
      'Select custom Google fonts matching your brand design system.',
    ],
    readTime: '1 min',
    icon: BookOpen,
  },
  {
    id: 'plans-billing',
    category: 'Plans',
    title: 'What plans and message limits are available?',
    summary: 'Flexible pricing designed for startups to scaling teams with unlimited seats.',
    content: [
      'Growth plan: up to 5,000 monthly conversations with standard team handoff.',
      'Enterprise plan: unlimited conversations, custom SLA, and priority support.',
      'No per-seat charges—collaborate across your entire support organization.',
    ],
    readTime: '2 min',
    icon: CreditCard,
  },
  {
    id: 'security-privacy',
    category: 'Security',
    title: 'How is customer chat data secured?',
    summary: 'Enterprise-grade encryption, privacy controls, and compliance certifications.',
    content: [
      'TLS 1.3 encryption in-flight and AES-256 encryption at rest.',
      'Full GDPR compliance with automatic data anonymization and export tools.',
      'Zero training on your proprietary customer data or sensitive conversations.',
    ],
    readTime: '2 min',
    icon: ShieldCheck,
  },
];

const CATEGORIES = ['All', 'General', 'Integration', 'Plans', 'Security'] as const;

interface HelpCenterViewProps {
  theme: ThemeConfig;
  onSelectQuestion: (question: string) => void;
  onStartChat: () => void;
}

export const HelpCenterView: React.FC<HelpCenterViewProps> = ({
  theme,
  onSelectQuestion,
  onStartChat,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Detect whether the active theme palette is light or dark (strict theme-driven, avoiding OS dark mode bleed)
  const isThemeDark = useMemo(() => {
    if (theme.isDark !== undefined) return theme.isDark;
    const text = theme.textColor.toLowerCase().trim();
    return text.startsWith('#f') || text.startsWith('#e') || text.includes('255, 255, 255');
  }, [theme.isDark, theme.textColor]);

  const filteredArticles = useMemo(() => {
    return KNOWLEDGE_ARTICLES.filter((article) => {
      const matchesCategory =
        activeCategory === 'All' || article.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.content.some((c) => c.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div
      className="flex-1 flex flex-col min-h-0 overflow-hidden text-left"
      style={{
        fontFamily: theme.fontFamily,
        backgroundColor: theme.bgColor,
      }}
    >
      {/* Search & Filter Header (Strict Theme Color Awareness) */}
      <div
        className="p-3.5 pb-2.5 border-b transition-colors"
        style={{
          borderColor: theme.borderColor,
          backgroundColor: theme.cardBg,
        }}
      >
        {/* Search Bar Container */}
        <div
          className="relative flex items-center rounded-xl border transition-all"
          style={{
            backgroundColor: isThemeDark ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
            borderColor: theme.borderColor,
          }}
        >
          <Search
            className="w-3.5 h-3.5 absolute left-3 opacity-45 pointer-events-none"
            style={{ color: theme.textColor }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles or answers..."
            className="w-full pl-9 pr-8 py-2 text-xs bg-transparent outline-none transition-colors"
            style={{
              color: theme.textColor,
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 p-1 rounded-full opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              style={{ color: theme.textColor }}
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Categories Tab Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-0.5 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all flex-shrink-0 cursor-pointer ${
                  isSelected ? 'font-semibold shadow-2xs' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: isSelected
                    ? theme.primaryColor
                    : isThemeDark
                    ? 'rgba(255, 255, 255, 0.06)'
                    : '#f1f5f9',
                  color: isSelected ? '#ffffff' : theme.textColor,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles List */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5 custom-scrollbar">
        {filteredArticles.length === 0 ? (
          <div className="py-10 text-center flex flex-col items-center justify-center">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center mb-2.5 opacity-60"
              style={{
                backgroundColor: isThemeDark ? 'rgba(255, 255, 255, 0.07)' : '#f1f5f9',
                color: theme.textColor,
              }}
            >
              <FileQuestion className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold" style={{ color: theme.textColor }}>
              No articles match your search
            </p>
            <p className="text-[11px] opacity-60 mt-0.5 max-w-[220px]" style={{ color: theme.textColor }}>
              Try another keyword or reach out directly to our team.
            </p>
            <button
              onClick={onStartChat}
              className="mt-3 text-xs font-medium px-3.5 py-1.5 rounded-lg text-white shadow-xs cursor-pointer inline-flex items-center gap-1.5 hover:opacity-95 transition-opacity"
              style={{ backgroundColor: theme.primaryColor }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Start a Conversation
            </button>
          </div>
        ) : (
          filteredArticles.map((article) => {
            const isExpanded = expandedId === article.id;
            const Icon = article.icon;

            return (
              <div
                key={article.id}
                className="rounded-xl border transition-all duration-200 overflow-hidden"
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: isExpanded ? theme.primaryColor : theme.borderColor,
                  boxShadow: isExpanded ? '0 4px 14px -2px rgba(0, 0, 0, 0.05)' : 'none',
                }}
              >
                {/* Article Card Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : article.id)}
                  className="w-full p-3 flex items-start gap-2.5 text-left cursor-pointer transition-colors"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                    style={{
                      backgroundColor: isExpanded
                        ? theme.primaryColor + '18'
                        : isThemeDark
                        ? 'rgba(255, 255, 255, 0.06)'
                        : '#f1f5f9',
                      color: isExpanded ? theme.primaryColor : theme.textColor,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className="text-xs font-semibold leading-snug tracking-tight"
                        style={{ color: theme.textColor }}
                      >
                        {article.title}
                      </h4>
                      <ChevronDown
                        className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 opacity-90' : 'opacity-40'
                        }`}
                        style={{ color: theme.textColor }}
                      />
                    </div>
                    {!isExpanded && (
                      <p
                        className="text-[11px] opacity-65 mt-0.5 line-clamp-1 leading-normal"
                        style={{ color: theme.textColor }}
                      >
                        {article.summary}
                      </p>
                    )}
                  </div>
                </button>

                {/* Expanded Article Details (Redesigned Step-by-Step Flow, No Awkward Bullets/Lines) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="border-t overflow-hidden"
                      style={{ borderColor: theme.borderColor }}
                    >
                      <div className="p-3.5 pt-3 space-y-3" style={{ color: theme.textColor }}>
                        {/* Summary Banner */}
                        <div
                          className="p-2.5 rounded-lg text-xs leading-relaxed font-medium border"
                          style={{
                            backgroundColor: isThemeDark
                              ? 'rgba(255, 255, 255, 0.04)'
                              : '#ffffff',
                            borderColor: theme.borderColor,
                            color: theme.textColor,
                          }}
                        >
                          {article.summary}
                        </div>

                        {/* Stepped Sequence Cards (Replaced raw bullets & vertical border with clean cards) */}
                        <div className="space-y-1.5">
                          {article.content.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 p-2 rounded-lg border transition-all"
                              style={{
                                backgroundColor: isThemeDark
                                  ? 'rgba(255, 255, 255, 0.02)'
                                  : '#ffffff',
                                borderColor: theme.borderColor,
                              }}
                            >
                              <div
                                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-bold"
                                style={{
                                  backgroundColor: theme.primaryColor + '18',
                                  color: theme.primaryColor,
                                }}
                              >
                                {idx + 1}
                              </div>
                              <span className="text-[11px] leading-relaxed flex-1 opacity-85">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Footer Meta & Action */}
                        <div
                          className="pt-2.5 flex items-center justify-between gap-2 border-t mt-1"
                          style={{ borderColor: theme.borderColor }}
                        >
                          <span className="text-[10px] opacity-60 flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3 opacity-70" />
                            {article.readTime} read • {article.category}
                          </span>
                          <button
                            onClick={() => onSelectQuestion(article.title)}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all cursor-pointer hover:opacity-90"
                            style={{
                              backgroundColor: theme.primaryColor + '15',
                              color: theme.primaryColor,
                            }}
                          >
                            Ask in chat
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}

        {/* Bottom Support Callout */}
        <div
          className="p-3.5 rounded-xl border mt-3 transition-colors flex items-center justify-between gap-3"
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.borderColor,
          }}
        >
          <div className="min-w-0">
            <h5 className="text-xs font-semibold" style={{ color: theme.textColor }}>
              Need more help?
            </h5>
            <p className="text-[11px] opacity-65 mt-0.5 truncate" style={{ color: theme.textColor }}>
              Our support team is online right now.
            </p>
          </div>
          <button
            onClick={onStartChat}
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-white shadow-xs flex-shrink-0 flex items-center gap-1.5 cursor-pointer hover:opacity-95 transition-opacity"
            style={{ backgroundColor: theme.primaryColor }}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};
