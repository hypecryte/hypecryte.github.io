import React, { useState } from "react";
import styles from "./TextSection.module.css";

type TabType = "text" | "lists" | "tables";

export const TextSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>("text");

    return (
        <div className={styles.TextSection}>
            <div className={styles.sectionNav}>
                <button
                    className={`${styles.sectionButton} ${activeTab === "text" ? styles.active : ""}`}
                    onClick={() => setActiveTab("text")}
                >
                    Текст
                </button>
                <button
                    className={`${styles.sectionButton} ${activeTab === "lists" ? styles.active : ""}`}
                    onClick={() => setActiveTab("lists")}
                >
                    Списки
                </button>
                <button
                    className={`${styles.sectionButton} ${activeTab === "tables" ? styles.active : ""}`}
                    onClick={() => setActiveTab("tables")}
                >
                    Таблицы
                </button>
            </div>

            <div className={styles.sectionText}>
                {activeTab === "text" && (
                    <div className={styles.tabContent}>
                        <h3 className={styles.contentTitle}>Парадокс темного неба</h3>

                        <p className={styles.leadText}>
                            Если Вселенная бесконечна и наполнена миллиардами светящихся звезд, то почему ночное небо остается черным, а не сияет ослепительным светом?
                        </p>

                        <p className={styles.normalText}>
                            Этот вопрос известен в астрофизике как <strong>парадокс Ольберса</strong>. Логика подсказывает, что в каком бы направлении мы ни посмотрели, наш взгляд должен упираться в поверхность какой-нибудь звезды. Решение загадки кроется в двух фундаментальных законах космоса. Во-первых, Вселенная имеет конечный возраст — около <code className={styles.codeInline}>13.8 миллиардов лет</code>, и свет от самых далеких галактик еще просто не успел до нас долететь. Во-вторых, ткань пространства непрерывно <em>расширяется</em>, из-за чего световые волны растягиваются, переходя в невидимый для человеческого глаза инфракрасный диапазон.
                        </p>

                        <blockquote className={styles.blockquote}>
                            «Две вещи не перестают приводить меня в изумление и священный трепет, чем чаще и дольше я размышляю о них: звездное небо надо мной и моральный закон во мне».
                            <cite>— Иммануил Кант, «Критика практического разума»</cite>
                        </blockquote>

                        <p className={styles.noteText}>
                            <strong>Интересный факт:</strong> Если бы наши глаза могли улавливать реликтовое излучение (эхо Большого взрыва), ночное небо казалось бы нам абсолютно однородным и ярко светящимся во всех направлениях.
                        </p>
                    </div>
                )}

                {activeTab === "lists" && (
                    <div className={styles.tabContent}>
                        <h3 className={styles.contentTitle}>Варианты отображения списков</h3>
                        <div className={styles.listsGrid}>
                            <div className={styles.listColumn}>
                                <h4 className={styles.subTitle}>1. Маркированный список</h4>
                                <ul className={styles.bulletList}>
                                    <li>Элемент с красивым фиолетовым маркером</li>
                                    <li>Второй важный пункт этого блока</li>
                                    <li>Дополнительная аналитическая информация</li>
                                </ul>
                            </div>

                            <div className={styles.listColumn}>
                                <h4 className={styles.subTitle}>2. Нумерованный список</h4>
                                <ol className={styles.orderedList}>
                                    <li>Шаг первый: Подготовка данных и структуры</li>
                                    <li>Шаг второй: Проектирование интерфейса</li>
                                    <li>Шаг третий: Финальное тестирование функционала</li>
                                </ol>
                            </div>

                            <div className={styles.listColumn}>
                                <h4 className={styles.subTitle}>3. Иконочный список</h4>
                                <ul className={styles.checkList}>
                                    <li><span className={styles.checkIcon}>✓</span> Задача полностью выполнена</li>
                                    <li><span className={styles.checkIcon}>✓</span> Код успешно прошел код-ревью</li>
                                    <li><span className={styles.checkIcon}>⚡</span> Требуется оптимизация стилей</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                )}

                {activeTab === "tables" && (
                    <div className={styles.tabContent}>
                        <h3 className={styles.contentTitle}>Варианты интерактивных таблиц</h3>

                        <table className={styles.customTable}>
                            <thead>
                            <tr>
                                <th>Сотрудник</th>
                                <th>Роль в проекте</th>
                                <th>Текущий статус</th>
                                <th>Эффективность</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><strong>Алликсаар</strong></td>
                                <td>Тимлид / Архитектор</td>
                                <td><span className={`${styles.statusBadge} ${styles.statusActive}`}>В сети</span></td>
                                <td className={styles.tableNumeric}>98%</td>
                            </tr>
                            <tr>
                                <td>Станислав</td>
                                <td>Клитотехник разработчик</td>
                                <td><span className={`${styles.statusBadge} ${styles.statusAway}`}>Отошел</span></td>
                                <td className={styles.tableNumeric}>85%</td>
                            </tr>
                            <tr>
                                <td>Александр Троян</td>
                                <td>Фронтенд инженер</td>
                                <td><span className={`${styles.statusBadge} ${styles.statusActive}`}>В сети</span></td>
                                <td className={styles.tableNumeric}>92%</td>
                            </tr>
                            <tr>
                                <td>Игорь Зверёк</td>
                                <td>QA тестировщик</td>
                                <td><span className={`${styles.statusBadge} ${styles.statusOffline}`}>Оффлайн</span></td>
                                <td className={styles.tableNumeric}>74%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};
