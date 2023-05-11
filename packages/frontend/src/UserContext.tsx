import React, { createContext, useContext, useState } from "react";

interface USER{
     fullName: string,
     email: string,
     walletAddress: string,
     avatar: string
}

export type USERContextType = {
    user?:USER,
    updateUser: () => void
}

//initialized as null
const UserContext = createContext<USERContextType>({
    user:undefined,
    updateUser: () => {}
});

export const UserProvider = ({children}:any) => {
    const [user, setUser] =  useState<USER| undefined>(undefined)

    const updateUser = () =>{
       //retrieve user details from db/local storage
       let user = {
        fullName: "test",
        email: "email",
        walletAddress: "wallet Address",
        avatar: 'avatar'
      }
        setUser({...user})
    }

    return (
    <UserContext.Provider value={{user,updateUser}}>
      {children}
    </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext)

