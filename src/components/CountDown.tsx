import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css'
import {CountdownContext} from '../contexts/CountdownContext';

export function Countdown() {

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCoundown, 
        resetCoundown
    } = useContext(CountdownContext)
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countDownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button"
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                            onClick={resetCoundown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                            type="button"
                            className={styles.countDownButton}
                            onClick={startCoundown}
                        >
                            Iniciar um ciclo
                        </button>
                   )}
                </>
            )}
            

        </div>
    );
}