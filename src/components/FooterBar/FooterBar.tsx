import React from 'react';
import styles from './FooterBar.module.css';

// Исправлено: добавлено = () перед стрелкой =>
export const FooterBar: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <div className={styles.logoWrapper}>
                    <span className={styles.logoTop}>Frontend</span>
                    <span className={styles.logoBottom}>DEV-TEST</span>
                </div>
            </div>

            <div className={styles.contactsSection}>
                <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>GitHub:</span>
                    <a href="https://github.com/hypecryte" className={styles.contactItem} target="_blank" rel="noreferrer">
                        https://github.com/hypecryte
                    </a>
                </div>

                <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>VK:</span>
                    <a href="https://vk.com/hypecryte" className={styles.contactItem} target="_blank" rel="noreferrer">
                        https://vk.com/hypecryte
                    </a>
                </div>

                <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>Telegram:</span>
                    <a href="https://t.me/hypecryte" className={styles.contactItem} target="_blank" rel="noreferrer">
                        https://t.me/hypecryte
                    </a>
                </div>
            </div>
        </footer>
    );
};
