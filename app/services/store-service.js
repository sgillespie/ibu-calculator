const defaultState = {
  targets: {
    gravity: 1.048,
    volume: 6.5,
  },

  hops: [
    {
      id: 0,
      type: 'Cascade',
      weight: 1,
      boilTime: 60,
    },
    {
      id: 1,
      type: 'Citra',
      weight: 1.5,
      boilTime: 10,
    },
  ],
};

export default () => defaultState;
