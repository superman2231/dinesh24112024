import React from 'react';
import { CardType } from '../data/cards';
import { IndianRupee, CreditCard, Award, CheckCircle } from 'lucide-react';

interface CardGridProps {
  cards: CardType[];
}

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48">
            <img
              src={card.imageUrl}
              alt={card.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {card.type === 'credit' ? 'Credit Card' : 'Debit Card'}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <IndianRupee className="w-5 h-5" />
                <span>Annual Fee: ₹{card.annualFee.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <CreditCard className="w-5 h-5" />
                <span>Joining Fee: ₹{card.joiningFee.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-5 h-5" />
                <span>Reward Rate: {card.rewardRate}X points</span>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  {card.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}