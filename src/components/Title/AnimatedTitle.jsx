import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedTitle = () => {
  const containerText = useRef(null);
  const flag = useRef(false);
  const originalText = 'Article';
  const splitText = originalText.split('');

  useEffect(() => {
    if (flag.current === false) {
      flag.current = true;
      if (!containerText.current?.textContent) {
        const durations = [.2,.3,.4,.5,.6,.7,.8]; // Custom durations for each letter
        splitText.forEach((letter, index) => {
          const span = document.createElement('span');
          span.className = 'relative';
          span.textContent = letter;
          gsap.fromTo(
            span,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5, // Use the custom duration for each letter
              delay: durations[index]
            }
          );
					containerText.current?.appendChild(span);
        });
      }
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <h1 ref={containerText} className="text-screenX md:text-responsive leading-[1]"></h1>
    </div>
  );
};

export default AnimatedTitle;
