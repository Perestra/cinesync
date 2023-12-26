import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "src/contexts/AccountContext"
import { v4 as uuid } from 'uuid'
import { useAuthContext } from "./useAuthContext"

export function useAccountContext() {

    const { accounts, setAccounts } = useContext(AccountContext)
    const { authUser, setAuthUser, submitSignIn } = useAuthContext()
    const [ userPassword, setUserPassword ] = useState('')

    const navigate = useNavigate()

    const isValidUsername = value => {
        const findedAccount = accounts?.some(account => value === account.username)
        return findedAccount
    }

    const isValidPassword = value => {
        if(value !== authUser.password) {return true}
        return false
    }

    const isValidEmail = value => {
        const findedAccount = accounts?.some(account => value === account.email)
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
            password: data.password,
            watchList: []
        }
        createAccount(infoAccount)
        navigate('/login')
    } 

    const ChangePassword = data => {
        const userLogged = accounts.find( user => authUser.id === user.id )
        const index = accounts.findIndex( user => authUser.id === user.id )

        const newPassword = data.passwordChange

        if(userLogged.password != newPassword) {
            const userAccounts = [...accounts]
            userAccounts[index].password = newPassword

            setAccounts( userAccounts )
            setAuthUser()
        } 
    }

    return {accounts, setAccounts, userPassword, isValidUsername, isValidPassword, isValidEmail, showPassword, createAccount, submitGenerateAccount, submitSignIn, ChangePassword}
}