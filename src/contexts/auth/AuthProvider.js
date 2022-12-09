import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;