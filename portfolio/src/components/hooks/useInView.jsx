import { useEffect } from 'react';

const useInView = (query) => {
  useEffect(() => {
    const isInView = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.bottom - rect.top;
      let visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      visibleHeight = Math.max(0, visibleHeight);
      return (visibleHeight / elementHeight) >= (1/3);
    };

    const checkPosition = () => {
      const elements = document.querySelectorAll(query);
      elements.forEach(element => {
        if (isInView(element)) {
          element.classList.add('in-view');
          element.classList.remove('out-view');
        } else {
          element.classList.remove('in-view');
          element.classList.add('out-view');
        }
      });
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition();

    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);
};

export default useInView;
