import { createContext, useContext, useState, useEffect } from 'react';

const beUrl = import.meta.env.VITE_API_BASE_URL;

const AuthenticateContext = createContext(null);

const AuthenticateUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserInfo = async () => {
        fetch(`${beUrl}/user/authenticate/me`, {
            credentials: 'include', // makes BE send cookie with the res
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.user || null);
                setLoading(false);
            })
            .catch(() => {
                setUser(null);
                setLoading(false);
            });
            
        // setTimeout(() => {
        //     fetch(`${beUrl}/user/authenticate/me`, {
        //         credentials: 'include', // makes BE send cookie with the res
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             setUser(data.user || null);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setUser(null);
        //             setLoading(false);
        //         });
        // }, 1600);
    };

    // when web app start, connect to BE and check for "active session"
    useEffect(() => {
        fetchUserInfo();
    }, []);

    const logIn = async (userName, pwd) => {
        const res = await fetch(`${beUrl}/user/log-in`, {
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ userName, pwd }),
        });

        const data = await res.json();

        // if (!res.ok) throw new Error(data.msg);

        setUser(data.user);
        return data;
    };

    const logOut = async () => {
        const res = await fetch(`${beUrl}/user/log-out`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
        });

        const data = await res.json();

        // if (!res.ok) throw new Error(data.msg);

        setUser(null);
        return data;
    };

    return (
        <AuthenticateContext.Provider value={{ user, loading, logIn, logOut, fetchUserInfo }}>
            {children}
        </AuthenticateContext.Provider>
    );
};

const useAuthenticate = () => {
    const context = useContext(AuthenticateContext);

    if (!context) throw new Error('useAuthenticate must be used inside AuthenticateUserProvider');

    return context;
};

export { AuthenticateUserProvider, useAuthenticate };
