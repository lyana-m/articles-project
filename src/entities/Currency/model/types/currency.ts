export enum Currency {
  RUB = 'RUB',
  EUR = 'EUR',
  USD = 'USD',
}

export const currencyOptions = Object.values(Currency).map((value) => ({
  value,
  label: value,
}));
