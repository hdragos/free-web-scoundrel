import React from 'react';

import type { Card } from "../types/card";
import { getSuitColor, getSuitSymbol, getCardDisplayName } from "../types/card"

// Props for the Card component
interface CardProps {
  card: Card;
  isSelected?: boolean;
  isClickable?: boolean;
  onClick?: (card: Card) => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}


const CardComponent: React.FC<CardProps> = ({
  card,
  isSelected = false,
  isClickable = false,
  onClick,
  className = '',
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'w-12 h-16 text-xs',
    medium: 'w-16 h-24 text-sm',
    large: 'w-20 h-28 text-base'
  };

  const handleClick = () => {
    if (isClickable && onClick) {
      onClick(card);
    }
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        bg-white border-2 rounded-lg shadow-md
        flex flex-col justify-between
        relative
        ${isSelected ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300'}
        ${isClickable ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : ''}
        ${className}
      `}
      onClick={handleClick}
    >
      {/* Top left corner */}
      <div className={`absolute top-1 left-1 ${getSuitColor(card.suit)} font-bold leading-none`}>
        <div>{getCardDisplayName(card)}</div>
        <div className="text-center">{getSuitSymbol(card.suit)}</div>
      </div>

      {/* Center symbol */}
      <div className={`flex-1 flex items-center justify-center ${getSuitColor(card.suit)}`}>
        <span className="text-2xl">{getSuitSymbol(card.suit)}</span>
      </div>

      {/* Bottom right corner (rotated) */}
      <div className={`absolute bottom-1 right-1 ${getSuitColor(card.suit)} font-bold leading-none transform rotate-180`}>
        <div>{getCardDisplayName(card)}</div>
        <div className="text-center">{getSuitSymbol(card.suit)}</div>
      </div>
    </div>
  );
};

export default CardComponent;