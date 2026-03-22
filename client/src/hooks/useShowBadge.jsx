import { createContext, useContext, useState, useRef } from 'react';

const ShowBadgeContext = createContext(null);

export const ShowBadgeProvider = ({ children }) => {
    const [isShowBadge, setIsShowBadge] = useState(false);
    const timerRef = useRef(null);

    const showBadge = () => {
        setIsShowBadge(true);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            setIsShowBadge(false);
        }

        timerRef.current = setTimeout(() => {
            setIsShowBadge(false);
            timerRef.current = null;
        }, 3660);
    };

    return <ShowBadgeContext.Provider value={{ isShowBadge, showBadge }}>{children}</ShowBadgeContext.Provider>;
};

export const useShowBadge = () => {
    const context = useContext(ShowBadgeContext);

    if (!context) throw new Error('useShowBadge must be used inside ShowBadgeProvider.');

    return context;
};
