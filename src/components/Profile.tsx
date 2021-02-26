import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/brunosprotte.png" alt="bruno"/>

            <div>
                <strong>Bruno</strong>
                <p>
                    <img src="icons/level.svg" alt="Current level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}