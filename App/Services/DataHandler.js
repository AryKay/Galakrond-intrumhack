import { BankAccountsMock } from "../Mocks/BankAccountsMock";

export default {
  // Functions return fixtures
  getAccounts: () => {
    return BankAccountsMock.reduce((result, bank) => {
      const bankAccounts = bank.accounts.map(account => {
        const clone = { ...account };
        clone.bank = bank.name;
        return clone;
      });

      return result.concat(bankAccounts);
    }, []);
  }
};
