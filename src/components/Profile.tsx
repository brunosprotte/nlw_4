import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/brunosprotte.png" alt="bruno"/>

            <div>
                <strong>Bruno</strong>
                <p>
                    <img src="icons/level.svg" alt="Current level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}