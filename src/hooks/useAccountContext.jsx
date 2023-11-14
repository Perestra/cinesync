import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "src/contexts/AccountContext"
import { v4 as uuid } from 'uuid'

export function useAccountContext() {

    const context = useContext(AccountContext)
    const { accounts, setAccounts } = useContext(AccountContext)
    const navigate = useNavigate()

    if(context === undefined) throw new Error('Não está dentro do contexto')

    const isValidUsername = value => {
        const findedUsername = accounts.find(account => value === account.username)
        return findedUsername
    }

    const isValidEmail = value => {
        const findedEmail = accounts.find(account => value === account.email)
        return findedEmail
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
            logged: false
        }
        createAccount(infoAccount)
        navigate('/login')
    } 

    const submitLoginUser =( data ) => {
        const findedAccount = accounts.find(account => data.username === account.username && data.password === account.password)
        if(findedAccount) {
            // findedAccount.logged = true
            navigate('/home')
        } 
        return findedAccount
    } 


    return {context, isValidUsername, isValidEmail, createAccount, submitGenerateAccount, submitLoginUser}
}