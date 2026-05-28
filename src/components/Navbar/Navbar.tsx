import { useState } from "react";
import styles from "./Navbar.module.css";

interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    links: NavLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

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

            <button
                className={`${styles.burgerButton} ${isOpen ? styles.burgerActive : ""}`}
                onClick={toggleMenu}
                aria-label="Открыть меню"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
                {links.map((link, index) => (
                    <a key={index} href={link.href} onClick={closeMenu}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};
