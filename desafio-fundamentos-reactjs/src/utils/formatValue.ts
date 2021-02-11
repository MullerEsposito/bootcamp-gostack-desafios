const formatValue = (value: number): string =>
  Intl.NumberFormat('PT-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
