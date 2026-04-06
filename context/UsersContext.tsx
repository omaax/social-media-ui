"use client"

import { User, UserContextType } from "@/types"
import { createContext, ReactNode, useState } from "react"

export const UsersContext = createContext<UserContextType | null>(null)

type Props = {
    children: ReactNode
}

const UsersProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (email: string, password: string) => {
        if (email === "user@user.com" && password === "user") {
            setUser({ email })
            return true
        }
        return false
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <UsersContext.Provider value={{ user, login, logout }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider