import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedTitle = () => {
  const containerText = useRef(null);
  const flag = useRef(false);
  const originalText = 'Article';
  const splitText = originalText.split('');
  const tl = gsap.timeline();

  useEffect(() => {
    if (flag.current === false) {
      flag.current = true;
      if (!containerText.current?.textContent) {
        const durations = [0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12,]; // Custom durations for each letter
        splitText.forEach((letter, index) => {
          const span = document.createElement('span');
          span.className = 'relative';
          span.textContent = letter;
          tl.delay(.5)
          tl.fromTo(
            span,
            { opacity: 0 },
            {
              opacity: 1,
              duration: durations[index], // Use the custom duration for each letter
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
