import { createContext, ReactNode, useState } from "react";
import { UserI } from "../interfaces/UserI";

export const UserContext = ({ children }: { children: ReactNode }) =>{
    const [user, setUser] = useState<UserI | undefined>(undefined);

    const UContext = createContext<{
        user: UserI | undefined;
        setUser: React.Dispatch<React.SetStateAction<UserI | undefined>>;
    }>({
        user: undefined,
        setUser: () => {},
    })
    return(
        <UContext.Provider value={{user, setUser}}>
            {children}
        </UContext.Provider>
    )
}

