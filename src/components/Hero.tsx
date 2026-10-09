import { ArrowRight, Flame, Star, TrendingUp } from "lucide-react";
import { stats } from "../data/content";
import Phone from "./Phone";

const Hero = () => {
    return (
        <section id="top" className="hero" aria-labelledby="hero-title">
            <div className="hero__glow-green" aria-hidden="true" />
            <div className="hero__glow-amber" aria-hidden="true" />

            <div className="hero__container _container">
                <div className="hero__content content-hero">
                    <span className="content-hero__label label">
                        <Star fill="currentColor" aria-hidden="true" />
                        New: adaptive focus timer
                    </span>

                    <h1 id="hero-title" className="content-hero__title">
                        Do your best work,{" "}
                        <span className="content-hero__accent">
                            one flow
                            <svg viewBox="0 0 220 12" preserveAspectRatio="none" className="content-hero__underline" aria-hidden="true">
                                <path d="M2 9C50 3 120 1 218 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                            </svg>
                        </span>{" "}
                        at a time.
                    </h1>

                    <p className="content-hero__text">
                        FocusFlow turns scattered days into calm, deep work. Smart focus sessions, distraction blocking and gentle insights help you
                        finish what matters — without burning out.
                    </p>

                    <div className="content-hero__buttons">
                        <a href="#pricing" className="content-hero__button button-accent button-big">
                            Start focusing free
                            <ArrowRight aria-hidden="true" />
                        </a>
                        <a href="#how-it-works" className="content-hero__button button-white button-big">
                            See how it works
                        </a>
                    </div>
                    <p className="content-hero__note">Free forever plan · No credit card required</p>

                    <dl className="content-hero__stats">
                        {stats.map((stat) => (
                            <div key={stat.label} className="content-hero__stat">
                                <dt className="visually-hidden">{stat.label}</dt>
                                <dd className="content-hero__value">{stat.value}</dd>
                                <dd className="content-hero__caption">{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="hero__image image-hero">
                    <div className="image-hero__bg" aria-hidden="true" />
                    <div className="image-hero__phone">
                        <Phone />
                    </div>

                    <div className="image-hero__streak card-hero" aria-hidden="true">
                        <span className="card-hero__icon">
                            <Flame />
                        </span>
                        <div>
                            <p className="card-hero__caption">Focus streak</p>
                            <p className="card-hero__value">12 days</p>
                        </div>
                    </div>

                    <div className="image-hero__week card-hero" aria-hidden="true">
                        <span className="card-hero__icon">
                            <TrendingUp />
                        </span>
                        <div>
                            <p className="card-hero__caption">This week</p>
                            <p className="card-hero__value">14h deep work</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
