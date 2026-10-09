import { features } from "../data/content";
import Title from "./Title";

const Features = () => {
    return (
        <section id="features" className="features" aria-labelledby="features-title">
            <div className="features__container _container">
                <Title
                    id="features-title"
                    label="Features"
                    text="Everything you need to stay in the zone"
                    description="Thoughtful tools that remove friction and noise, so getting into deep focus feels effortless."
                />

                <ul className="features__list">
                    {features.map(({ icon: Icon, title, description }) => (
                        <li key={title} className="features__item">
                            <span className="features__icon">
                                <Icon aria-hidden="true" />
                            </span>
                            <h3 className="features__name">{title}</h3>
                            <p className="features__text">{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Features;
