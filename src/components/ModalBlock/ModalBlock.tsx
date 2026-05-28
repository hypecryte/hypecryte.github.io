import React, { useState } from 'react';
import { FeedbackModal } from '../FeedbackModal/FeedBackModal';
import styles from './ModalBlock.module.css';

export const ModalBlock = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <span className={styles.label}>Задание с чёрной страницей</span>
                <a href="/black-page/index.html" target="_blank" className={styles.blackButton}>Клик</a>
            </div>

            <div className={styles.column}>
                <span className={styles.label}>Модальное окно с формой</span>
                <button className={styles.modalButton} onClick={() => setIsModalOpen(true)}>
                    Открыть форму
                </button>
            </div>

            <div className={styles.column}>
                <span className={styles.label}>Кнопка дизайнера</span>
                <button className={styles.plainButton}>
                    <span className={styles.btnText}>Кнопка</span>
                </button>
                <span className={styles.label}>Чек бокс с анимацией</span>
                <label className={styles.CheckBoxBtn}>
                    <input type="checkbox" className={styles.CheckBoxBtn}></input>
                    <span className={styles.slider}></span>
                </label>
            </div>

            {/* Подключаем изолированное модальное окно */}
            <FeedbackModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};
