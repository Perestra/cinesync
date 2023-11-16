import React from 'react'
import styles from './NavList.module.scss'

import LinkList from 'src/components/LinkList/LinkList'

import { AiFillHome } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import { RiMovie2Fill } from 'react-icons/ri'
import { PiTelevisionFill } from 'react-icons/pi'

const NavList = () => {

  const listHeader = [
    {title:"Início",
     link:"/inicio",
     Icon:AiFillHome 
    }, 
    {title:"Minha lista",
     link:"/minhalista",
     Icon:HiPlus 
    }, 
    {title:"Filmes",
     link:"/filmes",
     Icon:RiMovie2Fill 
    }, 
    {title:"Séries",
     link:"/series",
     Icon:PiTelevisionFill 
    }
  ]
  
  return (
    <nav className={ styles.nav }>
        <ul className={ styles.nav__ul }>
           { listHeader.map( (item,index) => 
              <LinkList 
                key={ index } 
                to={ item.link } 
                Icon={ item.Icon } 
                title={ item.title } 
              />
            )}
        </ul>
    </nav>
  )
}

export default NavList