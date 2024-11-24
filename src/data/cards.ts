export interface CardType {
  id: string;
  name: string;
  type: 'credit' | 'debit';
  category: 'lifestyle' | 'business' | 'premium' | 'rewards' | 'travel';
  annualFee: number;
  joiningFee: number;
  rewardRate: number;
  imageUrl: string;
  benefits: string[];
  features: string[];
  eligibility: {
    minIncome: number;
    minAge: number;
    maxAge: number;
  };
}

export const cards: CardType[] = [
  {
    id: 'regalia',
    name: 'HDFC Bank Regalia Credit Card',
    type: 'credit',
    category: 'premium',
    annualFee: 2500,
    joiningFee: 1000,
    rewardRate: 4,
    imageUrl: 'https://images.unsplash.com/photo-1614667972942-1cd9d325a00e?auto=format&fit=crop&q=80&w=400',
    benefits: [
      'Airport Lounge Access',
      '4X Reward Points on all spends',
      'Golf Program Access',
      'Premium Concierge Services'
    ],
    features: [
      'Milestone Benefits up to ₹12,500',
      'Annual Fee Waiver on spending ₹3,00,000',
      'Complimentary Airport Lounge Visits'
    ],
    eligibility: {
      minIncome: 1200000,
      minAge: 21,
      maxAge: 60
    }
  },
  {
    id: 'millennia',
    name: 'HDFC Bank Millennia Credit Card',
    type: 'credit',
    category: 'lifestyle',
    annualFee: 1000,
    joiningFee: 500,
    rewardRate: 5,
    imageUrl: 'https://images.unsplash.com/photo-1612278675615-7b093b07772d?auto=format&fit=crop&q=80&w=400',
    benefits: [
      '5% Cashback on Online Spends',
      '2.5% Cashback on Offline Spends',
      'Movie Ticket Offers',
      'Dining Privileges'
    ],
    features: [
      'Zero Fuel Surcharge',
      'EMI Conversion Facility',
      'Contactless Payments'
    ],
    eligibility: {
      minIncome: 400000,
      minAge: 21,
      maxAge: 60
    }
  },
  {
    id: 'business',
    name: 'HDFC Bank Business Credit Card',
    type: 'credit',
    category: 'business',
    annualFee: 2000,
    joiningFee: 1000,
    rewardRate: 3,
    imageUrl: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&q=80&w=400',
    benefits: [
      'GST Benefits',
      'Corporate Liability Waiver',
      'Travel Insurance',
      'Expense Management Tools'
    ],
    features: [
      'Dedicated Business Support',
      'Enhanced Credit Limits',
      'Multiple Card Issuance'
    ],
    eligibility: {
      minIncome: 600000,
      minAge: 21,
      maxAge: 65
    }
  },
  {
    id: 'platinum-debit',
    name: 'HDFC Bank Platinum Debit Card',
    type: 'debit',
    category: 'premium',
    annualFee: 750,
    joiningFee: 500,
    rewardRate: 2,
    imageUrl: 'https://images.unsplash.com/photo-1613243555978-636c48dc653c?auto=format&fit=crop&q=80&w=400',
    benefits: [
      'Higher ATM Withdrawal Limits',
      'Purchase Protection',
      'Airport Lounge Access',
      'Insurance Coverage'
    ],
    features: [
      'Contactless Payments',
      'International Acceptance',
      'Exclusive Merchant Offers'
    ],
    eligibility: {
      minIncome: 200000,
      minAge: 18,
      maxAge: 70
    }
  },
  {
    id: 'infinia',
    name: 'HDFC Bank Infinia Credit Card',
    type: 'credit',
    category: 'premium',
    annualFee: 10000,
    joiningFee: 5000,
    rewardRate: 5,
    imageUrl: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?auto=format&fit=crop&q=80&w=400',
    benefits: [
      'Unlimited Airport Lounge Access',
      '5X Reward Points on all spends',
      'Premium Golf Program',
      'Luxury Hotel Collection Benefits'
    ],
    features: [
      'Personal Concierge Service',
      'Premium Travel Insurance',
      'Exclusive Dining Privileges'
    ],
    eligibility: {
      minIncome: 2000000,
      minAge: 21,
      maxAge: 60
    }
  },
  {
    id: 'freedom',
    name: 'HDFC Bank Freedom Debit Card',
    type: 'debit',
    category: 'lifestyle',
    annualFee: 300,
    joiningFee: 200,
    rewardRate: 1,
    imageUrl: 'https://images.unsplash.com/photo-1613243555978-636c48dc653c?auto=format&fit=crop&q=80&w=400',
    benefits: [
      'Basic ATM Withdrawal Limits',
      'Shopping Discounts',
      'Movie Ticket Offers',
      'Basic Insurance Coverage'
    ],
    features: [
      'Contactless Payments',
      'Domestic Acceptance',
      'Online Shopping Security'
    ],
    eligibility: {
      minIncome: 100000,
      minAge: 18,
      maxAge: 70
    }
  },
  {
    id: 'diners-club',
    name: 'HDFC Diners Club Black',
    type: 'credit',
    category: 'premium',
    annualFee: 5000,
    joiningFee: 2500,
    rewardRate: 4,
    imageUrl: 'https://images.unsplash.com/photo-1607863680595-2cb4487e5818?auto=format&fit=crop&q=80&w=400',
    benefits: [
      'Airport Lounge Access Worldwide',
      '4X Reward Points',
      'Golf Program Access',
      'Premium Insurance Coverage'
    ],
    features: [
      'Milestone Benefits',
      'Annual Fee Waiver Options',
      'Premium Concierge Services'
    ],
    eligibility: {
      minIncome: 1500000,
      minAge: 21,
      maxAge: 60
    }
  }
];

export const categories = [
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'business', name: 'Business' },
  { id: 'premium', name: 'Premium' },
  { id: 'rewards', name: 'Rewards' },
  { id: 'travel', name: 'Travel' }
];