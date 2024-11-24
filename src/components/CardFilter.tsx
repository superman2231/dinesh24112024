import React from 'react';
import { categories } from '../data/cards';

interface CardFilterProps {
  selectedType: string;
  selectedCategory: string;
  onTypeChange: (type: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function CardFilter({
  selectedType,
  selectedCategory,
  onTypeChange,
  onCategoryChange,
}: CardFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Card Type</h3>
          <div className="flex gap-4">
            <button
              onClick={() => onTypeChange('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Cards
            </button>
            <button
              onClick={() => onTypeChange('credit')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedType === 'credit'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Credit Cards
            </button>
            <button
              onClick={() => onTypeChange('debit')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedType === 'debit'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Debit Cards
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}