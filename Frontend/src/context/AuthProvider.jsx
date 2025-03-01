import React, { createContext, useContext , useState } from 'react'


export const AuthContext = createContext()

export default function AuthProvider({children}) {
   const intialAuthUser = localStorage.getItem("User");
   const [authUser , setauthUser] = useState(
    intialAuthUser? JSON.parse(intialAuthUser): undefined
   )
   return(
    <AuthContext.Provider value = {[authUser , setauthUser]}>
        {children}
    </AuthContext.Provider>
   )
   
}

export const useAuth = ()=>useContext(AuthContext)



