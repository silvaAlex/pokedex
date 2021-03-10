export const getColorTypePokemon = (value: string) => {
  const colors = [
    {
      name: 'normal',
      color: '#aa9',
    },
    {
      name: 'fire',
      color: '#f42',
    },
    {
      name: 'water',
      color: '#39f',
    },
    {
      name: 'electric',
      color: '#fc3',
    },
    {
      name: 'grass',
      color: '#7c5',
    },
    {
      name: 'ice',
      color: '#6cf',
    },
    {
      name: 'fighting',
      color: '#b54',
    },
    {
      name: 'poison',
      color: '#a59',
    },
    {
      name: 'ground',
      color: '#db5',
    },
    {
      name: 'flying',
      color: '#89f',
    },
    {
      name: 'psychic',
      color: '#f59',
    },
    {
      name: 'bug',
      color: '#ab2',
    },
    {
      name: 'rock',
      color: '#ba6',
    },
    {
      name: 'ghost',
      color: '#66b',
    },
    {
      name: 'dragon',
      color: '#76e',
    },
    {
      name: 'dark',
      color: '#754',
    },
    {
      name: 'steel',
      color: '#aab',
    },
    {
      name: 'fairy',
      color: '#e9e',
    },
  ];

  for (let item in colors) {
    if (colors[item].name === value) {
      return colors[item].color;
    }
  }
  return '#aa9';
};
