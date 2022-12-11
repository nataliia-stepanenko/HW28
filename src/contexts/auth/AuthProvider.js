import { useState } from 'react';

import AuthContext from './AuthContext';

import {login} from '../../api';

const AuthProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(() => {
        return !!localStorage.getItem('userInfo');
    });
    const [userInfo, setUserInfo] = useState(() => {
        const UserFromStorage = localStorage.getItem('userInfo');
        if (UserFromStorage){
            return JSON.parse(UserFromStorage);
        }
        return null;
    });

    const loginUser = async (credentials) => {
        const user = await login(credentials);
        setUserInfo(user);
        setLoggedIn(true);
        localStorage.setItem('userInfo', JSON.stringify(user));
    }

    const logoutUser = () => {
        setUserInfo(null);
        setLoggedIn(false);
        localStorage.removeItem('userInfo');
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, userInfo, loginUser, logoutUser}}>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;