import React, { useState } from 'react'
import styles from './Login.module.scss'

import Header from 'src/components/Header/Header'
import InputForm from 'src/components/InputForm/InputForm'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Button from 'src/components/Button/Button'
import Text from 'src/components/Text/Text'

import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useAuthContext } from 'src/hooks/useAuthContext'

const Login = () => {

    const [ visibility, setVisibility ] = useState(false)
    const { submitSignIn } = useAuthContext()

    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors }, } = useForm()


    return (
    <div className={ styles.login }>
        <Header display='nonVisible' content='center' />
        <main className={ styles.login__main }>
            <section className={ styles.login__section }>
                <Subtitle text='Login' color='orange'/>   
                <form className={ styles.login__form } onSubmit={handleSubmit(submitSignIn)}> 
                    <InputForm 
                        name='username'
                        label='Usuário'
                        type='text'
                        placeholder='Digite seu usuário'
                        typeClassName='form__input'
                        styleClassName={errors?.username && "form__inputError"}
                        register={register}
                        required
                        // validate={ (value) => findAccount === value }
                        iconError={errors?.username && <IoAlertCircleOutline className={ styles.login__iconError } />}
                        errorText= { errors?.username?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                    />
                    <InputForm 
                        name='password'
                        label='Senha'
                        sideLabel={ <NavLink className={styles.login__sideLabel} to='/esqueciminhasenha'>Esqueci minha senha</NavLink>  }
                        type={ visibility? 'text': 'password' } 
                        placeholder='Digite sua senha'
                        typeClassName='form__input'
                        styleClassName={errors?.password && "form__inputError"}
                        register={register}
                        required
                        // validate={ () => findAccount === false }
                        icon={
                            visibility? 
                            <IoMdEye onClick={() => setVisibility(!visibility)} className={ styles.login__icon }/>: 
                            <IoIosEyeOff onClick={() => setVisibility(!visibility)} className={ styles.login__icon }/>
                        }
                        iconError={errors?.password && <IoAlertCircleOutline className={ styles.login__iconError } />}
                        errorText= { errors?.password?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                    />
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