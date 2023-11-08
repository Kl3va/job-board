export const filterToggleVariant = () => {
  return {
    initial: {
      height: '0px',
    },
    hidden: {
      height: '0px',
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.3,
      },
    },
    show: {
      height: 'auto',

      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.3,
      },
    },
  };
};
