import React from 'react';

import type { Card } from "../types/card"
import { Suit, getSuitSymbol, getCardDisplayName } from "../types/card"
import CardComponent from './card';

// Example usage component
const CardDemo: React.FC = () => {
  const sampleCards: Card[] = [
    { suit: Suit.SPADES, number: 1 },
    { suit: Suit.HEARTS, number: 13 },
    { suit: Suit.DIAMONDS, number: 7 },
    { suit: Suit.CLUBS, number: 11 }
  ];

  const handleCardClick = (card: Card) => {
    console.log(`Clicked card: ${getCardDisplayName(card)}${getSuitSymbol(card.suit)}`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Playing Cards Demo</h1>
      
      {/* Different sizes */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Card Sizes</h2>
        <div className="flex items-end gap-4">
          <CardComponent card={sampleCards[0]} size="small" />
          <CardComponent card={sampleCards[0]} size="medium" />
          <CardComponent card={sampleCards[0]} size="large" />
        </div>
      </div>

      {/* Interactive cards */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Interactive Cards</h2>
        <div className="flex gap-4">
          {sampleCards.map((card, index) => (
            <CardComponent
              key={index}
              card={card}
              isClickable={true}
              onClick={handleCardClick}
              isSelected={index === 1} // King of Hearts is selected
            />
          ))}
        </div>
      </div>

      {/* All suits example */}
      <div>
        <h2 className="text-lg font-semibold mb-4">All Suits (Aces)</h2>
        <div className="flex gap-4">
          {Object.values(Suit).map((suit) => (
            <CardComponent
              key={suit}
              card={{ suit, number: 1 }}
              size="medium"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDemo;