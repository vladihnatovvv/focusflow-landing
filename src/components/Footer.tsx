import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { footerLinks } from "../data/content";
import Logo from "./Logo";

const CURRENT_YEAR = new Date().getFullYear();

const socials: { label: string; href: string; icon: ReactNode }[] = [
    {
        label: "X (Twitter)",
        href: "https://x.com",
        icon: (
            <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.36 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z" />
        )
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3.1 0-4.1.06-3.6.17-5.6 2.2-5.8 5.8C2 8.9 2 9.3 2 12s0 3.1.06 4.1c.17 3.6 2.2 5.6 5.8 5.8 1.1.05 1.4.06 4.1.06s3.1 0 4.1-.06c3.6-.17 5.6-2.2 5.8-5.8.05-1.1.06-1.4.06-4.1s0-3.1-.06-4.1c-.17-3.6-2.2-5.6-5.8-5.8C15.1 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .06 2.7.12 4 1.4 4.1 4.1.05 1.1.06 1.4.06 4s0 3-.06 4c-.12 2.7-1.4 4-4.1 4.1-1.1.05-1.4.06-4 .06s-3 0-4-.06c-2.7-.12-4-1.4-4.1-4.1C3.8 15 3.8 14.7 3.8 12s0-3 .06-4C4 5.3 5.3 4 8 3.9c1-.05 1.3-.06 4-.06Z" />
        )
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        )
    },
    {
        label: "YouTube",
        href: "https://youtube.com",
        icon: (
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        )
    }
];

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Demo only: in production the email goes to a mailing list service
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitted(true);
        setEmail("");
    };

    if (isSubmitted) {
        return (
            <p className="form-footer__success" role="status">
                Thanks! Check your inbox — your first focus tips are on the way.
            </p>
        );
    }

    return (
        <form className="form-footer" onSubmit={handleSubmit}>
            <label htmlFor="subscribe-email" className="visually-hidden">
                Email address
            </label>
            <input
                id="subscribe-email"
                type="email"
                className="form-footer__input"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="form-footer__button button-accent">
                Subscribe
                <ArrowRight aria-hidden="true" />
            </button>
        </form>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer__container _container">
                <div className="footer__up up-footer">
                    <div className="up-footer__info">
                        <h2 className="up-footer__title">Ready to find your flow?</h2>
                        <p className="up-footer__text">Get one practical focus tip every week and be the first to hear about new features.</p>
                        <div className="up-footer__form">
                            <SubscribeForm />
                        </div>
                    </div>

                    <address className="up-footer__contacts">
                        <a href="mailto:hello@focusflow.app" className="up-footer__contact contact-footer">
                            <Mail className="contact-footer__icon" aria-hidden="true" />
                            <span>
                                <span className="contact-footer__caption">Write to us</span>
                                <span className="contact-footer__value">hello@focusflow.app</span>
                            </span>
                        </a>
                        <div className="up-footer__contact contact-footer">
                            <MapPin className="contact-footer__icon" aria-hidden="true" />
                            <span>
                                <span className="contact-footer__caption">Studio</span>
                                <span className="contact-footer__value">Kyiv · Remote-first</span>
                            </span>
                        </div>
                    </address>
                </div>

                <div className="footer__main main-footer">
                    <div className="main-footer__info info-footer">
                        <Logo light />
                        <p className="info-footer__text">The calm productivity app for deep, meaningful work.</p>
                        <ul className="info-footer__socials">
                            {socials.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        className="info-footer__social"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            {social.icon}
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {footerLinks.map((group) => (
                        <nav key={group.title} className="main-footer__links links-footer" aria-label={group.title}>
                            <h3 className="links-footer__title">{group.title}</h3>
                            <ul className="links-footer__list">
                                {group.links.map((link) => (
                                    <li key={link.label} className="links-footer__item">
                                        <a href={link.href} className="links-footer__link">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>

            <div className="footer__down down-footer">
                <div className="down-footer__container _container">
                    <p>© {CURRENT_YEAR} FocusFlow. All rights reserved.</p>
                    <p>Made for people who want to do their best work.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
