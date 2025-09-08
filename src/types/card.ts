export enum Suit {
  HEARTS = 'hearts',
  DIAMONDS = 'diamonds',
  CLUBS = 'clubs',
  SPADES = 'spades'
}

export interface Card {
  suit: Suit;
  number: number; // 1-13 (1=Ace, 11=Jack, 12=Queen, 13=King)
}

// Utility functions for working with cards
export const createCard = (suit: Suit, number: number): Card => {
  if (number < 1 || number > 13) {
    throw new Error('Card number must be between 1 and 13');
  }
  return { suit, number };
};

export const getSuitSymbol = (suit: Suit): string => {
  const suitSymbols = {
    [Suit.HEARTS]: '♥',
    [Suit.DIAMONDS]: '♦',
    [Suit.CLUBS]: '♣',
    [Suit.SPADES]: '♠'
  };
  return suitSymbols[suit];
};

// Utility functions
export const getCardDisplayName = (card: Card): string => {
  const numberNames: { [key: number]: string } = {
    1: 'A',
    11: 'J',
    12: 'Q',
    13: 'K'
  };
  
  return numberNames[card.number] || card.number.toString();
};


export const getSuitColor = (suit: Suit): string => {
  return suit === Suit.HEARTS || suit === Suit.DIAMONDS ? 'text-red-500' : 'text-gray-800';
};

export const createStandardDeck = (): Card[] => {
  const deck: Card[] = [];
  
  Object.values(Suit).forEach(suit => {
    for (let number = 1; number <= 13; number++) {
      deck.push(createCard(suit, number));
    }
  });
  
  return deck;
};

export const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const compareCards = (a: Card, b: Card): number => {
  // First compare by number, then by suit
  if (a.number !== b.number) {
    return a.number - b.number;
  }
  return a.suit.localeCompare(b.suit);
};

// Type guards
export const isValidCard = (obj: any): obj is Card => {
  return (
    obj &&
    typeof obj === 'object' &&
    Object.values(Suit).includes(obj.suit) &&
    typeof obj.number === 'number' &&
    obj.number >= 1 &&
    obj.number <= 13
  );
};