import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, isleftbdr, isrightbdr, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className={isrightbdr ? styles.right_bdr : isleftbdr ? styles.left_bdr : styles.primary_btn}  >{text}</button>
        </div>
    )
}

export default Button