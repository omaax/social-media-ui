"use client"

import { createContext, useState } from "react";
export const UserContext = createContext(null)

const UserProvider = ({children}) => {
   const [user, setUser] = useState({id: 1, email: "user@user.com", password: "user"})

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider