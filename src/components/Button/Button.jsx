import React from 'react'

const Button = ({ type, className, onClick, title }) => {
  return (
    <button type={ type } className={ className } onClick={ onClick }>
        <p>{ title }</p>
    </button>
  )
}

export default Button