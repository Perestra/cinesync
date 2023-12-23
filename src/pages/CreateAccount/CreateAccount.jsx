import React, { useState } from 'react'
import styles from './CreateAccount.module.scss'

import Header from 'src/components/Header/Header'
import Subtitle from 'src/components/Subtitle/Subtitle'
import InputForm from 'src/components/InputForm/InputForm'
import CheckBoxForm from 'src/components/CheckBoxForm/CheckBoxForm'
import Button from 'src/components/Button/Button'
import Text from 'src/components/Text/Text'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useAccountContext } from 'src/hooks/useAccountContext'

const CreateAccount = () => {

    const [ passwordVisible, setPasswordVisible ] = useState(false)
    const [ passwordConfirmationVisible, setpasswordConfirmationVisible ] = useState(false)
    const { submitGenerateAccount, isValidUsername, isValidEmail } = useAccountContext()
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState:{ errors }, } = useForm()

    const watchPassword = watch("password")

  return (
    <div className={ styles.createAccount }>
        <Header display='nonVisible' content='center'/>
        <main className={ styles.createAccount__main }>
            <section className={ styles.createAccount__section }>
                <Subtitle text='Criar conta' color='orange'/>   
                <form className={ styles.createAccount__form } onSubmit={handleSubmit(submitGenerateAccount)}>
                    <InputForm 
                        name='fullname'
                        label='Nome completo'
                        type='text'
                        placeholder='Digite seu nome completo'
                        typeClassName='form__input'
                        styleClassName={errors?.fullname && "form__inputError"}
                        register={register}
                        required
                        iconError={errors?.fullname && <IoAlertCircleOutline className={ styles.createAccount__iconError } />}
                        errorText= { errors?.fullname?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                    />
                    <InputForm 
                        name='username'
                        label='Usuário'
                        type='text'
                        placeholder='Digite seu usuário'
                        typeClassName='form__input'
                        styleClassName={errors?.username && "form__inputError"}
                        register={register}
                        required
                        validate={value => !isValidUsername(value)}
                        iconError={errors?.username && <IoAlertCircleOutline className={ styles.createAccount__iconError } />}
                        errorText= { errors?.username?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' /> : errors?.username?.type === 'validate'? <Text className='error' text='Já existe uma conta com esse usuário!' /> : "" }
                    />
                    <InputForm 
                        name='email'
                        label='E-mail'
                        type='email'
                        placeholder='Digite seu e-mail'
                        typeClassName='form__input'
                        styleClassName={errors?.email && "form__inputError"}
                        register={register}
                        required
                        validate={value => !isValidEmail(value)}
                        iconError={errors?.email && <IoAlertCircleOutline className={ styles.createAccount__iconError } />}
                        errorText= { errors?.email?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' /> : errors?.email?.type === 'validate'? <Text className='error' text='Já existe uma conta com esse e-mail!' /> : "" }
                    />
                    <InputForm 
                        name='password'
                        label='Senha'
                        type={ passwordVisible? 'text': 'password' } 
                        placeholder='Digite sua senha'
                        typeClassName='form__input'
                        styleClassName={errors?.password && "form__inputError"}
                        register={register}
                        required
                        iconError={errors?.password && <IoAlertCircleOutline className={ styles.createAccount__iconError } />}
                        icon={
                            passwordVisible? 
                            <IoMdEye onClick={() => setPasswordVisible(!passwordVisible)} className={ styles.createAccount__icon }/>: 
                            <IoIosEyeOff onClick={() => setPasswordVisible(!passwordVisible)} className={ styles.createAccount__icon }/>
                        }
                        errorText= { errors?.password?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                    />
                    <InputForm 
                        name='passwordConfirmation'
                        label='Confirmar senha'
                        type={ passwordConfirmationVisible? 'text': 'password' }
                        placeholder='Digite sua senha novamente'
                        typeClassName='form__input'
                        styleClassName={errors?.passwordConfirmation && "form__inputError"}
                        register={register}
                        required
                        validate={(value) => value === watchPassword}
                        iconError={errors?.passwordConfirmation && <IoAlertCircleOutline className={ styles.createAccount__iconError } />}
                        icon={
                            passwordConfirmationVisible? 
                            <IoMdEye onClick={() => setpasswordConfirmationVisible(!passwordConfirmationVisible)} className={ styles.createAccount__icon }/>: 
                            <IoIosEyeOff onClick={() => setpasswordConfirmationVisible(!passwordConfirmationVisible)} className={ styles.createAccount__icon }/>
                        }
                        errorText= { errors?.passwordConfirmation?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' /> : errors?.passwordConfirmation?.type === 'validate'? <Text className='error' text='A confirmação de senha deve ser igual a senha!' /> : "" }
                    />
                    <CheckBoxForm 
                        name='acceptTerms'
                        label={["Você concorda com as ", <span key='1' className={ styles.createAccount__terms }>Condições de uso</span>, " e " ,<span key='2' className={ styles.createAccount__terms }>Notificações de privacidade</span>, " da CineSync."]}
                        register={register}
                        required
                        iconError={errors?.acceptTerms && <IoAlertCircleOutline className={ styles.createAccount__iconError } />}
                        errorText= { errors?.acceptTerms?.type === 'required' && <Text className='error' text='Você deve aceitar os termos de serviço!' /> }
                    />
                    <Button btnClassName={ styles.createAccount__btnSubmit } txtClassName='white' type='submit' title='Criar conta' /> 
                </form>   
                <div className={ styles.createAccount__login }>
                    <Text className='gray' text='Já possui uma conta?'/>
                    <Button btnClassName={ styles.createAccount__btnlogin } txtClassName='black' title='Ir para o login' onClick={ () => navigate('/login') }/>
                </div>
            </section> 
        </main>
    </div>
  )
}

export default CreateAccount