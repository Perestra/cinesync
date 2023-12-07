import React from 'react'
import styles from './Login.module.scss'

import Header from 'src/components/Header/Header'
import InputForm from 'src/components/InputForm/InputForm'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Button from 'src/components/Button/Button'
import Text from 'src/components/Text/Text'

import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { TbAlertCircleFilled } from 'react-icons/tb'
import { useAuthContext } from 'src/hooks/useAuthContext'

const Login = () => {

    const { submitSignIn } = useAuthContext()
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors }, } = useForm()

    return (
    <div className={ styles.login }>
        <Header display='nonVisible' content='center'/>
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
                        // validate={ () => submitSignIn }
                        icon={errors?.username && <TbAlertCircleFilled className={ styles.login__iconError } />}
                        errorText= { errors?.username?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                        // errorText= { errors?.username?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' />: errors?.username?.type === 'validate'? <Text className='error' text='Usuário ou senha inválido!' />: "" }
                    />
                    <InputForm 
                        name='password'
                        label='Senha'
                        sideLabel={ <NavLink className={styles.login__sideLabel} to='/esqueciminhasenha'>Esqueci minha senha</NavLink>  }
                        type='password'
                        placeholder='Digite sua senha'
                        typeClassName='form__input'
                        styleClassName={errors?.password && "form__inputError"}
                        register={register}
                        required
                        // validate={ () => submitSignIn }
                        icon={errors?.password && <TbAlertCircleFilled className={ styles.login__iconError } />}
                        errorText= { errors?.password?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                        // errorText= { errors?.password?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' />: errors?.password?.type === 'validate'? <Text className='error' text='Usuário ou senha inválido!' />: "" }
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