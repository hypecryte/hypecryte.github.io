import React from 'react';
import styles from './SchemaSection.module.css';

export const SchemaSection: React.FC = () => {
    return (
        <div className={styles.schemaWrapper}>
            <h4>Массоны Самсона</h4>
            <object
                data="/scheme.svg"
                type="image/svg+xml"
                className={styles.schemaSvg}
            >
                Ваш браузер не поддерживает SVG
            </object>

        </div>
    );
};
