import React from 'react'
import styles from './InputForm.module.scss'

const InputForm = ({ name, label, type, placeholder, styleClassName, register, required, validate, icon, errorText }) => {
  return (
    <div className={ styles.form }>
      <label htmlFor={name} className={ styles.form__label }>{label}</label>
      <div className={ `${styles.form__field} ${styles[styleClassName]}` }>
        <input 
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={ styles.form__input }
          {...register(name, { required, validate })}
        />
        {icon}
      </div>
      { errorText }
    </div>
  )
}

export default InputForm