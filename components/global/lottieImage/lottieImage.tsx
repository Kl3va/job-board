import { StaticImageData } from 'next/image';
import React from 'react';
import Lottie from 'react-lottie';

interface LottieImageTypes {
  animationData: StaticImageData;
}

const LottieImage = ({ animationData }: LottieImageTypes) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export default LottieImage;
