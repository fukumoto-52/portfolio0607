import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const Container = motion(Slot);

const defaultCustom = {
  y: 0,
  x: 0, 
  scale: 1.6,
  blur: 0,
  once: true,
  amount: 0.2,
  duration: 1.2, 
  delay: 0,
};

const config = (custom) => {
  const { y, x, scale, blur, once, amount, duration, delay } = { ...defaultCustom, ...custom };

  return {
    initial: {
      opacity: 0,
      y,
      x,
      scale,
      filter: `blur(${blur}px)`,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
    viewport: {
      once,
      amount,
    },
    transition: {
      duration,
      delay,
    },
  };
};

const ZoomIn = React.forwardRef(({ children, custom }, forwardedRef) => (
  <Container {...config(custom)} ref={forwardedRef}>
    {React.Children.only(children)}
  </Container>
));

ZoomIn.displayName = 'ZoomIn';

export default ZoomIn;