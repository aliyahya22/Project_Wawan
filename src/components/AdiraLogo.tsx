import React from 'react';

interface AdiraLogoProps {
  className?: string;
  variant?: 'badge' | 'minimal' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const AdiraLogo: React.FC<AdiraLogoProps> = ({
  className = '',
  variant = 'badge',
  size = 'md',
}) => {
  const heightClass = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  }[size];

  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          viewBox="0 0 320 120"
          className={`${heightClass} w-auto`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Adira Finance"
        >
          {/* ADIRA Wordmark */}
          <g transform="skewX(-14) translate(28, 10)">
            {/* First A with white arrow notch */}
            <path
              d="M10 70 L35 0 L65 0 L85 70 L58 70 L52 52 L36 52 L26 70 Z"
              fill="#18181B"
            />
            {/* White cutting triangle in A */}
            <polygon points="26,52 48,34 50,52" fill="#FFFFFF" />

            {/* D */}
            <path
              d="M72 0 L108 0 C125 0 138 12 138 35 C138 56 125 70 108 70 L72 70 Z M95 50 L107 50 C114 50 118 45 118 35 C118 25 114 20 107 20 L95 20 Z"
              fill="#18181B"
            />

            {/* I */}
            <path d="M148 0 L170 0 L170 70 L148 70 Z" fill="#18181B" />

            {/* R */}
            <path
              d="M180 0 L216 0 C229 0 238 8 238 23 C238 34 230 41 220 44 L240 70 L214 70 L198 47 L198 70 L176 70 L176 0 Z M198 33 L213 33 C217 33 220 30 220 23 C220 17 217 15 212 15 L198 15 Z"
              fill="#18181B"
            />

            {/* Second A */}
            <path
              d="M242 70 L267 0 L297 0 L317 70 L290 70 L284 52 L268 52 L258 70 Z M272 36 L280 36 L276 22 Z"
              fill="#18181B"
            />
          </g>

          {/* FINANCE text */}
          <text
            x="160"
            y="104"
            textAnchor="middle"
            fill="#18181B"
            fontSize="21"
            fontWeight="900"
            letterSpacing="8"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            FINANCE
          </text>
        </svg>
      </div>
    );
  }

  // Official Yellow Badge Variant (Matches uploaded image exactly)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 360 140"
        className={`${heightClass} w-auto drop-shadow-xs`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Adira Finance Logo"
      >
        {/* Adira Signature Yellow Background Badge */}
        <rect width="360" height="140" rx="8" fill="#FFCC00" />

        {/* Slanted ADIRA text */}
        <g transform="skewX(-13) translate(38, 16)">
          {/* Letter A with white notch */}
          <path
            d="M8 72 L36 0 L66 0 L86 72 L58 72 L52 52 L34 52 L24 72 Z"
            fill="#111827"
          />
          {/* Crisp arrow notch in first A */}
          <polygon points="24,52 49,33 51,52" fill="#FFFFFF" />

          {/* Letter D */}
          <path
            d="M74 0 L110 0 C128 0 140 12 140 36 C140 58 127 72 109 72 L74 72 Z M96 52 L108 52 C116 52 120 46 120 36 C120 26 116 20 108 20 L96 20 Z"
            fill="#111827"
          />

          {/* Letter I */}
          <path d="M150 0 L172 0 L172 72 L150 72 Z" fill="#111827" />

          {/* Letter R */}
          <path
            d="M182 0 L219 0 C233 0 242 8 242 23 C242 34 233 42 222 45 L244 72 L216 72 L200 48 L200 72 L178 72 L178 0 Z M200 34 L215 34 C220 34 223 30 223 23 C223 17 220 15 214 15 L200 15 Z"
            fill="#111827"
          />

          {/* Letter A */}
          <path
            d="M245 72 L271 0 L301 0 L321 72 L293 72 L287 52 L271 52 L261 72 Z M276 35 L282 35 L279 20 Z"
            fill="#111827"
          />
        </g>

        {/* FINANCE Subtext */}
        <text
          x="180"
          y="114"
          textAnchor="middle"
          fill="#111827"
          fontSize="22"
          fontWeight="900"
          letterSpacing="9"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          FINANCE
        </text>
      </svg>
    </div>
  );
};
