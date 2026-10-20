import React from 'react';
import logoImg from '../../assets/images/logo.png';

interface AdiraLogoProps {
  className?: string;
  variant?: 'badge' | 'minimal' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AdiraLogo: React.FC<AdiraLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-13',
    xl: 'h-14 sm:h-16',
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Adira Finance Logo"
        className={`${heightClass} w-auto object-contain`}
      />
    </div>
  );
};
