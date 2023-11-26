import { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [ authUser, setAuthUser ] = useLocalStorage('Token', {})

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            { children }
        </AuthContext.Provider>
    )
}