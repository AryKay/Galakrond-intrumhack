// Bank: name, some session id/auth token
// Account: name, details, balance, lookup(bank)
// Transaction: from, to, date, amount, message, (category), isPaid, lookup(account)
// Goal: name, category, total amount, amount allocated, lookup(account)
// Recurring expenses: lookup(account), lookup(transaction), name, date period (monthly, quarterly, yearly)

export const TransactionsMock = [
  {
    id: "OP_1-Transaction_1",
    accountId: "OP_1",
    date: 1528156800,
    to: "Spotify",
    ammount: 15.99
  },
  {
    id: "OP_1-Transaction_2",
    accountId: "OP_1",
    date: 1528156800,
    to: "Blizzard Enterteiment",
    ammount: 15.99
  },
  {
    id: "OP_1-Transaction_3",
    accountId: "OP_1",
    date: 1528156800,
    to: "Audible",
    ammount: 15.99
  },
  {
    id: "OP_1-Transaction_4",
    accountId: "OP_1",
    date: 1526774400,
    to: "HSL",
    ammount: 54.7
  },
  {
    id: "OP_1-Transaction_5",
    accountId: "OP_1",
    date: 1528156800,
    to: "Elisa",
    ammount: 29.8
  }
];
