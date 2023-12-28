import React from 'react'
import styles from './ForgotPassword.module.scss'

import InputForm from 'src/components/InputForm/InputForm'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Header from 'src/components/Header/Header'
import Button from 'src/components/Button/Button'
import Text from 'src/components/Text/Text'

import { useAccountContext } from 'src/hooks/useAccountContext'
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const ForgotPassword = () => {

    const { userPassword, isValidEmail, showPassword } = useAccountContext()
    const { register, handleSubmit, formState:{ errors }, } = useForm()
    const navigate = useNavigate()

  return (
    <div className={ styles.forgotPassword }>
        <Header display='nonVisible' content='center'/>
        <main className={ styles.forgotPassword__main }>
            <div className={ styles.forgotPassword__container }>
                <Subtitle text='Esqueci minha senha' color='orange' />
                <section className={ styles.forgotPassword__inputEmail }>
                    <form className={ styles.forgotPassword__form } onSubmit={ handleSubmit(showPassword) } >
                        <InputForm 
                            name='email'
                            label='E-mail'
                            type='email'
                            placeholder='Digite seu e-mail'
                            typeClassName='form__input'
                            styleClassName={errors?.email && "form__inputError"}
                            register={register}
                            required
                            validate={value => isValidEmail(value) }
                            iconError={errors?.email && <IoAlertCircleOutline className={ styles.forgotPassword__iconError } />}
                            errorText= { errors?.email?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' /> : errors?.email?.type === 'validate'? <Text className='error' text='Não existe uma conta com esse e-mail!' /> : "" }
                        />
                        <Button btnClassName={ styles.forgotPassword__btnSubmit } txtClassName='white' type='submit' title='Continuar'/>    
                    </form>
                </section>
                <section className={ styles.forgotPassword__passwordData }>
                    <Text className='white' text='Senha:'/>
                    <div className={ styles.forgotPassword__password }>
                        <Text className='black' text={ userPassword }/>
                    </div>
                </section>
                <Button btnClassName={ styles.forgotPassword__btnLogin } txtClassName='black' title='Ir para o login' onClick={ () => navigate('/login') }/>    
            </div>
        </main>
    </div>
  )
}

export default ForgotPassword