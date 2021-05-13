import React, { memo } from 'react';
import styles from './card.module.css';
const DEFAULT_IMAGE = '/images/default.PNG';

const Card = memo(({ card }) => {
    const { name, company, phone, email, message, theme, fileURL, color } = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={`${styles.avatar} ${color}`} src={url} alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                {company && <p className={styles.company}>{company}</p>}
                <p className={styles.phone}>{phone}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
});

function getStyles(theme) {
    switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}
export default Card;