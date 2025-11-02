import { useState, useEffect } from 'react';

function getWindowWidth() {
    const { innerWidth: width } = typeof window !== 'undefined'
        ? window
        : { innerWidth: 0 };
    return width;
}

export function useWindowWidth() {
    const [width, setWidth] = useState(getWindowWidth());

    useEffect(() => {
        function handleResize() {
            setWidth(getWindowWidth());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}