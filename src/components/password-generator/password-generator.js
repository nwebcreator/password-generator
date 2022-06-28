import React from 'react';
import styles from './password-generator.module.css';
import { Input } from '../../ui/input/input';
import { Select } from '../../ui/select/select';
import { Checkbox } from '../../ui/chechbox/checkbox';
import { Button } from '../../ui/button/button';

function PasswordGenerator() {
    const charsGenerate = '0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&()\\_+?:{}[]';
    const passwordLengthValues = [12, 13, 14, 15, 16];

    const [result, setResult] = React.useState('');
    const [passwordLength, setPasswordLength] = React.useState(passwordLengthValues[0]);
    const [isSymbolsUse, setIsSymbolsUse] = React.useState(false);
    const [isPasswordCopied, setIsPasswordCopied] = React.useState(false);

    function handlePasswordGenerator() {
        //let currentResult = '';
        let allCharsGenerate = charsGenerate;
        if (isSymbolsUse) {
            allCharsGenerate += symbols;
        }

        const currentResult = Array.from({length: passwordLength}, () => {
            const randomNumber = Math.floor(Math.random() * allCharsGenerate.length);
            return allCharsGenerate.substring(randomNumber, randomNumber + 1)
        }).join('');

        setResult(currentResult);
        // for (let i = 0; i < passwordLength; i += 1) {
        //     const randomNumber = Math.floor(Math.random() * charsGenerate.length);
        //     currentResult += charsGenerate.substring(randomNumber, randomNumber + 1);
        // }
        // setResult(currentResult);
    }

    function handleBlur (event) {
        setPasswordLength(event.target.value);
    }

    function handleSymbolsUse () {
        setIsSymbolsUse(!isSymbolsUse);
    }

    function handlePasswordCopy () {
        if (result) {
            let timerId = null;
            navigator.clipboard.writeText(result).then(() => {
                setIsPasswordCopied(true);
                timerId = setTimeout(() => {
                    setIsPasswordCopied(false);
                    clearTimeout(timerId);
                }, 2000);
            });
        }
    }

    return (
        <div className={styles['root']}>
            <h1 className={styles['title']}>Генератор паролей</h1>
            <div className={styles['result']}>
                <Input type='text' readonly={true} defaultValue={result}></Input>
                <button className={styles['copy']} onClick={handlePasswordCopy}></button>
                {isPasswordCopied && <span className={styles['copied']}>Скопировано!</span>}
            </div>
            <div className={styles['option']}>
                <span className={styles['option-name']}>Длина пароля</span>
                <Select options={passwordLengthValues} onBlur={handleBlur}></Select>
            </div>
            <div className={styles['option']}>
                <label className={styles['option-label']} htmlFor="symbols">Использовать спецсимволы</label>
                <Checkbox defaultChecked={false} id="symbols" onChange={handleSymbolsUse}></Checkbox>
            </div>
            <Button type="button" onClick={handlePasswordGenerator}>Сгенерировать пароль</Button>
        </div>

    )
}

export { PasswordGenerator }
