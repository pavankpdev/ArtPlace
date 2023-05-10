import React, { createContext, useContext, useState } from "react";

interface USER{
     fullName: string,
     email: string,
     walletAddress: string,
     avatar: string
}

export type USERContextType = {
    user?:USER,
    updateUser: (user:USER) => void
}

//initialized as null
const UserContext = createContext<USERContextType>({
    user:undefined,
    updateUser: () => {}
});

export const UserProvider = ({children}:any) => {
    const [user, setUser] =  useState<USER>({
      fullName: "name",
      email: "email",
      walletAddress: "wallet Address",
      avatar: 'avatar'
    })

    const updateUser = (user:USER) =>{
        setUser({...user})
    }

    return (
    <UserContext.Provider value={{user,updateUser}}>
      {children}
    </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext)

