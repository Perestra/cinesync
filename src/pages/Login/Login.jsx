import React from 'react'
import styles from './Login.module.scss'

import Header from 'src/components/Header/Header'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Button from 'src/components/Button/Button'
import Text from 'src/components/Text/Text'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className={ styles.login }>
        <Header />
        <main className={ styles.login__main }>
            <section className={ styles.login__section }>
                <Subtitle text='Login'/>   
                <form className={ styles.login__form }>
                    <div className={ styles.login__field}>
                        <label htmlFor="username"className={ styles.login__label } >Usuário</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            placeholder='Digite seu usuário'
                            className={ styles.login__input }
                        />    
                    </div>
                    <div className={ styles.login__field }>
                        <div className={ styles.login__password }>
                            <label htmlFor="password"className={ styles.login__label } >Senha</label>    
                            <NavLink to='/'>Esqueci minha senha</NavLink> 
                        </div>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='Digite sua senha'
                            className={ styles.login__input }
                        />    
                    </div>
                    <Button className={ styles.login__btnSubmit } type='submit' title='Entrar' onClick />
                </form>     
                <div className={ styles.login__createAccount }>
                    <Text text='É novo por aqui?'/>
                    <Button className={ styles.login__btnCreateAccount } type='submit' title='Criar conta'/>
                </div>
            </section> 
        </main>
    </div>
  )
}

export default Login