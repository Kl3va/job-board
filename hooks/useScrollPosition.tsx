import React, { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    yAxis: 0,
    xAxis: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const yAxisPosition = window.scrollY;
      const xAxisPosition = window.scrollX;
      setScrollPosition({
        yAxis: yAxisPosition,
        xAxis: xAxisPosition,
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollPosition };
};

export default useScrollPosition;
