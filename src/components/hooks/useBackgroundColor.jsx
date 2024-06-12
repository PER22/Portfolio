import { useEffect } from 'react';

const useBackgroundColor = (color) => {
    useEffect(() => {
        document.body.style.backgroundColor = color;
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [color]);
};

export default useBackgroundColor;