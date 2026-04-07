import { createContext, useContext, useState, useRef } from 'react';

const ShowBadgeContext = createContext(null);

export const ShowBadgeProvider = ({ children }) => {
    const [isShowBadge, setIsShowBadge] = useState(false);
    const [badgeType, setBadgeType] = useState(null);
    const [badgeMsg, setBadgeMsg] = useState(null);
    const timerRef = useRef(null);

    const showBadge = () => {
        // Clear any existing timer 
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        // Set badge to visible
        setIsShowBadge(true);

        // Schedule hide badge
        timerRef.current = setTimeout(() => {
            setIsShowBadge(false);
            timerRef.current = null;
        }, 3660);
    };

    return (
        <ShowBadgeContext.Provider value={{ isShowBadge, showBadge, badgeType, setBadgeType, badgeMsg, setBadgeMsg }}>
            {children}
        </ShowBadgeContext.Provider>
    );
};

export const useShowBadge = () => {
    const context = useContext(ShowBadgeContext);

    if (!context) throw new Error('useShowBadge must be used inside ShowBadgeProvider.');

    return context;
};
