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
      case 'blue': return '#1e40af';
      case 'green': return '#10b981';
      case 'red': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const styles = {
    container: {
      minWidth: '300px',
      height: '160px',
      backgroundColor: getBgColor(),
      borderRadius: '24px',
      padding: '24px',
      color: '#fff',
      marginRight: '16px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: 500,
      fontSize: '18px',
    },
    value: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.title}>{data.title}</span>
      <span style={styles.value}>
        {formatCurrency(data.value)}
      </span>
    </div>
  );
};