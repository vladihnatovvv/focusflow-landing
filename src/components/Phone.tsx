import { CheckCircle2, Circle, Pause, Volume2 } from "lucide-react";
import { classNames } from "../utils/classNames";

const RADIUS = 84;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PROGRESS = 0.64;

const tasks = [
    { label: "Draft Q4 roadmap", done: true },
    { label: "Review design specs", done: false },
    { label: "Reply to investors", done: false }
];

// App screen is built with markup, so it stays sharp on any screen
const Phone = () => {
    return (
        <div className="phone" role="img" aria-label="FocusFlow app showing a 25 minute deep work session in progress">
            <div className="phone__screen">
                <div className="phone__status">
                    <span>9:41</span>
                    <span className="phone__island" />
                    <span>100%</span>
                </div>

                <p className="phone__label">Deep work</p>
                <p className="phone__task">Draft Q4 roadmap</p>

                <div className="phone__timer">
                    <svg viewBox="0 0 200 200" className="phone__ring" aria-hidden="true">
                        <defs>
                            <linearGradient id="phone-ring" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#2bb89e" />
                                <stop offset="100%" stopColor="#f7b84b" />
                            </linearGradient>
                        </defs>
                        <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="12" />
                        <circle
                            cx="100"
                            cy="100"
                            r={RADIUS}
                            fill="none"
                            stroke="url(#phone-ring)"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={CIRCUMFERENCE * (1 - PROGRESS)}
                        />
                    </svg>
                    <div className="phone__time">
                        <span className="phone__time-value">16:04</span>
                        <span className="phone__time-total">of 25:00</span>
                    </div>
                </div>

                <div className="phone__controls">
                    <span className="phone__control">
                        <Volume2 />
                    </span>
                    <span className="phone__control phone__control-main">
                        <Pause fill="currentColor" />
                    </span>
                    <span className="phone__control">+5</span>
                </div>

                <ul className="phone__list">
                    {tasks.map((task) => (
                        <li key={task.label} className={classNames("phone__item", task.done && "done")}>
                            {task.done ? <CheckCircle2 className="phone__item-icon" /> : <Circle className="phone__item-icon" />}
                            <span className="phone__item-text">{task.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Phone;
