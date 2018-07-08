// Bank: name, some session id/auth token
// Account: name, details, balance, lookup(bank)
// Transaction: from, to, date, amount, message, (category), isPaid, lookup(account)
// Goal: name, category, total amount, amount allocated, lookup(account)
// Recurring expenses: lookup(account), lookup(transaction), name, date period (monthly, quarterly, yearly)

export const GoalsMock = [
  {
    id: "OP_2-Goal_1",
    accountId: "OP_2",
    name: "Motor Boat Split Sharing",
    category: "boats",
    totalAmount: 999,
    amountAllocated: 500
  },
  {
    id: "OP_2-Goal_2",
    accountId: "OP_2",
    name: "Macbook Pro",
    category: "tech",
    totalAmount: 999,
    amountAllocated: 500
  },
  {
    id: "OP_2-Goal_3",
    accountId: "OP_2",
    name: "Jedi Costume",
    category: "cloth",
    totalAmount: 999,
    amountAllocated: 200
  },
  {
    id: "Nordea_1-Goal_1",
    accountId: "Nordea_1",
    name: "Barcelona - Palma de Majorka Trip",
    category: "travel",
    totalAmount: 1500,
    amountAllocated: 700
  }
];
