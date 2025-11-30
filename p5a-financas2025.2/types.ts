
export interface Transaction {
  id: number;
  label: string; // ex: "despesa", "receita"
  value: number; // ex: 35.30
  type: 'income' | 'expense'; // Para sabermos se é verde ou vermelho
}

export interface SummaryCardData {
  id: number;
  title: string; // ex: "Saldo atual"
  value: number; // ex: 1314.70
  variant: 'blue' | 'green' | 'red'; 
}