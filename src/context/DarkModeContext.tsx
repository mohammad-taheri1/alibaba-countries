import { createContext, ReactNode, useState } from "react";

interface IAuthContext {
   isDarkMode: boolean;
   toggleDarkMode: () => void;
}

export const AuthContext = createContext<IAuthContext>({
   isDarkMode: false,
   toggleDarkMode: () => {},
});

interface IProps {
   children: ReactNode;
}

export const AuthContextProvider = ({ children }: IProps) => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setIsDarkMode((prev) => !prev);
   };

   return <AuthContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</AuthContext.Provider>;
};
