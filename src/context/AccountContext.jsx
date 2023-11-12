import { createContext } from "react"
import useLocalStorage from 'use-local-storage'

export const AccountContext = createContext()

export const AccountProvider = ({ children }) => {

  const [accounts, setAccounts] = useLocalStorage('Accounts', [])

  return (
    <AccountContext.Provider value={{ accounts, setAccounts }}>
      { children }
    </AccountContext.Provider>
  )
}
