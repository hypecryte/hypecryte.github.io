import React from "react";
import styles from "./Navbar.module.css";

interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    logoText: React.ReactNode;
    links: NavLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.hero}>
                <a href="/">
                    <div className={styles.logoWrapper}>
                        <span className={styles.logoTop}>Frontend</span>
                        <span className={styles.logoBottom}>DEV-TEST</span>
                    </div>
                </a>
            </div>
            <div className={styles.menu}>
                {links.map((link, index) => (
                    <a key={index} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};
