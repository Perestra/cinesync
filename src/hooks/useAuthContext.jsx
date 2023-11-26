import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AccountContext } from "src/contexts/AccountContext"
import { AuthContext } from "src/contexts/AuthContext"
import { v4 as uuid } from "uuid"


export function useAuthContext() {

    const { accounts } = useContext(AccountContext)
    const { authUser, setAuthUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const generateAuth = data => {
        const infoAccount = {
            id: data.id,
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            password: data.password,
            token: uuid()
        }
        setAuthUser(infoAccount)
    } 
  
    const submitSignIn = ( data ) => {
        const findedAccount = accounts.find(account => data.username === account.username && data.password === account.password)
        if(findedAccount) {
            generateAuth(findedAccount)
            navigate('/inicio')
        } 
    }

    const isUserAuth = () => {
        const findUserId = accounts.find( account => account.id === authUser?.id )
        if(findUserId) return true 
        return false
    }

    return { isUserAuth, submitSignIn }
}