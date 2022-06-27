import React from 'react';
import styles from './button.module.css';
import cx from 'clsx';

function Button ({ type, className, onClick, children }) {
    return ( 
             <button type={type} className={cx(styles['generate-button'], className)} onClick={onClick}>
                {children}
             </button>
    )
};

export { Button };