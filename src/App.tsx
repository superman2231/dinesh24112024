import React, { useState, useMemo } from 'react';
import { cards } from './data/cards';
import CardFilter from './components/CardFilter';
import CardGrid from './components/CardGrid';
import IncomeInput from './components/IncomeInput';
import { CreditCard } from 'lucide-react';

function App() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [income, setIncome] = useState<number>(0);

  const filteredCards = useMemo(() => {
    return cards
      .filter((card) => {
        const typeMatch = selectedType === 'all' || card.type === selectedType;
        const categoryMatch =
          selectedCategory === 'all' || card.category === selectedCategory;
        const incomeMatch = income >= card.eligibility.minIncome;
        return typeMatch && categoryMatch && incomeMatch;
      })
      .sort((a, b) => {
        // Sort by premium cards first if income is high
        if (income >= 1500000) {
          if (a.category === 'premium' && b.category !== 'premium') return -1;
          if (b.category === 'premium' && a.category !== 'premium') return 1;
        }
        return 0;
      });
  }, [selectedType, selectedCategory, income]);

  const recommendedCards = useMemo(() => {
    if (!income) return [];
    return cards
      .filter((card) => income >= card.eligibility.minIncome)
      .sort((a, b) => b.rewardRate - a.rewardRate)
      .slice(0, 2);
  }, [income]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-8 h-8" />
            <h1 className="text-3xl font-bold">HDFC Bank Card Finder</h1>
          </div>
          <p className="text-blue-100 max-w-2xl">
            Discover the perfect HDFC Bank card tailored to your lifestyle. Compare
            features, benefits, and rewards to make an informed choice.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <IncomeInput income={income} onIncomeChange={setIncome} />

        {recommendedCards.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended for You</h2>
            <CardGrid cards={recommendedCards} />
          </div>
        )}

        <CardFilter
          selectedType={selectedType}
          selectedCategory={selectedCategory}
          onTypeChange={setSelectedType}
          onCategoryChange={setSelectedCategory}
        />

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">All Available Cards</h2>
          {filteredCards.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-xl text-gray-600">
                {income === 0
                  ? 'Please enter your income to see available cards'
                  : 'No cards found matching your criteria'}
              </h3>
            </div>
          ) : (
            <CardGrid cards={filteredCards} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} HDFC Bank Card Finder. All rights
              reserved.
            </p>
            <p className="text-xs mt-2">
              Disclaimer: This is a demonstration website. Card details and offers
              are simulated and may not reflect actual HDFC Bank products.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;