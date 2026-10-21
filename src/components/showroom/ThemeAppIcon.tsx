'use client';

import React from 'react';
import { ThemeId } from '../../types/chat';

interface ThemeAppIconProps {
  themeId: ThemeId | 'framer-code' | 'settings' | 'phone' | 'safari' | 'messages';
  size?: number;
  isSelected?: boolean;
}

export const ThemeAppIcon: React.FC<ThemeAppIconProps> = ({
  themeId,
  size = 54,
  isSelected = false,
}) => {
  return (
    <div
      className={`relative select-none transition-all duration-300 ${
        isSelected ? 'scale-105' : ''
      }`}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* =========================================================================
          THEME 1: NORMAL PROFESSIONAL (Corporate Deep Royal Blue & Verified Monogram)
          ========================================================================= */}
      {themeId === 'intercom' && (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]"
        >
          <defs>
            <linearGradient id="pro-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="pro-bubble" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>

            <linearGradient id="glass-specular" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id="shadow-pro" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#090d16" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Base */}
          <rect width="100" height="100" rx="22" fill="url(#pro-bg)" />
          <rect
            x="0.75"
            y="0.75"
            width="98.5"
            height="98.5"
            rx="21.5"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />

          {/* Precision Enterprise Grid Lines */}
          <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="18" y1="50" x2="82" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="50" y1="18" x2="50" y2="82" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* Sleek Enterprise Capsule Bubble with Verified Spark */}
          <g filter="url(#shadow-pro)">
            <rect x="23" y="24" width="54" height="42" rx="16" fill="url(#pro-bubble)" />
            <path d="M35 66 L27 76 L44 66 Z" fill="url(#pro-bubble)" />

            {/* Corporate Slate & Platinum Bars */}
            <rect x="36" y="38" width="4" height="14" rx="2" fill="#475569" />
            <rect x="44" y="32" width="4" height="26" rx="2" fill="#0f172a" />
            <rect x="52" y="35" width="4" height="20" rx="2" fill="#334155" />
            <rect x="60" y="41" width="4" height="8" rx="2" fill="#64748b" />

            {/* Verified Pro Badge Sparkle */}
            <circle cx="68" cy="28" r="8" fill="#10b981" />
            <path d="M65 28 L67 30 L71 26" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Specular Highlight */}
          <path d="M0 0 L100 0 L100 45 C60 40 40 40 0 45 Z" fill="url(#glass-specular)" />
        </svg>
      )}

      {/* =========================================================================
          THEME 2: CHOCOLATE (Artisan 3D Cocoa Bar & Caramel Swirl)
          ========================================================================= */}
      {themeId === 'velvet' && (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]"
        >
          <defs>
            {/* Rich Roasted Cocoa Squircle Gradient */}
            <linearGradient id="choco-squircle-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5c331a" />
              <stop offset="45%" stopColor="#3d1e0d" />
              <stop offset="100%" stopColor="#220e05" />
            </linearGradient>

            {/* Ceramic Warm Mug Gradient */}
            <radialGradient id="mug-body" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#8a4f28" />
              <stop offset="50%" stopColor="#5c3016" />
              <stop offset="100%" stopColor="#381b0a" />
            </radialGradient>

            {/* Whipped Cream Gradient */}
            <linearGradient id="whip-cream" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fff5eb" />
              <stop offset="100%" stopColor="#f3decc" />
            </linearGradient>

            {/* Chocolate Bar Chunk Gradient */}
            <linearGradient id="choco-chunk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#693717" />
              <stop offset="100%" stopColor="#3a1b09" />
            </linearGradient>

            {/* 3D Depth Shadow */}
            <filter id="choco-depth-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#180a04" floodOpacity="0.75" />
            </filter>
          </defs>

          {/* Squircle Base */}
          <rect width="100" height="100" rx="22" fill="url(#choco-squircle-bg)" />

          {/* Frosted Warm Gold Border */}
          <rect
            x="0.75"
            y="0.75"
            width="98.5"
            height="98.5"
            rx="21.5"
            fill="none"
            stroke="rgba(254,215,170,0.35)"
            strokeWidth="1.5"
          />

          {/* Ambient Warm Glow */}
          <circle cx="50" cy="55" r="32" fill="#d97706" opacity="0.22" filter="blur(8px)" />

          {/* Composition: Artisan Mug & Chocolate Block */}
          <g filter="url(#choco-depth-shadow)">
            {/* Heart-Shaped Steam Swirl */}
            <path
              d="M48 24 C44 14 36 12 37 6 C38 0 46 0 48 8 C50 0 58 0 59 6 C60 12 52 14 48 24 Z"
              fill="none"
              stroke="#fed7aa"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />

            {/* Swirled Whipped Cream Topping */}
            <ellipse cx="48" cy="38" rx="20" ry="10" fill="url(#whip-cream)" />
            <path
              d="M32 38 C32 32 38 27 48 25 C58 27 64 32 64 38 Z"
              fill="url(#whip-cream)"
            />
            {/* Cocoa Sprinkles on Cream */}
            <circle cx="44" cy="31" r="1.2" fill="#3a1b09" />
            <circle cx="50" cy="33" r="1.4" fill="#3a1b09" />
            <circle cx="54" cy="30" r="1.2" fill="#3a1b09" />
            <circle cx="40" cy="36" r="1.1" fill="#3a1b09" />
            <circle cx="58" cy="35" r="1.3" fill="#3a1b09" />

            {/* Mug Handle */}
            <path
              d="M62 48 C72 48 76 60 62 65"
              fill="none"
              stroke="url(#mug-body)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Mug Body */}
            <path
              d="M30 38 L33 66 C34 74 62 74 63 66 L66 38 Z"
              fill="url(#mug-body)"
            />
            {/* Creamy Heart Icon on Mug Front */}
            <path
              d="M48 57 C45 52 40 51 40 48 C40 45 44 44 48 48 C52 44 56 45 56 48 C56 51 51 52 48 57 Z"
              fill="#fed7aa"
              opacity="0.9"
            />

            {/* 3D Chocolate Square Block in Foreground */}
            <g transform="translate(18, 64) rotate(-12)">
              <rect width="18" height="15" rx="3" fill="url(#choco-chunk)" stroke="#220e05" strokeWidth="1" />
              <rect x="2.5" y="2" width="13" height="11" rx="1.5" fill="#522b13" />
              <path d="M4 3.5 L14 3.5" stroke="#7e4620" strokeWidth="1" strokeLinecap="round" />
            </g>
          </g>

          {/* Top Apple Glass Curved Sheen */}
          <path d="M0 0 L100 0 L100 45 C60 40 40 40 0 45 Z" fill="url(#glass-specular)" />
        </svg>
      )}

      {/* =========================================================================
          THEME 3: HISABIFY (Friendly Watercolor Botanical Calculator & Wallet Mascot)
          ========================================================================= */}
      {themeId === 'aura' && (
        <div className="w-full h-full rounded-[22%] overflow-hidden relative shadow-md bg-white border border-emerald-300/80 flex items-center justify-center p-0.5 transition-transform group">
          <img
            src="/hisabify-logo.png"
            alt="Hisabify"
            className="w-full h-full object-cover rounded-[20%] transition-transform duration-300 group-hover:scale-105"
          />
          {/* Subtle glossy sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none rounded-[22%]" />
        </div>
      )}

      {/* =========================================================================
          THEME 4: STRAWBERRY (Glossy Ripe 3D Strawberry with Golden Seeds & Leaves)
          ========================================================================= */}
      {themeId === 'pastel' && (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]"
        >
          <defs>
            {/* Rich Apple iOS 18 Squircle Gradient Background */}
            <linearGradient id="straw-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4365" />
              <stop offset="40%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>

            {/* 3D Berry Sculpted Radial Gradient */}
            <radialGradient id="berry-3d" cx="42%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#ff758f" />
              <stop offset="28%" stopColor="#ff3366" />
              <stop offset="68%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#880e2f" />
            </radialGradient>

            {/* Leaf Shading */}
            <linearGradient id="leaf-left" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>

            <linearGradient id="leaf-right" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#166534" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>

            {/* Deep 3D App Icon Drop Shadow */}
            <filter id="berry-depth-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#50071c" floodOpacity="0.55" />
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.25" />
            </filter>

            {/* Seed Depression Glow */}
            <filter id="seed-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0.5" stdDeviation="0.4" floodColor="#7f1d1d" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* App Icon Rounded Squircle Base */}
          <rect width="100" height="100" rx="22" fill="url(#straw-bg)" />

          {/* Inner Rim Light / Frosted Border */}
          <rect
            x="0.75"
            y="0.75"
            width="98.5"
            height="98.5"
            rx="21.5"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
          />

          {/* Background Ambient Radial Glow */}
          <circle cx="50" cy="52" r="32" fill="#ff758f" opacity="0.25" filter="blur(8px)" />

          {/* 3D Masterpiece Strawberry */}
          <g filter="url(#berry-depth-shadow)">
            {/* Plump Heart-Curved Berry Silhouette */}
            <path
              d="M50 86 C28 86 16 68 16 46 C16 28 32 23 50 24 C68 23 84 28 84 46 C84 68 72 86 50 86 Z"
              fill="url(#berry-3d)"
            />

            {/* Glossy Upper Left Reflection Arc */}
            <path
              d="M26 36 C24 46 28 58 38 68"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeOpacity="0.45"
            />
            <path
              d="M28 32 C34 26 42 25 50 26"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.3"
            />

            {/* Golden Teardrop Seeds (Naturally Angled) */}
            <g filter="url(#seed-glow)">
              {/* Row 1 */}
              <ellipse cx="38" cy="38" rx="2" ry="3" fill="#fef08a" transform="rotate(-15 38 38)" />
              <ellipse cx="50" cy="36" rx="2" ry="3" fill="#fef08a" />
              <ellipse cx="62" cy="38" rx="2" ry="3" fill="#fef08a" transform="rotate(15 62 38)" />

              {/* Row 2 */}
              <ellipse cx="30" cy="48" rx="2" ry="3.2" fill="#fef08a" transform="rotate(-20 30 48)" />
              <ellipse cx="44" cy="48" rx="2" ry="3.2" fill="#fef08a" transform="rotate(-5 44 48)" />
              <ellipse cx="56" cy="48" rx="2" ry="3.2" fill="#fef08a" transform="rotate(5 56 48)" />
              <ellipse cx="70" cy="48" rx="2" ry="3.2" fill="#fef08a" transform="rotate(20 70 48)" />

              {/* Row 3 */}
              <ellipse cx="36" cy="60" rx="1.8" ry="3" fill="#fef08a" transform="rotate(-12 36 60)" />
              <ellipse cx="50" cy="60" rx="1.8" ry="3" fill="#fef08a" />
              <ellipse cx="64" cy="60" rx="1.8" ry="3" fill="#fef08a" transform="rotate(12 64 60)" />

              {/* Row 4 (Lower Tip) */}
              <ellipse cx="43" cy="72" rx="1.6" ry="2.6" fill="#fef08a" transform="rotate(-8 43 72)" />
              <ellipse cx="57" cy="72" rx="1.6" ry="2.6" fill="#fef08a" transform="rotate(8 57 72)" />
              <ellipse cx="50" cy="80" rx="1.4" ry="2.2" fill="#fef08a" />
            </g>

            {/* Lush 3D Calyx Leaves */}
            {/* Center Standing Leaf */}
            <path
              d="M50 25 C45 12 47 4 50 2 C53 4 55 12 50 25 Z"
              fill="#22c55e"
            />
            {/* Left Curving Leaf */}
            <path
              d="M48 24 C34 10 20 16 18 22 C22 25 34 26 48 24 Z"
              fill="url(#leaf-left)"
            />
            {/* Right Curving Leaf */}
            <path
              d="M52 24 C66 10 80 16 82 22 C78 25 66 26 52 24 Z"
              fill="url(#leaf-right)"
            />
            {/* Center Overlap Leaf */}
            <path
              d="M49 25 C42 16 38 18 36 24 C40 26 46 26 49 25 Z"
              fill="#16a34a"
            />
            <path
              d="M51 25 C58 16 62 18 64 24 C60 26 54 26 51 25 Z"
              fill="#4ade80"
            />

            {/* Playful Curved Stem */}
            <path
              d="M50 14 C48 6 42 5 38 1"
              fill="none"
              stroke="#15803d"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>

          {/* Specular Apple Glass Gradient */}
          <path d="M0 0 L100 0 L100 45 C60 40 40 40 0 45 Z" fill="url(#glass-specular)" />
        </svg>
      )}

      {/* =========================================================================
          SYSTEM APPS FOR HARDWARE SHOWROOM
          ========================================================================= */}
      {/* FRAMER CODE */}
      {themeId === 'framer-code' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]">
          <rect width="100" height="100" rx="22" fill="#0f172a" />
          <rect x="0.75" y="0.75" width="98.5" height="98.5" rx="21.5" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <path d="M30 38 L22 49 L30 60" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M70 38 L78 49 L70 60" fill="none" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M54 32 L46 66" fill="none" stroke="#a855f7" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      )}

      {/* SETTINGS */}
      {themeId === 'settings' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]">
          <rect width="100" height="100" rx="22" fill="#475569" />
          <circle cx="50" cy="50" r="28" fill="#cbd5e1" />
          <circle cx="50" cy="50" r="14" fill="#475569" />
        </svg>
      )}

      {/* PHONE */}
      {themeId === 'phone' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]">
          <rect width="100" height="100" rx="22" fill="#22c55e" />
          <path d="M35 32 C35 32 38 28 43 30 C46 31 50 38 48 42 C46 44 44 45 45 48 C47 53 52 58 57 60 C60 61 61 59 63 57 C67 55 74 59 75 62 C77 67 73 70 73 70 C68 74 56 71 44 59 C32 47 29 35 35 32 Z" fill="#ffffff" />
        </svg>
      )}

      {/* SAFARI */}
      {themeId === 'safari' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]">
          <rect width="100" height="100" rx="22" fill="#ffffff" />
          <circle cx="50" cy="50" r="36" fill="#0284c7" />
          <polygon points="50,22 44,50 50,47" fill="#ef4444" />
          <polygon points="50,22 56,50 50,47" fill="#dc2626" />
          <polygon points="50,78 44,50 50,53" fill="#ffffff" />
          <polygon points="50,78 56,50 50,53" fill="#cbd5e1" />
        </svg>
      )}

      {/* MESSAGES */}
      {themeId === 'messages' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-hidden rounded-[22%]">
          <rect width="100" height="100" rx="22" fill="#22c55e" />
          <path d="M26 30 C26 23.37 31.37 18 38 18 L62 18 C68.63 18 74 23.37 74 30 L74 54 C74 60.63 68.63 66 62 66 L44 66 L30 78 L32 66 C28 65 26 60.5 26 54 Z" fill="#ffffff" />
        </svg>
      )}
    </div>
  );
};
