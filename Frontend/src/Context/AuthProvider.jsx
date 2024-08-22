import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({children}) { //chidren means app.jsx navbaar and all other
    const initialAuthUser = localStorage.getItem("USers");
    const [authUser,setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) : undefined
    );
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext); //this context API