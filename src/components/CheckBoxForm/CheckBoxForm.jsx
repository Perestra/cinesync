import React from 'react'
import styles from './CheckBoxForm.module.scss'

const CheckBoxForm = ({ name, label, styleClassName, register, required, icon, errorText }) => {
  return (
    <div className={ styles.form }>
        <div className={ `${styles.form__field} ` }>
            <input 
                type='checkbox'
                name={name}
                id={name}
                className={ `${styles.form__checkbox} ${styles[styleClassName]}` }
                {...register(name, { required })}
            />
            <label htmlFor={name} className={ styles.form__label }>{label}</label>
        </div>
        {icon}
        { errorText }
    </div>
  )
}

export default CheckBoxForm