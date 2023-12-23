import React, { useState } from 'react'
import styles from './ChangePassword.module.scss'

import Subtitle from 'src/components/Subtitle/Subtitle'
import Text from 'src/components/Text/Text'
import InputForm from 'src/components/InputForm/InputForm'
import Button from 'src/components/Button/Button'

import { useForm } from 'react-hook-form'
import { IoAlertCircleOutline } from 'react-icons/io5'
import { IoIosEyeOff, IoMdEye } from 'react-icons/io'
import { useAccountContext } from 'src/hooks/useAccountContext'

const ChangePassword = ({ setContent }) => {

    const [ passwordVisible, setPasswordVisible ] = useState(false)
    const [ passwordConfirmationVisible, setpasswordConfirmationVisible ] = useState(false)

    const { register, handleSubmit, watch, formState:{ errors }, } = useForm()
    const { ChangePassword } = useAccountContext()

    const watchPassword = watch("passwordChange")

  return (
    <section className={ styles.ChangePassword }>
        <Subtitle text='Alterar Senha' color='orange'/>   
        <form className={ styles.ChangePassword__form } onSubmit={ handleSubmit(ChangePassword) }>
            <InputForm 
                name='passwordChange'
                label='Nova senha'
                type={ passwordVisible? 'text': 'password' } 
                placeholder='Digite sua senha'
                typeClassName='form__input'
                styleClassName={errors?.passwordChange && "form__inputError"}
                register={register}
                required
                iconError={errors?.passwordChange && <IoAlertCircleOutline className={ styles.ChangePassword__iconError } />}
                icon={
                    passwordVisible? 
                    <IoMdEye onClick={() => setPasswordVisible(!passwordVisible)} className={ styles.ChangePassword__icon }/>: 
                    <IoIosEyeOff onClick={() => setPasswordVisible(!passwordVisible)} className={ styles.ChangePassword__icon }/>
                }
                errorText= { errors?.passwordChange?.type === 'required' && <Text className='error' text='Este campo é obrigatório!' /> }
            />
            <InputForm 
                name='passwordConfirmation'
                label='Confirmar nova senha'
                type={ passwordConfirmationVisible? 'text': 'password' }
                placeholder='Digite sua senha novamente'
                typeClassName='form__input'
                styleClassName={errors?.passwordConfirmation && "form__inputError"}
                register={register}
                required
                validate={ (value) => value === watchPassword }
                //(value) => isValidPassword(isValidPassword)
                iconError={errors?.passwordConfirmation && <IoAlertCircleOutline className={ styles.ChangePassword__iconError } />}
                icon={
                    passwordConfirmationVisible? 
                    <IoMdEye onClick={() => setpasswordConfirmationVisible(!passwordConfirmationVisible)} className={ styles.ChangePassword__icon }/>: 
                    <IoIosEyeOff onClick={() => setpasswordConfirmationVisible(!passwordConfirmationVisible)} className={ styles.ChangePassword__icon }/>
                }
                errorText= { errors?.passwordConfirmation?.type === 'required'? <Text className='error' text='Este campo é obrigatório!' /> : errors?.passwordConfirmation?.type === 'validate'? <Text className='error' text='A confirmação de senha deve ser igual a senha!' /> : "" }
            />
            <Button btnClassName={ styles.ChangePassword__btnSubmit } txtClassName='white' type='submit' title='Confirmar'/>
        </form>    
        <div className={ styles.ChangePassword__cancelChange }>
            <Text className='gray' text='Não quer alterar a senha?'/>    
            <Button btnClassName={ styles.ChangePassword__btnCancel } txtClassName='black' type='submit' title='Voltar' onClick={ () => setContent('configurações') }/>
        </div> 
    </section> 
  )
}

export default ChangePassword