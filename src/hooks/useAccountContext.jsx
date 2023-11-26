import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "src/contexts/AccountContext"
import { AuthContext } from "src/contexts/AuthContext"
import { v4 as uuid } from 'uuid'

export function useAccountContext() {

    const { accounts, setAccounts } = useContext(AccountContext)
    const submitSignIn = useContext(AuthContext)
    const [ userPassword, setUserPassword ] = useState('')

    const navigate = useNavigate()

    const isValidUsername = value => {
        const findedAccount = accounts.some(account => value === account.username)
        return findedAccount
    }

    const isValidEmail = value => {
        const findedAccount = accounts.some(account => value === account.email)
        return findedAccount
    }

    const showPassword = value => {
        const findedAccount = accounts.find(account => value.email === account.email)
        setUserPassword(findedAccount.password)
    }

    const createAccount = data => {
        if(!isValidUsername(data.username)) setAccounts([...accounts, data])
    }
    
    const submitGenerateAccount = data => {
        const infoAccount = {
            id: uuid(),
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            password: data.password
        }
        createAccount(infoAccount)
        navigate('/login')
    } 

    return {accounts, userPassword, isValidUsername, isValidEmail, showPassword, createAccount, submitGenerateAccount, submitSignIn}
}