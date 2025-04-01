import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.jsx';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage()
        const storedData = getLocalStorage() || {};
        const { employees = null} = storedData;
        setUserData(employees);
    }, []);

    return (
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;