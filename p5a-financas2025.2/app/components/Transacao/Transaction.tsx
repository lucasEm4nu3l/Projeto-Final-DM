import React from 'react';
import { Transaction } from '../../../types';
import { formatCurrency } from '../SummaryData/SummaryCard';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'; // Instale: npm i lucide-react

interface Props {
  item: Transaction;
}

export const TransactionItem: React.FC<Props> = ({ item }) => {
  const isExpense = item.type === 'expense';

  return (
    <div className= "bg-slate-50 p-4 rounded-xl mb-3 shadow-sm border border-slate-100 flex flex-col gap-2">
      {/* Etiqueta (ex: despesa/receita) */}
      <div className={`flex items-center gap-2 w-max px-3 py-1 rounded-md text-white text-sm font-bold ${isExpense ? 'bg-red-500' : 'bg-green-500'}`}>
        {isExpense ? <ArrowDownCircle size={16} /> : <ArrowUpCircle size={16} />}
        <span className="capitalize">{item.label}</span>
      </div>

      {/* Valor */}
      <span className='text-2xl font-semibold text-slate-700'>
        {formatCurrency(item.value)}
      </span>
    </div>
  );
};