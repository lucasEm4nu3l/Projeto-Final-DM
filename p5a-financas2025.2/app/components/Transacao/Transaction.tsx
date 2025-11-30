import React from 'react';
import { Transaction } from '../../../types';
import { formatCurrency } from '../SummaryData/SummaryCard';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'; // Instale: npm i lucide-react

interface Props {
  item: Transaction;
}

export const TransactionItem: React.FC<Props> = ({ item }) => {
  const isExpense = item.type === 'expense';

  const styles = {
    wrapper: {
      backgroundColor: '#f8fafc',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '12px',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      border: '1px solid #f1f5f9',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '8px',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: 'fit-content',
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingTop: '4px',
      paddingBottom: '4px',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 'bold',
      backgroundColor: isExpense ? '#ef4444' : '#10b981',
      textTransform: 'capitalize' as const,
    },
    value: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#1e293b',
    },
  };

  return (
    <div style={styles.wrapper}>
      {/* Etiqueta (ex: despesa/receita) */}
      <div style={styles.badge}>
        {isExpense ? <ArrowDownCircle size={16} /> : <ArrowUpCircle size={16} />}
        <span>{item.label}</span>
      </div>

      {/* Valor */}
      <span style={styles.value}>
        {formatCurrency(item.value)}
      </span>
    </div>
  );
};