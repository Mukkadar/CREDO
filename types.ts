
export type SpendingDriver = 'Impulse Buy' | 'Social Validation' | 'Routine Necessity' | 'Dopamine Seek';

export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  driver: SpendingDriver;
  category: string;
}

export interface PsychologyInsight {
  driver: SpendingDriver;
  score: number; // 0 to 100
  description: string;
  count: number;
  totalSpent: number;
}

export interface EmotionalTrigger {
  label: string;
  driver: string;
  intensity: number; // X-axis (0-100)
  frequency: number; // Y-axis (0-100)
  totalAmount: number; // Bubble size
  color: string;
  icon: string;
  items: string[];
}

export interface HiddenPattern {
  id: string;
  title: string;
  tag: string;
  insight: string;
  metrics: { label: string; value: string }[];
  icon: string;
  color: string;
}
