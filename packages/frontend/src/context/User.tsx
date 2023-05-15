import React, { createContext, useContext, useState } from "react";

interface IUser{
     fullName: string,
     email: string,
     walletAddress: string,
     avatar: string
}

export type USERContextType = {
    user: IUser | Record<string, string>,
    updateUser: () => void
}

//initialized as empty
const UserContext = createContext<USERContextType>({
    user:{},
    updateUser: () => {}
});

export const UserProvider = ({children}:any) => {
    const [user, setUser] =  useState<IUser|Record<string, string>>({})

    const updateUser = () =>{
       //todo: retrieve user details from db/local storage
    }

    return (
    <UserContext.Provider value={{user,updateUser}}>
      {children}
    </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext)

