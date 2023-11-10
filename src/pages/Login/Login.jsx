import React from 'react'
import styles from './Login.module.scss'

import Header from 'src/components/Header/Header'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Button from 'src/components/Button/Button'
import Text from 'src/components/Text/Text'

import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors }, } = useForm()

    const onSubmit = data => {
        console.log(data)
    } 

  return (
    <div className={ styles.login }>
        <Header display='nonVisible' content='center'/>
        <main className={ styles.login__main }>
            <section className={ styles.login__section }>
                <Subtitle text='Login' color='orange'/>   
                <form className={ styles.login__form } onSubmit={handleSubmit(onSubmit)}>
                    <div className={ styles.login__field}>
                        <label htmlFor="username"className={ styles.login__label } >Usuário</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            placeholder='Digite seu usuário'
                            className={ `${styles.login__input} ${errors?.username && styles.login__inputError}` }
                            {...register("username", { required: true })}
                        />    
                        { errors?.username?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
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
                            className={ `${styles.login__input} ${errors?.username && styles.login__inputError}` }
                            {...register("password", { required: true })}
                        /> 
                        { errors?.password?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }   
                    </div>
                    <Button btnClassName={ styles.login__btnSubmit } txtClassName='white' type='submit' title='Entrar'/>
                </form>     
                <div className={ styles.login__createAccount }>
                    <Text className='gray' text='É novo por aqui?'/>
                    <Button btnClassName={ styles.login__btnCreateAccount } txtClassName='black' title='Criar conta' onClick={ () => navigate('/criarconta') }/>
                </div>
            </section> 
        </main>
    </div>
  )
}

export default Login