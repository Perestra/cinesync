import { useContext } from "react"
import { useForm } from "react-hook-form"
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
    } 

    const submitLoginUser =( data ) => {
        const findedAccount = accounts.find(account => data.username === account.username && data.password === account.password)
        if(findedAccount) {
            findedAccount.logged = true
            navigate('/home')
        } 
        console.log(findedAccount)
        return findedAccount
    } 

    return {context, isValidUsername, createAccount, submitGenerateAccount, submitLoginUser}
}