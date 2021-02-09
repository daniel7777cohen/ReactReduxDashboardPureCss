export const filterByFields = (filteredData, payload) => {
  const { transactionId, binNumber, min, max, decision, payment } = payload;
  let newFilteredData = filteredData.filter(
    (data) =>
      data.transactionId.includes(transactionId) &&
      data.binNumber.includes(binNumber) &&
      data.amount >= min
  );

  if (max > 0) {
    newFilteredData = newFilteredData.filter((data) => data.amount <= max);
  }

  if (decision !== "all") {
    newFilteredData = newFilteredData.filter(
      (data) => data.decision === decision
    );
  }

  if (payment !== "all") {
    newFilteredData = newFilteredData.filter(
      (data) => data.payment === payment
    );
  }

  return newFilteredData;
};
