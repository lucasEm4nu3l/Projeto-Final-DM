import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Transaction } from '../../../types';

interface Props {
  item: Transaction;
}

export const TransactionItem: React.FC<Props> = ({ item }) => {
  const isExpense = item.type === 'expense';

  return (
    <View style={styles.wrapper}>
      <View style={[styles.badge, isExpense ? styles.bad : styles.good]}>
        <Text style={styles.badgeText}>{item.label}</Text>
      </View>

      <Text style={styles.value}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 8,
  },
  bad: { backgroundColor: '#EF4444' },
  good: { backgroundColor: '#10B981' },
  badgeText: { color: '#fff', fontWeight: '700', textTransform: 'capitalize' },
  value: { fontSize: 20, fontWeight: '600', color: '#0F172A' },
});

export default TransactionItem;
