import React from 'react'
import styles from './NavList.module.scss'

import LinkList from 'src/components/LinkList/LinkList'

const NavList = () => {

  const listHeader = [
    {title:"Início",
     link:"/inicio"
    }, 
    {title:"Filmes",
     link:"/filmes"
    }, 
    {title:"Séries",
     link:"/series"
    },
    {title:"Minha lista",
     link:"/minhalista"
    }
  ]
  
  return (
    <nav className={ styles.nav }>
        <ul className={ styles.nav__ul }>
           { listHeader.map( (item,index) => 
              <LinkList 
                key={ index } 
                to={ item.link } 
                title={ item.title } 
              />
            )}
        </ul>
    </nav>
  )
}

export default NavList