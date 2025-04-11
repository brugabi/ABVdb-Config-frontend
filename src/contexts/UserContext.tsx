import { createContext, useState, ReactNode } from "react";
import { UserI } from "../interfaces/UserI";

interface UserContextType {
  user: UserI | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserI | undefined>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserI | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
