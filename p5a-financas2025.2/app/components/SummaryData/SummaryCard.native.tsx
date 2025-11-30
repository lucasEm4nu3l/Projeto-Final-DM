import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SummaryCardData } from '../../../types';

const formatCurrency = (value: number) => {
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
      case 'blue': return styles.blue;
      case 'green': return styles.green;
      case 'red': return styles.red;
      default: return styles.gray;
    }
  };

  return (
    <View style={[styles.container, getBgColor()] }>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.value}>{formatCurrency(data.value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    height: 160,
    borderRadius: 24,
    padding: 16,
    marginRight: 12,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  blue: { backgroundColor: '#1E40AF' },
  green: { backgroundColor: '#10B981' },
  red: { backgroundColor: '#EF4444' },
  gray: { backgroundColor: '#6B7280' },
});

export default SummaryCard;
