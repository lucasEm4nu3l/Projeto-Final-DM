import React from 'react';
import { Menu, Calendar } from 'lucide-react';
import { SummaryCard } from '../../components/SummaryData/SummaryCard';
import { TransactionItem } from '../../components/Transacao/Transaction';
import { SummaryCardData, Transaction } from '../../../types';

const summaryData: SummaryCardData[] = [
  { id: 1, title: 'Saldo atual', value: 1314.7, variant: 'blue' },
  { id: 2, title: 'Entradas de hoje', value: 1200.0, variant: 'green' },
  { id: 3, title: 'Saídas de hoje', value: 500.0, variant: 'red' },
];

const transactionsData: Transaction[] = [
  { id: 1, label: 'despesa', value: 35.3, type: 'expense' },
  { id: 2, label: 'receita', value: 780.3, type: 'income' },
  { id: 3, label: 'receita', value: 50.0, type: 'income' },
  { id: 4, label: 'despesa', value: 155.9, type: 'expense' },
];

export default function Home(): React.ReactElement {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-10">
      {/* HEADER */}
      <header className="p-6 flex items-center gap-4">
        <Menu className="w-8 h-8 text-slate-700" />
        <h1 className="text-xl font-medium text-slate-900">Minhas movimentações</h1>
      </header>

      {/* CARROSSEL (SCROLL HORIZONTAL) */}
      <section className="flex overflow-x-auto px-6 pb-8 snap-x snap-mandatory scrollbar-hide">
        {summaryData.map((card) => (
          <SummaryCard key={card.id} data={card} />
        ))}
      </section>

      {/* LISTA DE MOVIMENTAÇÕES */}
      <main className="px-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-slate-900" />
          <h2 className="font-semibold text-slate-900">Ultimas movimentações</h2>
        </div>

        <div className="flex flex-col">
          {transactionsData.map((transaction) => (
            <TransactionItem key={transaction.id} item={transaction} />
          ))}
        </div>
      </main>
    </div>
  );
}
