import React from 'react'
//import cx from 'clsx'
import styles from './select.module.css'

function Select ({options, onBlur}) {
    return (
        <select onBlur={onBlur} className={styles['select']}>
            {options && 
            options.map((option, index) => {
                return <option key={index}>{option}</option>
            })
        }</select>
    )
}

export { Select }
