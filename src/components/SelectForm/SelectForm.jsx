import React from 'react'
import styles from './SelectForm.module.scss'

const SelectForm = ({ name, label, firstOpt, options, onChange }) => {
  return (
    <div className={ styles.form }>
        <label className={ styles.form__label } htmlFor={ name }>{ label }</label>
        <select className={ styles.form__select } name={ name } id={ name } onChange={ onChange }>
            { firstOpt }
            { options }
        </select>
    </div>
  )
}

export default SelectForm