import { useState, useEffect, useRef, useContext, createContext } from 'react';

const OpenCloseModalContext = createContext(null);

export const OpenCloseModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(null);
    const modalBoxRef = useRef(null);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const resetModalState = () => setShowModal(null);

    useEffect(() => {
        const checkIfUsrClickOutsideModalBox = (e) => {
            if (modalBoxRef.current && !modalBoxRef.current.contains(e.target) && showModal !== null) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', checkIfUsrClickOutsideModalBox);

        return () => {
            document.removeEventListener('mousedown', checkIfUsrClickOutsideModalBox);
        };
    }, [showModal]);

    return (
        <OpenCloseModalContext.Provider value={{ showModal, modalBoxRef, openModal, closeModal, resetModalState }}>
            {children}
        </OpenCloseModalContext.Provider>
    );
};

export const useOpenCloseModal = () => {
    const context = useContext(OpenCloseModalContext);

    if (!context) {
        throw new Error('useOpenCloseModal must be used inside ThemeProvider');
    }

    return context;
};
