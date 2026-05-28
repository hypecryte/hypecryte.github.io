import React, { useState } from 'react';
import styles from './FeedBackModal.module.css';

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
    if (!isOpen) return null;

    const [moodColor, setMoodColor] = useState('#6a1b9a');

    // Функция обработки отправки формы
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Запрещаем стандартную перезагрузку страницы

        // Здесь в будущем будет логика сбора и отправки данных на сервер
        console.log("Данные успешно отправлены!");

        onClose(); // Закрываем модальное окно сразу после отправки
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.outerHeaderContainer}>
                    <h3 className={styles.modalTitleOuter}>Заполните поля</h3>
                    <span className={styles.pleaseTextOuter}>ну пожалуйста</span>
                </div>

                <form className={styles.feedbackForm} onSubmit={handleSubmit}>

                    <div className={styles.formSection}>
                        <h2 className={styles.sectionHeader}>Основное</h2>
                        <div className={styles.sectionBody}>
                            <div className={styles.formGroupRow}>
                                <label className={styles.formLabel}>Имя</label>
                                <input type="text" placeholder="По паспорту" required className={styles.inputField} />
                            </div>

                            <div className={styles.formGroupRow}>
                                <label className={styles.formLabel}>Цвет настроения</label>
                                <input
                                    type="color"
                                    value={moodColor}
                                    onChange={(e) => setMoodColor(e.target.value)}
                                    className={styles.colorPicker}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.formSection} ${styles.yellowSection}`}>
                        <h2 className={styles.sectionHeader}>Дополнительное</h2>
                        <div className={styles.formGroupRowTop}>
                            <label className={styles.formLabel}>Комментарий</label>
                            <textarea placeholder="Напишите что нибудь. Если хотите конечно" rows={3} className={styles.textareaField}></textarea>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <div className={styles.optionsBlock}>
                            <label className={styles.checkboxRadioLabel}>
                                <input type="radio" name="exampleRadio" className={styles.radioInput} />
                                <span>Ну а тут просто полежит радиобатон</span>
                            </label>

                            <label className={styles.checkboxRadioLabelItem}>
                                <input type="checkbox" className={styles.checkboxInput} required />
                                <span className={styles.checkboxText}>
                                    Соглашаюсь на всё, что бы вы не придумали и осознаю, что это может означать{' '}
                                    <a href="/terms" className={styles.termsLink} onClick={(e) => e.stopPropagation()}>
                                        что угодно
                                    </a>
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Единственная фиолетовая кнопка отправки-закрытия */}
                    <div className={styles.modalActions}>
                        <button type="submit" className={styles.purpleButton}>
                            Отправить все мои данные
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
