import React from 'react'
import styles from './InputForm.module.scss'

const InputForm = ({ name, label, sideLabel, type, placeholder, styleClassName, register, required, validate, icon, iconError, errorText }) => {
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
        {iconError}
      </div>
      <div className={ styles.form__infos }>
        { errorText }
        { sideLabel }
      </div>
    </div>
  )
}

export default InputForm