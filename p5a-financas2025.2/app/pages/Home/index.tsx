import React from 'react';
import { Calendar } from 'lucide-react';
import { SummaryCard } from '../../components/SummaryData/SummaryCard';
import { TransactionItem } from '../../components/Transacao/Transaction';
import { SummaryCardData, Transaction } from '../../../types';
import styles from './styles2';

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
    <div style={styles.container}>

      {/* CARROSSEL (SCROLL HORIZONTAL) */}
      <section style={styles.carousel}>
        {summaryData.map((card) => (
          <SummaryCard key={card.id} data={card} />
        ))}
      </section>

      {/* LISTA DE MOVIMENTAÇÕES */}
      <main style={styles.main}>
        <div style={styles.sectionHeader}>
          <Calendar style={{ width: '20px', height: '20px', color: '#0f172a' }} />
          <h2 style={styles.sectionTitle}>Últimas movimentações</h2>
        </div>

        <div style={styles.list}>
          {transactionsData.map((transaction) => (
            <TransactionItem key={transaction.id} item={transaction} />
          ))}
        </div>
      </main>
    </div>
  );
}

