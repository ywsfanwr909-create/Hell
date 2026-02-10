import { createContext, useState } from "react";

export const AuthContext=createContext()


export default function AuthProvider({children}) {
    

    const [userToken, setuserToken] = useState(null) ;

    function saveUserToken(token) {
        setuserToken(token)
    }

    return ( 
        <AuthContext.Provider value={{userToken ,saveUserToken}}>
            {children}
        </AuthContext.Provider>
    )
}
