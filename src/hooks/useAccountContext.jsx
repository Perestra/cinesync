import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "src/contexts/AccountContext"
import { v4 as uuid } from 'uuid'

export function useAccountContext() {

    const context = useContext(AccountContext)
    const { accounts, setAccounts } = useContext(AccountContext)

    const [ userPassword, setUserPassword ] = useState('')

    const navigate = useNavigate()

    if(context === undefined) throw new Error('Não está dentro do contexto')

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
            navigate(`/inicio/${findedAccount.id}`)
        } 
        return findedAccount
    } 


    return {context, userPassword, isValidUsername, isValidEmail, showPassword, createAccount, submitGenerateAccount, submitLoginUser}
}