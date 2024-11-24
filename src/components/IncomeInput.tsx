import React from 'react';
import { IndianRupee } from 'lucide-react';

interface IncomeInputProps {
  income: number;
  onIncomeChange: (income: number) => void;
}

export default function IncomeInput({ income, onIncomeChange }: IncomeInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    onIncomeChange(value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Annual Income</h3>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IndianRupee className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="number"
          value={income || ''}
          onChange={handleChange}
          placeholder="Enter your annual income"
          className="pl-10 pr-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Enter your annual income to get personalized card recommendations
      </p>
    </div>
  );
}