import React from 'react'
import cx from 'clsx'
import styles from './input.module.css'

function Input({ type, placeholder, defaultValue, disabled, className, readonly }) {
    return <input type={type}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={disabled}
    className={cx(styles['input'], className)}
    readonly={readonly}></input>
}

export { Input }