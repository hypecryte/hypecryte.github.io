import React from 'react';
import styles from './SectionBlock.module.css';

interface SectionBlockProps {
    sectionText: string;
    bgSvg: string;
    bgColor: string;
    hoverBgColor: string;
    children?: React.ReactNode;
}

export const SectionBlock: React.FC<SectionBlockProps> = ({
    sectionText,
    bgSvg,
    bgColor = "#DFDBE5",
    hoverBgColor = "#8032f5",
    children,
}) => {
    return (
        <section className={styles.section}>
            <h1 id={sectionText}>{sectionText}</h1>
            <div className={styles.sectionBlock}
            style={{
                '--bg-image': `url("${bgSvg}")`,
                '--bg-color': bgColor,
                '--hover-bg-color': hoverBgColor,
            } as React.CSSProperties}
            >
                {children}
            </div>
        </section>
    );
};