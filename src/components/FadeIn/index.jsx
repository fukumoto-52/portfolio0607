import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const Container = motion(Slot);

const defaultCustom = {
  y: 100,　//デフォルトでは縦方向に100
  x: 0, //水平方向は0
  scale: 1,
  blur: 0,
  once: true,　//１回読み込んだら終わり
  amount: 0.2,　//画面の20%で
  duration: 0.8, //アニメーションの長さ
  delay: 0, //遅れて
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

const FadeIn = React.forwardRef(({ children, custom }, forwardedRef) => (
  <Container {...config(custom)} ref={forwardedRef}>
    {React.Children.only(children)}
  </Container>
));

FadeIn.displayName = 'FadeIn';

export default FadeIn;