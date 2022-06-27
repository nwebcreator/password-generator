import React from 'react'
//import cx from 'clsx'
import styles from './select.module.css'

function Select ({options, onBlur}) {
    return (
        <select onBlur={onBlur} className={styles['select']}>
            {options && 
            options.map((option, index) => {
                return <options key={index}>{option}</options>
            })
        }</select>
    )
}

export { Select }
