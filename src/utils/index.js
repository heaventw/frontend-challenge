export function getCurrency(currency) {
  const currencies = {
    DKK: 'kr',
    EUR: '€',
    GBP: '£',
    USD: '$',
  };
  return currencies[currency];
}

export function fontIcon() {
  const iconType = [
    {
      type: 'team',
      value: 'users',
    },
    {
      type: 'category',
      value: 'utensils',
    },
    {
      type: 'vat',
      value: 'calculator',
    },
    {
      type: 'tag',
      value: 'tag',
    },
    {
      type: 'comment',
      value: 'comment-alt',
    },
  ];
  return iconType.find(o => o.type === this.type).value;
}
