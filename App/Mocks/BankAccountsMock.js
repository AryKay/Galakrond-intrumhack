// Bank: name, some session id/auth token
// Account: name, details, balance, lookup(bank)
// Transaction: from, to, date, amount, message, (category), isPaid, lookup(account)
// Goal: name, category, total amount, amount allocated, lookup(account)
// Recurring expenses: lookup(account), lookup(transaction), name, date period (monthly, quarterly, yearly)

export const BankAccountsMock = [
  {
    id: "1",
    name: "OP",
    accounts: [
      {
        id: "OP_1",
        name: "Wallet",
        balance: 3000.45,
        details: ""
      },
      {
        id: "OP_2",
        name: "Savings",
        balance: 2200.0,
        details: ""
      }
    ]
  },
  {
    id: "2",
    name: "Nordea",
    accounts: [
      {
        id: "Nordea_1",
        name: "Traveling",
        balance: 800.0,
        details: ""
      }
    ]
  }
];
