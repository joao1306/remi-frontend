import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

function AuthProvider({children}) {


    const[auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;