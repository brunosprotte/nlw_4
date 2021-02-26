import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/components/challengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCoundown } = useContext(CountdownContext);


    function handleChallengeSucceeded() {
        completeChallenge();
        resetCoundown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCoundown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {
                activeChallenge 
                ? (
                    <div className={styles.challengeActive} >
                        <header>Ganhe {activeChallenge.amount}XP</header>
                        
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button 
                                type="button" 
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}
                                >
                                Falhei
                            </button>
                            
                            <button 
                                type="button"
                                className={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                                >
                                Completei
                            </button>
                        </footer>
                    </div>
                ) 
                : (
                    <div className={styles.challengeNotActive} >
                        <strong>Finalizeum cico para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level UP" />
                            Avance de nível completando desafios!
                        </p>
                </div>
                )
            }
        </div>
    )
}
