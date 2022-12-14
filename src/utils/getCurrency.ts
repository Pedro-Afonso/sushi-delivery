export const getCurrency = (amount: number) => {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  return currency;
};
