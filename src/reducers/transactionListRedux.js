export const getAllTransactions = ({ transactions }) => {
  return transactions.sort(function (a, b) {
    let dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });
};
