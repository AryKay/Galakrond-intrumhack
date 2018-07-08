// Bank: name, some session id/auth token
// Account: name, details, balance, lookup(bank)
// Transaction: from, to, date, amount, message, (category), isPaid, lookup(account)
// Goal: name, category, total amount, amount allocated, lookup(account)
// Recurring expenses: lookup(account), lookup(transaction), name, date period (monthly, quarterly, yearly)

export const RecurringExpensesMock = [
  {
    id: "OP_1-RE_1",
    accountId: "OP_1",
    transactionId: "OP_1-Transaction_1",
    name: "Spotify Family Subscription",
    frequency: "monthly"
  },
  {
    id: "OP_1-RE_2",
    accountId: "OP_1",
    transactionId: "OP_1-Transaction_2",
    name: "World of Warcraft Subscription",
    frequency: "monthly"
  },
  {
    id: "OP_1-RE_3",
    accountId: "OP_1",
    transactionId: "OP_1-Transaction_3",
    name: "Audible Subscription",
    frequency: "monthly"
  },
  {
    id: "OP_1-RE_4",
    accountId: "OP_1",
    transactionId: "OP_1-Transaction_4",
    name: "Transportation",
    frequency: "monthly"
  },
  {
    id: "OP_1-RE_5",
    accountId: "OP_1",
    transactionId: "OP_1-Transaction_5",
    name: "Phone & Internet",
    frequency: "monthly"
  }
];
