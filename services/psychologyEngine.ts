
import { Transaction, PsychologyInsight, SpendingDriver, EmotionalTrigger, HiddenPattern } from '../types';

// Fully accurate dataset mapped from OCR pages 1, 2, and 3
export const mockTransactions: (Transaction & { channel: string; type: 'debit' | 'credit' })[] = [
  { id: '1', merchant: 'Vegetables - Cute Cucumber', amount: 110, date: '2025-10-01', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '2', merchant: 'Milk - Nandini Parlor', amount: 112, date: '2025-10-01', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '3', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-02', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '4', merchant: 'Vegetables - Cute Cucumber', amount: 94, date: '2025-10-03', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '5', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-03', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '6', merchant: 'Stationary - AEE JEE', amount: 420, date: '2025-10-04', driver: 'Routine Necessity', category: 'Education', channel: 'UPI', type: 'debit' },
  { id: '7', merchant: 'Vegetables - Cute Cucumber', amount: 68, date: '2025-10-04', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '8', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-04', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '9', merchant: 'Medicine - Apollo', amount: 485, date: '2025-10-04', driver: 'Routine Necessity', category: 'Health', channel: 'Card', type: 'debit' },
  { id: '10', merchant: 'Vegetables - Cute Cucumber', amount: 30, date: '2025-10-05', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '11', merchant: 'Milk - Nandini Parlor', amount: 84, date: '2025-10-05', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '12', merchant: 'Stationary - AEE JEE', amount: 13, date: '2025-10-05', driver: 'Routine Necessity', category: 'Education', channel: 'UPI', type: 'debit' },
  { id: '13', merchant: 'Mutual Funds - NIPPON SIP', amount: 2000, date: '2025-10-05', driver: 'Routine Necessity', category: 'Investment', channel: 'UPI', type: 'debit' },
  { id: '14', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-06', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '15', merchant: 'Shoes - Asics', amount: 5000, date: '2025-10-06', driver: 'Dopamine Seek', category: 'Fashion', channel: 'Card', type: 'debit' },
  { id: '16', merchant: 'Vegetables - Cute Cucumber', amount: 43, date: '2025-10-06', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '17', merchant: 'Clothing - USPA', amount: 3200, date: '2025-10-06', driver: 'Social Validation', category: 'Fashion', channel: 'Card', type: 'debit' },
  { id: '18', merchant: 'Grocerry - Instamart', amount: 2345, date: '2025-10-07', driver: 'Impulse Buy', category: 'Groceries', channel: 'Card', type: 'debit' },
  { id: '19', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-07', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '20', merchant: 'Bill - Electricity', amount: 5002, date: '2025-10-07', driver: 'Routine Necessity', category: 'Utilities', channel: 'UPI', type: 'debit' },
  { id: '21', merchant: 'Vegetables - Cute Cucumber', amount: 76, date: '2025-10-08', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '22', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-08', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '23', merchant: 'Grocerry - BigBasket', amount: 645, date: '2025-10-08', driver: 'Routine Necessity', category: 'Groceries', channel: 'Card', type: 'debit' },
  { id: '24', merchant: 'Clothing - Puma', amount: 2200, date: '2025-10-09', driver: 'Social Validation', category: 'Fashion', channel: 'Card', type: 'debit' },
  { id: '25', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-09', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '26', merchant: 'Vegetables - Cute Cucumber', amount: 12, date: '2025-10-09', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '27', merchant: 'Croma - Mobile', amount: 65000, date: '2025-10-10', driver: 'Dopamine Seek', category: 'Electronics', channel: 'Card', type: 'debit' },
  { id: '28', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-10', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '29', merchant: 'Vegetables - Cute Cucumber', amount: 32, date: '2025-10-10', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '30', merchant: 'Clothing - Fashion Factory', amount: 5600, date: '2025-10-10', driver: 'Social Validation', category: 'Fashion', channel: 'Card', type: 'debit' },
  { id: '31', merchant: 'Flight - Air India', amount: 6300, date: '2025-10-11', driver: 'Social Validation', category: 'Travel', channel: 'Card', type: 'debit' },
  { id: '32', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-11', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '33', merchant: 'Vegetables - Cute Cucumber', amount: 18, date: '2025-10-11', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '34', merchant: 'Food - Mojo Pizza', amount: 512, date: '2025-10-11', driver: 'Impulse Buy', category: 'Food', channel: 'Card', type: 'debit' },
  { id: '35', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-12', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '36', merchant: 'Sweets - Ananda Sweets', amount: 520, date: '2025-10-12', driver: 'Impulse Buy', category: 'Food', channel: 'Card', type: 'debit' },
  { id: '37', merchant: 'Bill - Water', amount: 617, date: '2025-10-12', driver: 'Routine Necessity', category: 'Utilities', channel: 'UPI', type: 'debit' },
  { id: '38', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-13', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '39', merchant: 'Vegetables - Cute Cucumber', amount: 66, date: '2025-10-13', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '40', merchant: 'Flight - Air India', amount: 7000, date: '2025-10-13', driver: 'Social Validation', category: 'Travel', channel: 'Card', type: 'debit' },
  { id: '41', merchant: 'Bill - Broadband', amount: 580, date: '2025-10-13', driver: 'Routine Necessity', category: 'Utilities', channel: 'UPI', type: 'debit' },
  { id: '42', merchant: 'Milk - Nandini Parlor', amount: 112, date: '2025-10-14', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '43', merchant: 'Vegetables - Cute Cucumber', amount: 55, date: '2025-10-14', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '44', merchant: 'Saloon - Looks', amount: 150, date: '2025-10-14', driver: 'Routine Necessity', category: 'Personal Care', channel: 'UPI', type: 'debit' },
  { id: '45', merchant: 'Milk - Nandini Parlor', amount: 550, date: '2025-10-15', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '46', merchant: 'Food - Amul', amount: 300, date: '2025-10-15', driver: 'Impulse Buy', category: 'Food', channel: 'UPI', type: 'debit' },
  { id: '47', merchant: 'Bill - JIO Telecom', amount: 666, date: '2025-10-15', driver: 'Routine Necessity', category: 'Utilities', channel: 'UPI', type: 'debit' },
  { id: '48', merchant: 'Grocerry - Instamart', amount: 450, date: '2025-10-15', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '49', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-16', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '50', merchant: 'Vegetables - Cute Cucumber', amount: 78, date: '2025-10-16', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '51', merchant: 'Insurance - LIC', amount: 4000, date: '2025-10-16', driver: 'Routine Necessity', category: 'Fixed Obligations', channel: 'UPI', type: 'debit' },
  { id: '52', merchant: 'EMI - Bike KTM', amount: 2000, date: '2025-10-17', driver: 'Routine Necessity', category: 'Fixed Obligations', channel: 'UPI', type: 'debit' },
  { id: '53', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-17', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '54', merchant: 'Service - Vehicle Hyundai', amount: 3200, date: '2025-10-17', driver: 'Routine Necessity', category: 'Maintenance', channel: 'Card', type: 'debit' },
  { id: '55', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-18', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '56', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-19', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '57', merchant: 'Gym', amount: 2000, date: '2025-10-20', driver: 'Routine Necessity', category: 'Health', channel: 'UPI', type: 'debit' },
  { id: '58', merchant: 'Restaurant - Limetree', amount: 3500, date: '2025-10-20', driver: 'Impulse Buy', category: 'Food', channel: 'Card', type: 'debit' },
  { id: '59', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-21', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '60', merchant: 'Health and Supplement - Protein', amount: 2500, date: '2025-10-21', driver: 'Routine Necessity', category: 'Health', channel: 'Card', type: 'debit' },
  { id: '61', merchant: 'Milk - Nandini Parlor', amount: 84, date: '2025-10-22', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '62', merchant: 'Milk - Nandini Parlor', amount: 84, date: '2025-10-23', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '63', merchant: 'Vegetables - Cute Cucumber', amount: 55, date: '2025-10-23', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '64', merchant: 'Grocerry - Instamart', amount: 560, date: '2025-10-23', driver: 'Routine Necessity', category: 'Groceries', channel: 'Card', type: 'debit' },
  { id: '65', merchant: 'Petrol - BP', amount: 900, date: '2025-10-24', driver: 'Routine Necessity', category: 'Travel', channel: 'Card', type: 'debit' },
  { id: '66', merchant: 'Milk - Nandini Parlor', amount: 84, date: '2025-10-24', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '67', merchant: 'Bill - Gas', amount: 600, date: '2025-10-24', driver: 'Routine Necessity', category: 'Utilities', channel: 'UPI', type: 'debit' },
  { id: '68', merchant: 'Milk - Nandini Parlor', amount: 84, date: '2025-10-25', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '69', merchant: 'Milk - Nandini Parlor', amount: 56, date: '2025-10-28', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '70', merchant: 'Vegetables - Cute Cucumber', amount: 112, date: '2025-10-29', driver: 'Routine Necessity', category: 'Groceries', channel: 'UPI', type: 'debit' },
  { id: '71', merchant: 'Milk - Nandini Parlor', amount: 280, date: '2025-10-29', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '72', merchant: 'Milk - Nandini Parlor', amount: 28, date: '2025-10-30', driver: 'Routine Necessity', category: 'Dairy', channel: 'UPI', type: 'debit' },
  { id: '73', merchant: 'Bill - Airtel Telecom', amount: 222, date: '2025-10-30', driver: 'Routine Necessity', category: 'Utilities', channel: 'UPI', type: 'debit' },
  { id: '74', merchant: 'Salary', amount: 135000, date: '2025-10-31', driver: 'Routine Necessity', category: 'Income', channel: 'NEFT', type: 'credit' },
  { id: '75', merchant: 'Rent - 2 BHK', amount: 25000, date: '2025-10-31', driver: 'Routine Necessity', category: 'Fixed Obligations', channel: 'UPI', type: 'debit' },
  { id: '76', merchant: 'Bill - Card', amount: 109467, date: '2025-10-31', driver: 'Routine Necessity', category: 'Debt', channel: 'UPI', type: 'debit' }
];

export interface PredictionEvent {
  horizon: 'long' | 'near';
  label: string;
  amount: number;
  date: string;
  copy: string;
  icon: string;
  isAnnual?: boolean;
}

export const getPredictiveTimelineData = (): PredictionEvent[] => {
  // Implementing Annual Cycle Logic (Benchmarks from Oct 2025 projected to Oct 2026)
  return [
    {
      horizon: 'long',
      label: 'Annual Travel Anchor',
      amount: 13300,
      date: 'October 2026',
      copy: "Your travel patterns are cyclical. Based on this year's October getaway, we project your next major wanderlust spike in October 2026. Start a 12-month 'Holiday SIP' of ₹2,000/month to fund it effortlessly.",
      icon: "✈️",
      isAnnual: true
    },
    {
      horizon: 'long',
      label: 'The Invisible Debt',
      amount: 7200,
      date: '16-17 October 2026',
      copy: "These aren't surprises; they are anniversaries. Your Vehicle Service and LIC premiums are due again in October 2026. We've marked this on your long-term horizon.",
      icon: "🛡️",
      isAnnual: true
    }
  ];
};

export const getHiddenPatternsData = (): HiddenPattern[] => {
  return [
    {
      id: 'convenience-tax',
      title: 'The Convenience Tax',
      tag: 'Time vs. Money Valuation',
      insight: "You usually exhibit high discipline with local vendors. However, your 'Instamart' spikes correlate with mid-week dates, suggesting Cognitive Depletion. You are buying time, not just groceries, when your energy is low.",
      metrics: [
        { label: 'Local (UPI)', value: '₹412 (Avg)' },
        { label: 'Platform (Card)', value: '₹3,550 (Avg)' }
      ],
      icon: '🏪',
      color: '#34d399'
    },
    {
      id: 'diderot-effect',
      title: 'The Diderot Effect',
      tag: 'The Upgrade Spiral',
      insight: "We detected a Diderot Spiral. One high-quality upgrade (likely the decision to buy the phone or shoes) triggered a chain reaction of complementary purchases. You weren't just buying items; you were upgrading your identity.",
      metrics: [
        { label: 'Core Item', value: 'Croma Mobile' },
        { label: 'Chain Size', value: '4 Transactions' }
      ],
      icon: '🌀',
      color: '#f472b6'
    },
    {
      id: 'frictionless-slide',
      title: 'The Frictionless Slide',
      tag: 'Digital Payment Psychology',
      insight: "The Pain of Paying is absent in your daily life. Your high UPI frequency creates a 'Cashless Illusion,' making the monthly credit card bill feel like a sudden shock rather than an accumulation of choices.",
      metrics: [
        { label: 'Daily UPI', value: '38/Month' },
        { label: 'Pain Point', value: '₹1.09L Bill' }
      ],
      icon: '🌊',
      color: '#60a5fa'
    }
  ];
};

export const getEmotionalTriggerData = (): EmotionalTrigger[] => {
  return [
    {
      label: "Dopamine",
      driver: "Reward Seeking",
      intensity: 80,
      frequency: 80,
      totalAmount: 73200, 
      color: "#ef4444",
      icon: "⚡",
      items: ["Croma Mobile", "Asics Shoes", "USPA Clothing"]
    },
    {
      label: "Comfort",
      driver: "Stress Relief",
      intensity: 20,
      frequency: 80,
      totalAmount: 1332, 
      color: "#f59e0b",
      icon: "🍕",
      items: ["Mojo Pizza", "Ananda Sweets", "Amul"]
    },
    {
      label: "Health",
      driver: "Bio-Security",
      intensity: 45,
      frequency: 20,
      totalAmount: 4985, 
      color: "#3b82f6",
      icon: "🛡️",
      items: ["Gym", "Apollo Medicine"]
    },
    {
      label: "Wealth",
      driver: "Asset Building",
      intensity: 80,
      frequency: 20,
      totalAmount: 6000, 
      color: "#10b981",
      icon: "📈",
      items: ["NIPPON SIP", "LIC Insurance"]
    }
  ];
};

export interface WealthProfile {
  user_archetype: string;
  psychological_score: string;
  key_insights: {
    title: string;
    description: string;
    icon: string;
  }[];
  nudge: string;
}

export interface PositiveInsight {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface SpendingCategoryData {
  label: string;
  value: number;
  color: string;
  count: number;
}

export const analyzeBehavior = (transactions: Transaction[]): PsychologyInsight[] => {
  const drivers: SpendingDriver[] = ['Impulse Buy', 'Social Validation', 'Routine Necessity', 'Dopamine Seek'];
  const expenses = transactions.filter(t => t.category !== 'Income');
  const totalSpentAll = expenses.reduce((acc, t) => acc + t.amount, 0);

  return drivers.map(driver => {
    const relevant = expenses.filter(t => t.driver === driver);
    const totalSpent = relevant.reduce((acc, t) => acc + t.amount, 0);
    const score = totalSpentAll > 0 ? (totalSpent / totalSpentAll) * 100 : 0;

    let description = "";
    switch (driver) {
      case 'Impulse Buy': description = "Spontaneous purchases often triggered by discounts."; break;
      case 'Social Validation': description = "Spending to maintain social status or peer expectations."; break;
      case 'Routine Necessity': description = "Core spending required for survival and stability."; break;
      case 'Dopamine Seek': description = "Short-term pleasure-seeking rewards."; break;
    }

    return {
      driver,
      score,
      description,
      count: relevant.length,
      totalSpent
    };
  });
};

export const getSpendingAnalysisData = (): { categories: SpendingCategoryData[], totalAnalyzed: number } => {
  const totalAnalyzed = 156790;
  const categories: SpendingCategoryData[] = [
    { label: 'Lifestyle & Tech', value: Math.round(totalAnalyzed * 0.48), count: 12, color: '#D4AF37' },
    { label: 'Fixed Obligations', value: Math.round(totalAnalyzed * 0.155), count: 3, color: '#006D5B' },
    { label: 'Daily Sustenance', value: Math.round(totalAnalyzed * 0.04), count: 41, color: '#4A5568' },
    { label: 'Travel', value: Math.round(totalAnalyzed * 0.26), count: 3, color: '#483D8B' },
    { label: 'Utilities', value: Math.round(totalAnalyzed * 0.065), count: 6, color: '#718096' },
  ];
  return { categories, totalAnalyzed };
};

export const generateBehavioralWealthProfile = (transactions: typeof mockTransactions): WealthProfile => {
  const expenses = transactions.filter(t => (t as any).type === 'debit' && t.category !== 'Income');
  const upiSmall = expenses.filter(t => t.channel === 'UPI' && t.amount < 500);
  const totalUpiSmall = upiSmall.reduce((acc, t) => acc + t.amount, 0);
  const salary = transactions.find(t => t.merchant === 'Salary')?.amount || 0;
  const cardBill = expenses.find(t => t.merchant === 'Bill - Card')?.amount || 0;

  return {
    "user_archetype": "The High-Velocity Optimist",
    "psychological_score": "72/100 (High Discipline in Rituals, Low Control in Luxuries)",
    "key_insights": [
      {
        "title": "The Frictionless Leak",
        "description": `You made ${upiSmall.length} UPI transactions under ₹500. While convenient, this frictionless spending leaked ₹${totalUpiSmall.toLocaleString()} from your primary account.`,
        "icon": "water_drop"
      },
      {
        "title": "The Upgrade Spiral",
        "description": "Your 'Croma' and 'Flight' purchases suggest a 'Treat Yourself' mentality that disconnects from your daily rituals.",
        "icon": "rocket_launch"
      },
      {
        "title": "The Pass-Through Phenomenon",
        "description": `Your ₹${salary.toLocaleString()} salary acts as a mere courier for a ₹${cardBill.toLocaleString()} credit bill. You are operating on 'Cashflow Zero'.`,
        "icon": "sync_alt"
      }
    ],
    "nudge": "Try switching your 'Nandini Parlor' payments to a prepaid wallet to re-introduce a 'spending limit' friction."
  };
};

export const getPositiveInsights = (): PositiveInsight[] => {
  return [
    {
      title: "The Health Ritualist",
      description: "Your spending isn't just maintenance; it's discipline. You prioritize fresh, daily nutrition over bulk-buying processed food. This consistency is your hidden asset.",
      icon: "🍏",
      color: "emerald"
    },
    {
      title: "Quality Over Quantity",
      description: "You don't spend often, but when you do, you commit. The data shows a 'Buy Nice, Buy Once' mentality. You prefer high-utility upgrades (Tech, Fitness) over clutter.",
      icon: "💎",
      color: "blue"
    },
    {
      title: "The Closer",
      description: "True wealth is solvency. You cleared 80% of your inflow immediately to erase debt. You value 'Peace of Mind' significantly higher than 'Cash in Hand'.",
      icon: "🛡️",
      color: "indigo"
    }
  ];
};

export const getControlScore = (insights: PsychologyInsight[]): number => {
  const impulseImpact = insights.find(i => i.driver === 'Impulse Buy')?.score || 0;
  const validationImpact = insights.find(i => i.driver === 'Social Validation')?.score || 0;
  return Math.max(0, 100 - (impulseImpact * 1.5 + validationImpact * 0.8));
};
