import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import styles from './styles.module.css';

const AnimatedList = () => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, setItems] = useState<string[]>([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: 'white', // Initial color is white
    },
    enter: [
      { opacity: 1, height: 40, innerHeight: 40 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#fb923c' }, // Orange-400
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#fb923c' }, // Keep orange-400 for when leaving
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#fb923c' }, // Update color to orange-400
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(['Radu', 'Constanitin', 'Simuleac']), 2000));
    ref.current.push(setTimeout(() => setItems(['Radu', 'Simuleac']), 5000));
    ref.current.push(setTimeout(() => setItems(['Radu', 'Constanitin', 'Simuleac']), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className={styles.container}>
      <div className={styles.main} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65px' }}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={{
              ...rest,
              fontSize: '1.5em',
              textTransform: 'uppercase',
              fontWeight: '700',
              padding: '2',
              display: 'block',
              textAlign: 'center',
              whiteSpace: 'normal',
              margin: '0',
            }}
            onClick={reset}
          >
            <animated.div
              style={{
                overflow: 'hidden',
                height: innerHeight,
                display: 'block',
                margin: '0',
                padding: '0',
              }}
            >
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedList;
