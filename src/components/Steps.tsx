import { steps } from "../data/content";
import Title from "./Title";

const Steps = () => {
    return (
        <section id="how-it-works" className="steps" aria-labelledby="steps-title">
            <div className="steps__container _container">
                <Title
                    id="steps-title"
                    label="How it works"
                    text="From scattered to focused in three steps"
                    description="No complicated setup. Most people finish their first focus session within two minutes of installing."
                />

                <div className="steps__content">
                    <div className="steps__line" aria-hidden="true" />
                    <ol className="steps__list">
                        {steps.map((step, index) => (
                            <li key={step.title} className="steps__item">
                                <div className="steps__number-container">
                                    <span className="steps__number">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="steps__info">
                                    <h3 className="steps__name">{step.title}</h3>
                                    <p className="steps__text">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Steps;
