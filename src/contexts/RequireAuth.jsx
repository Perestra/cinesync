import Login from "src/pages/Login/Login"
import { useAuthContext } from "src/hooks/useAuthContext"

export const RequireAuth = ({ children }) => {

    const { isUserAuth } = useAuthContext()

    if(!isUserAuth()) {
      return <Login />
    }

  return children
}
