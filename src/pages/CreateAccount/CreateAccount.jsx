import React from 'react'
import styles from './CreateAccount.module.scss'

import Header from 'src/components/Header/Header'
import Subtitle from 'src/components/Subtitle/Subtitle'
import InputForm from 'src/components/InputForm/InputForm'
import CheckBoxForm from 'src/components/CheckBoxForm/CheckBoxForm'
import Button from 'src/components/Button/Button'
import Text from 'src/components/Text/Text'

import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { TbAlertCircleFilled } from 'react-icons/tb'
import useLocalStorage from 'use-local-storage'


const CreateAccount = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState:{ errors }, } = useForm()

    const [accounts, setAccounts] = useLocalStorage('Account', [])
    
    const watchPassword = watch("password")

    const createAccount = data => {
        setAccounts([...accounts, data])
    }
    
    const onSubmit = data => {
        const infoAccount = {
            id: uuid(),
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            password: data.password
        }
        createAccount(infoAccount)
    } 

  return (
    <div className={ styles.createAccount }>
        <Header display='nonVisible' content='center'/>
        <main className={ styles.createAccount__main }>
            <section className={ styles.createAccount__section }>
                <Subtitle text='Criar conta' color='orange'/>   
                <form className={ styles.createAccount__form } onSubmit={handleSubmit(onSubmit)}>
                    <InputForm 
                        name='fullname'
                        label='Nome completo'
                        type='text'
                        placeholder='Digite seu nome completo'
                        typeClassName='form__input'
                        styleClassName={errors?.fullname && "form__inputError"}
                        register={register}
                        required
                        icon={errors?.fullname && <TbAlertCircleFilled className={ styles.createAccount__iconError } />}
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
                        icon={errors?.username && <TbAlertCircleFilled className={ styles.createAccount__iconError } />}
                        errorText= { errors?.username?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
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
                        icon={errors?.email && <TbAlertCircleFilled className={ styles.createAccount__iconError } />}
                        errorText= { errors?.email?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                    />
                    <InputForm 
                        name='password'
                        label='Senha'
                        type='password'
                        placeholder='Digite sua senha'
                        typeClassName='form__input'
                        styleClassName={errors?.password && "form__inputError"}
                        register={register}
                        required
                        icon={errors?.password && <TbAlertCircleFilled className={ styles.createAccount__iconError } />}
                        errorText= { errors?.password?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
                    />
                    <InputForm 
                        name='passwordConfirmation'
                        label='Confirmar senha'
                        type='password'
                        placeholder='Digite sua senha novamente'
                        typeClassName='form__input'
                        styleClassName={errors?.passwordConfirmation && "form__inputError"}
                        register={register}
                        required
                        validate={(value) => value === watchPassword}
                        icon={errors?.passwordConfirmation && <TbAlertCircleFilled className={ styles.createAccount__iconError } />}
                        errorText= { errors?.passwordConfirmation?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' /> : errors?.passwordConfirmation?.type === 'validate'? <Text className='error' text='A confirmação de senha deve ser igual a senha!' /> : "" }
                    />
                    <CheckBoxForm 
                        name='acceptTerms'
                        label={["Você concorda com as ", <span key='1' className={ styles.createAccount__terms }>Condições de uso</span>, " e " ,<span key='2' className={ styles.createAccount__terms }>Notificações de privacidade</span>, " da CineSync."]}
                        styleClassName={errors?.acceptTerms && "form__checkBoxError"}
                        register={register}
                        required
                        icon={errors?.acceptTerms && <TbAlertCircleFilled className={ styles.createAccount__iconError } />}
                        errorText= { errors?.acceptTerms?.type === 'required' && <Text className='error' text='Você deve aceitar os termos de serviço!' /> }
                    />
                    <Button btnClassName={ styles.createAccount__btnSubmit } txtClassName='white' type='submit' title='Criar conta'/> 
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