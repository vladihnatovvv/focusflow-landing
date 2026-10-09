import { classNames } from "../utils/classNames";

interface LogoProps {
    light?: boolean;
}

const Logo = ({ light = false }: LogoProps) => {
    return (
        <a href="#top" className={classNames("logo", light && "light")} aria-label="FocusFlow home">
            <svg viewBox="0 0 32 32" className="logo__icon" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill={light ? "#fff" : "#0b1220"} />
                <circle cx="16" cy="16" r="8.5" fill="none" stroke={light ? "#cdebe3" : "#2a3345"} strokeWidth="3" />
                <path d="M16 7.5a8.5 8.5 0 0 1 8.5 8.5" fill="none" stroke={light ? "#0e7a6b" : "#2bb89e"} strokeWidth="3" strokeLinecap="round" />
                <circle cx="16" cy="16" r="2.5" fill="#f5a524" />
            </svg>
            <span className="logo__text">FocusFlow</span>
        </a>
    );
};

export default Logo;
