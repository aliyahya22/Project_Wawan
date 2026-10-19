import React from 'react';

interface AdiraLogoProps {
  className?: string;
  variant?: 'badge' | 'minimal' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AdiraLogo: React.FC<AdiraLogoProps> = ({
  className = '',
  variant = 'badge',
  size = 'md',
}) => {
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-13',
    xl: 'h-14 sm:h-16',
  }[size];

  // 1. White Variant (for Dark/Black Backgrounds)
  if (variant === 'white') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          viewBox="0 0 340 100"
          className={`${heightClass} w-auto`}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Adira Finance"
        >
          <g transform="skewX(-13) translate(22, 10)">
            {/* First A with signature notch */}
            <path
              fillRule="evenodd"
              d="M10 60 L32 0 L58 0 L76 60 L54 60 L48 44 L28 44 L21 60 Z M33 30 L43 30 L38 15 Z"
              fill="#FFFFFF"
            />
            {/* Signature yellow slice on first A */}
            <polygon points="12,44 32,32 34,44" fill="#FFCC00" />

            {/* D */}
            <path
              fillRule="evenodd"
              d="M72 0 L104 0 C122 0 134 11 134 30 C134 49 122 60 104 60 L72 60 Z M92 44 L102 44 C111 44 115 38 115 30 C115 22 111 16 102 16 L92 16 Z"
              fill="#FFFFFF"
            />

            {/* I */}
            <path d="M144 0 L164 0 L164 60 L144 60 Z" fill="#FFFFFF" />

            {/* R */}
            <path
              fillRule="evenodd"
              d="M174 0 L208 0 C222 0 230 7 230 20 C230 29 223 36 212 39 L232 60 L208 60 L194 44 L194 60 L174 60 Z M194 28 L204 28 C209 28 212 25 212 20 C212 15 209 13 204 13 L194 13 Z"
              fill="#FFFFFF"
            />

            {/* Second A */}
            <path
              fillRule="evenodd"
              d="M240 60 L262 0 L288 0 L306 60 L284 60 L278 44 L258 44 L251 60 Z M263 30 L273 30 L268 15 Z"
              fill="#FFFFFF"
            />
          </g>

          {/* Subtext FINANCE */}
          <text
            x="170"
            y="90"
            textAnchor="middle"
            fill="#FFCC00"
            fontSize="18"
            fontWeight="900"
            letterSpacing="8"
            fontFamily="Arial Black, Impact, -apple-system, sans-serif"
          >
            FINANCE
          </text>
        </svg>
      </div>
    );
  }

  // 2. Minimal Variant (Transparent background with Black Wordmark & Yellow Accent)
  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          viewBox="0 0 340 100"
          className={`${heightClass} w-auto`}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Adira Finance"
        >
          <g transform="skewX(-13) translate(22, 10)">
            {/* First A with signature notch */}
            <path
              fillRule="evenodd"
              d="M10 60 L32 0 L58 0 L76 60 L54 60 L48 44 L28 44 L21 60 Z M33 30 L43 30 L38 15 Z"
              fill="#18181B"
            />
            {/* Signature yellow slice on first A */}
            <polygon points="12,44 32,32 34,44" fill="#FFCC00" />

            {/* D */}
            <path
              fillRule="evenodd"
              d="M72 0 L104 0 C122 0 134 11 134 30 C134 49 122 60 104 60 L72 60 Z M92 44 L102 44 C111 44 115 38 115 30 C115 22 111 16 102 16 L92 16 Z"
              fill="#18181B"
            />

            {/* I */}
            <path d="M144 0 L164 0 L164 60 L144 60 Z" fill="#18181B" />

            {/* R */}
            <path
              fillRule="evenodd"
              d="M174 0 L208 0 C222 0 230 7 230 20 C230 29 223 36 212 39 L232 60 L208 60 L194 44 L194 60 L174 60 Z M194 28 L204 28 C209 28 212 25 212 20 C212 15 209 13 204 13 L194 13 Z"
              fill="#18181B"
            />

            {/* Second A */}
            <path
              fillRule="evenodd"
              d="M240 60 L262 0 L288 0 L306 60 L284 60 L278 44 L258 44 L251 60 Z M263 30 L273 30 L268 15 Z"
              fill="#18181B"
            />
          </g>

          {/* Subtext FINANCE */}
          <text
            x="170"
            y="90"
            textAnchor="middle"
            fill="#18181B"
            fontSize="18"
            fontWeight="900"
            letterSpacing="8"
            fontFamily="Arial Black, Impact, -apple-system, sans-serif"
          >
            FINANCE
          </text>
        </svg>
      </div>
    );
  }

  // 3. Official Yellow Badge Variant (Authentic Adira Finance Signature Rounded Yellow Badge)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 360 115"
        className={`${heightClass} w-auto drop-shadow-xs`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Adira Finance Logo"
      >
        <defs>
          <linearGradient id="adiraYellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD200" />
            <stop offset="100%" stopColor="#FFC400" />
          </linearGradient>
        </defs>

        {/* Adira Signature Vibrant Golden Yellow Rounded Badge */}
        <rect width="360" height="115" rx="12" fill="url(#adiraYellowGrad)" />

        {/* Slanted ADIRA text with proper optical alignment */}
        <g transform="skewX(-13) translate(34, 14)">
          {/* Letter A with signature yellow notch slice */}
          <path
            fillRule="evenodd"
            d="M10 58 L32 0 L58 0 L76 58 L54 58 L48 42 L28 42 L22 58 Z M33 28 L43 28 L38 14 Z"
            fill="#18181B"
          />
          {/* Authentic notch slice in first A that matches background yellow */}
          <polygon points="12,42 32,30 35,42" fill="#FFC400" />

          {/* Letter D */}
          <path
            fillRule="evenodd"
            d="M72 0 L104 0 C122 0 134 11 134 29 C134 47 122 58 104 58 L72 58 Z M92 42 L102 42 C111 42 115 36 115 29 C115 22 111 16 102 16 L92 16 Z"
            fill="#18181B"
          />

          {/* Letter I */}
          <path d="M144 0 L164 0 L164 58 L144 58 Z" fill="#18181B" />

          {/* Letter R */}
          <path
            fillRule="evenodd"
            d="M174 0 L208 0 C222 0 230 7 230 19 C230 28 223 35 212 38 L232 58 L208 58 L194 42 L194 58 L174 58 Z M194 27 L204 27 C209 27 212 24 212 19 C212 14 209 13 204 13 L194 13 Z"
            fill="#18181B"
          />

          {/* Second Letter A */}
          <path
            fillRule="evenodd"
            d="M240 58 L262 0 L288 0 L306 58 L284 58 L278 42 L258 42 L252 58 Z M263 28 L273 28 L268 14 Z"
            fill="#18181B"
          />
        </g>

        {/* FINANCE Subtext */}
        <text
          x="180"
          y="95"
          textAnchor="middle"
          fill="#18181B"
          fontSize="20"
          fontWeight="900"
          letterSpacing="9"
          fontFamily="Arial Black, Impact, -apple-system, sans-serif"
        >
          FINANCE
        </text>

        {/* Subtitle endorsement: a Danamon company */}
        <text
          x="180"
          y="108"
          textAnchor="middle"
          fill="#3F3F46"
          fontSize="9"
          fontWeight="600"
          letterSpacing="1"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontStyle="italic"
        >
          a Danamon company · Mitra Resmi AXI
        </text>
      </svg>
    </div>
  );
};
