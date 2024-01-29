export const menuAnime = {
  initial: {
    x: "-100vw",
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
};
export const slideAnime = {
  initial: { x: -80 },

  slide: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),

  exit: (i: number) => ({
    x: -80,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const textSlideAnie = {
  initial: { y: -80 },
  animate: {
    y: 0,
  },
  exit: {
    y: -80,
  },
};

export const slideUp = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.87, 0, 0.13, 1] },
  },
};

export const slideDown = {
  initial: { y: -80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
  },
};
export const slideLeft = {
  initial: { x: 80, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
  },
};
export const slideRight = {
  initial: { x: -80, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
  },
};
export const scalUp = {
  initial: { y: -80, opacity: 0, scale: 0 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
  },
};
