import React from 'react';
import cx from 'clsx';
import styles from './checkbox.module.css';

function Checkbox({name, id, className, defaultChecked, onChange}) {
    return <input 
    type="checkbox" 
    name={name} 
    id={id} 
    className={cx(styles['checkbox'], className)} 
    defaultChecked={defaultChecked}
    onChange={onChange}></input>
}

export { Checkbox }