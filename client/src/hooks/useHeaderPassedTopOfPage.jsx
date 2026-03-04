import { useState, useEffect, useRef } from 'react';

export const useHeaderPassedTopPage = (threshold = 0.3) => {
    const [headerPassedTopPage, setHeaderPassedTopPage] = useState(false);
    const pageMaker = useRef(null);
    const observerRoot = useRef(null);

    useEffect(() => {
        if (!pageMaker.current || !observerRoot.current) return;

        const observer = new IntersectionObserver(
            ([entries]) => {
                setHeaderPassedTopPage(!entries.isIntersecting);
            },
            {
                root: observerRoot.current,
                threshold,
            },
        );

        observer.observe(pageMaker.current);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return { headerPassedTopPage, pageMaker, observerRoot };
};
