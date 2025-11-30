import React from 'react';
import { SummaryCardData } from '../../../types';

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

interface Props {
  data: SummaryCardData;
}

export const SummaryCard: React.FC<Props> = ({ data }) => {

  const getBgColor = () => {
    switch (data.variant) {
      case 'blue': return 'bg-blue-700';
      case 'green': return 'bg-green-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className={`min-w-[300px] h-40 ${getBgColor()} rounded-3xl p-6 text-white mr-4 shadow-lg flex flex-col justify-between snap-center`}>
      <span className="font-medium text-lg">{data.title}</span>
      <span className="text-4xl font-bold">
        {formatCurrency(data.value)}
      </span>
    </div>
  );
};