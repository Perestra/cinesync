import React from 'react'
import styles from './NavList.module.scss'

import LinkList from 'src/components/LinkList/LinkList'

import { AiFillHome } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import { RiMovie2Fill } from 'react-icons/ri'
import { PiTelevisionFill } from 'react-icons/pi'

const NavList = () => {

  const listHeader = [
    {link:"inicio",
     Icon:AiFillHome 
    }, 
    {link:"minha lista",
     Icon:HiPlus 
    }, 
    {link:"filmes",
     Icon:RiMovie2Fill 
    }, 
    {link:"series",
     Icon:PiTelevisionFill 
    }
  ]
  
  return (
    <nav className={ styles.nav }>
        <ul className={ styles.nav__ul }>
           { listHeader.map( (item,index) => 
              <LinkList 
                key={ index } 
                to={ item.link.split(' ').join('') } 
                Icon={ item.Icon } 
                title={item.link.toUpperCase() } 
              />
            )}
        </ul>
    </nav>
  )
}

export default NavList