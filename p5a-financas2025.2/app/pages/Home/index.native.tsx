import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {summaryData.map((card) => (
          <SummaryCard key={card.id} data={card} />
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Últimas movimentações</Text>
      </View>

      <View style={styles.list}>
        {transactionsData.map((t) => (
          <TransactionItem key={t.id} item={t} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: '700', marginBottom: 12, color: '#0F172A' },
  carousel: { paddingBottom: 12 },
  sectionHeader: { marginTop: 16, marginBottom: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#0F172A' },
  list: { marginTop: 8 },
});
