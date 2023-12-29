import React, { useState } from 'react'
import styles from './User.module.scss'

import Header from 'src/components/Header/Header'
import Title from 'src/components/Title/Title'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Text from 'src/components/Text/Text'
import ChangePassword from 'src/components/ChangePassword/ChangePassword'
import ConfirmAlert from 'src/components/ConfirmAlert/ConfirmAlert'
import Button from 'src/components/Button/Button'

import { useAuthContext } from 'src/hooks/useAuthContext'
import { MdEdit } from "react-icons/md";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useAccountContext } from 'src/hooks/useAccountContext'

const User = () => {

    const { authUser } = useAuthContext()
    const { deleteAccount } = useAccountContext()

    const [ visibility, setVisibility ] = useState(false)
    const [ content, setContent ] = useState('configurações')
    const [ dialog, setDialog ] = useState(false)

    const userLogo = name => {
        const firstletter = name?.split(' ')[0].split('')[0]
        return firstletter
    }

    const inputs = [
        {
            name: 'fullname',
            label: 'Nome completo',
            type: 'text',
            value: authUser.fullname
        },
        {
            name: 'username',
            label: 'Usuário',
            type: 'text',
            value: authUser.username
        },
        {
            name: 'email',
            label: 'E-mail',
            type: 'email',
            value: authUser.email
        },
        {
            name: 'password',
            label: 'Senha',
            type: 'password',
            value: authUser.password
        }
    ]

  return (
    <div className={ styles.user }>
        <Header username={ authUser.username } mobile='visible' />
        <main className={ styles.user__main }>
            <Title text='Configurações da conta' />
            { content === 'alterar senha' && <ChangePassword setContent={setContent} /> }
            { content === 'configurações' && <section className={ styles.user__section }>
                <div className={ styles.user__info }>
                    <span className={ styles.user__photo }>{ userLogo(authUser.fullname) }</span>
                    <div className={ styles.user__data }>
                        <Subtitle text={ authUser.fullname } color='white' />
                        <Text text={ authUser.email } className='gray' />
                    </div>
                </div>
                <div className={ styles.user__form }>
                    { inputs.map( (item, index) => 
                        <div key={index} className={ styles.user__formData }>
                            <label htmlFor={ item.name } className={ styles.user__label }>{ item.label }</label>
                            <div className={ styles.user__field }>
                                <input 
                                    className={ styles.user__input }
                                    name={ item.name }
                                    id={ item.name }
                                    type={ visibility? 'text': item.type } 
                                    value={ item.value } 
                                    disabled 
                                />
                                { item.type === 'password' && 
                                    <div className={ styles.user__icons }>
                                        {visibility? 
                                            <IoMdEye onClick={() => setVisibility(!visibility)} className={ styles.user__icon }/>: 
                                            <IoIosEyeOff onClick={() => setVisibility(!visibility)} className={ styles.user__icon }/>
                                        }
                                        { item.type === 'password' && <MdEdit className={ styles.user__icon } onClick={ () => setContent('alterar senha')} /> }
                                    </div> 
                                }
                            </div>
                        </div>
                    )}
                </div>
                <ConfirmAlert  
                    open={dialog}
                    title='Você tem certeza?' 
                    text='Caso confirme, a sua conta será excluida para sempre!' 
                    confirmOnClick={ () => deleteAccount(authUser.id) } 
                    refuseOnClick={ () => setDialog(!dialog) } 
                />
                <Button btnClassName={ styles.user__btnDelete } txtClassName='white' title='Excluir conta' onClick={ () => setDialog(!dialog) } />
            </section> }
        </main>
    </div>
  )
}

export default User