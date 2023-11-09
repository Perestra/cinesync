import React from 'react'
import Text from 'src/components/Text/Text'

const Button = ({ type, btnClassName, txtClassName, onClick, title }) => {
  return (
    <button type={ type } className={ btnClassName } onClick={ onClick }>
      <Text className={txtClassName} text={ title } />
    </button>
  )
}

export default Button