import React from 'react'
import styles from './ConfirmAlert.module.scss'

import Subtitle from 'src/components/Subtitle/Subtitle';
import Text from 'src/components/Text/Text';
import Button from 'src/components/Button/Button';

import { TbAlertTriangle } from "react-icons/tb";

const ConfirmAlert = ({ open, title, text, confirmOnClick, refuseOnClick }) => {
  return (
    <dialog open={open} className={ styles.dialog } >
        <div className={ styles.dialog__container }>
            <div className={ styles.dialog__title }>
                <TbAlertTriangle className={ styles.dialog__icon } />  
                <Subtitle color='black' text={ title } />   
            </div>
            <Text className='black' text={ text } />
            <div className={ styles.dialog__buttons }>
                <Button btnClassName={ styles.dialog__btnConfirm } txtClassName='white' title='Confirmar' onClick={ confirmOnClick }/>
                <Button btnClassName={ styles.dialog__btnCancel } txtClassName='white' title='Cancelar' onClick={ refuseOnClick }/>
            </div>    
        </div>
    </dialog>
  )
}

export default ConfirmAlert