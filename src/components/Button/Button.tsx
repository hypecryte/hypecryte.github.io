import React from "react";
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    btnTextColor?: string;
    btnBgColor?: string;
    btnBorderColor?: string;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    isLoading?: boolean;
    forceState?: 'hover' | 'active' | 'default';
}

export const Button = ({
                           text,
                           btnTextColor = "#000",
                           btnBgColor = "#ebebeb",
                           btnBorderColor = "#afafaf",
                           icon,
                           iconPosition = 'end',
                           isLoading,
                           forceState,
                           ...props
                       }: ButtonProps) => {

    const buttonClasses = [
        styles.button,
        forceState === 'hover' ? styles.forceHover : '',
        forceState === 'active' ? styles.forceActive : '',
        forceState === 'default' ? styles.forceDefault : '',
    ].filter(Boolean).join(' ');

    return (
        <button
            className={buttonClasses}
            style={{
                '--btnTextColor': btnTextColor,
                '--btnBgColor': btnBgColor,
                '--btnBorderColor': btnBorderColor ? btnBorderColor : btnBgColor,
            } as React.CSSProperties}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <span className={styles.spinner}></span>
            ) : (
                <>
                    {icon && iconPosition === 'start' && (
                        <span className={styles.icon}>{icon}</span>
                    )}
                    {text}
                    {icon && iconPosition === 'end' && (
                        <span className={styles.icon}>{icon}</span>
                    )}
                </>
            )}
        </button>
    );
};
