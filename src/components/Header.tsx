import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import { classNames } from "../utils/classNames";
import Logo from "./Logo";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 8);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const desktop = window.matchMedia("(min-width: 1026px)");

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };

        const handleResize = () => {
            if (desktop.matches) setIsMenuOpen(false);
        };

        document.body.classList.add("active");
        window.addEventListener("keydown", handleKeyDown);
        desktop.addEventListener("change", handleResize);

        return () => {
            document.body.classList.remove("active");
            window.removeEventListener("keydown", handleKeyDown);
            desktop.removeEventListener("change", handleResize);
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={classNames("header", isScrolled && "scrolled", isMenuOpen && "active")}>
            <div className="header__container _container">
                <Logo light={!isScrolled && !isMenuOpen} />

                <nav className="header__nav" aria-label="Main">
                    <ul className="header__list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="header__link">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__actions">
                    <a href="#pricing" className={classNames("header__button", isScrolled || isMenuOpen ? "button-black" : "button-white")}>
                        Get Started
                    </a>
                    <button
                        type="button"
                        className={classNames("header__burger", isMenuOpen && "active")}
                        aria-expanded={isMenuOpen}
                        aria-controls="menu-mobile"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <div id="menu-mobile" className={classNames("header__menu menu-mobile", isMenuOpen && "active")}>
                <nav className="menu-mobile__content _container" aria-label="Mobile">
                    <ul className="menu-mobile__list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="menu-mobile__link" onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#pricing" className="menu-mobile__button button-black button-big" onClick={closeMenu}>
                        Get Started
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
