import React from 'react';
import styles from './ShowCard.module.css';

interface ShowCardProps {
    img: string;
    title: string;
}

export const ShowCard = ({ img, title }: ShowCardProps) => {
    return (
        <div className={styles.CardWrapper}>
            <div className={styles.Card}>
                <img src={img} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    );
};
