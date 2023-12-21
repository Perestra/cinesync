import React from 'react'
import styles from './UserMenu.module.scss'

import Subtitle from 'src/components/Subtitle/Subtitle'
import Text from 'src/components/Text/Text'

import { useAuthContext } from 'src/hooks/useAuthContext';
import { FiSettings } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ menu, container }) => {

    const { authUser, setAuthUser } = useAuthContext()
    const navigate = useNavigate()

    const userLogo = name => {
        const firstletter = name?.split(' ')[0].split('')[0]
        return firstletter
    }

    const userLogout = () => {
        setAuthUser()
        navigate('/')
    }

    const userMenu = [
        {
            menu: 'Configurações',
            icon: <FiSettings />,
            function: () => navigate('/usuario')
        },
        {
            menu: 'Sair',
            icon: <TbLogout2 />,
            function: () => userLogout()
        }
    ]

    return (
    <section className={ `${ styles.menu } ${ styles[menu] }` }>
        <div className={ `${ styles.menu__container } ${ styles[container]}` }>
            <div className={ styles.menu__user }>
                <span className={ styles.menu__userPhoto }>{ userLogo(authUser?.fullname) }</span>
                <div className={ styles.menu__userInfo }>
                    <Subtitle text={ authUser?.fullname } />
                    <Text text={ authUser?.email } />
                </div>
            </div>
            <div className={ styles.menu__listContainer }>
                <ul className={ styles.menu__listMenu}>
                    { userMenu.map( (item, index) => 
                        <li 
                            key={index} 
                            className={ styles.menu__list}
                            onClick={ item.function }
                        >   
                            { item.icon }
                            { item.menu }
                        </li> 
                    )}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default UserMenu