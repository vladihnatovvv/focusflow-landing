import { useState } from "react";
import { Check } from "lucide-react";
import { plans, type Plan } from "../data/content";
import { classNames } from "../utils/classNames";
import Title from "./Title";

type Billing = "monthly" | "yearly";

const billingOptions: Billing[] = ["monthly", "yearly"];

interface PlanCardProps {
    plan: Plan;
    billing: Billing;
}

const getPeriod = (plan: Plan, price: number) => {
    if (price === 0) return "forever";
    if (plan.perUser) return "/ user / mo";

    return "/ month";
};

const PlanCard = ({ plan, billing }: PlanCardProps) => {
    const price = billing === "monthly" ? plan.monthly : plan.yearly;
    const isBilledYearly = billing === "yearly" && price > 0;

    return (
        <li className={classNames("pricing__plan plan", plan.highlighted && "popular")}>
            {plan.highlighted && <span className="plan__badge">Most popular</span>}

            <h3 className="plan__name">{plan.name}</h3>
            <p className="plan__text">{plan.description}</p>

            <p className="plan__price">
                <span className="plan__value">${price}</span>
                <span className="plan__period">{getPeriod(plan, price)}</span>
            </p>
            <p className="plan__billed">{isBilledYearly && `Billed $${price * 12} yearly`}</p>

            <ul className="plan__list">
                {plan.features.map((feature) => (
                    <li key={feature} className="plan__item">
                        <Check className="plan__check" aria-hidden="true" />
                        {feature}
                    </li>
                ))}
            </ul>

            <a href="#contact" className={classNames("plan__button", plan.highlighted ? "button-accent" : "button-white")}>
                {plan.cta}
            </a>
        </li>
    );
};

const Pricing = () => {
    const [billing, setBilling] = useState<Billing>("yearly");

    return (
        <section id="pricing" className="pricing" aria-labelledby="pricing-title">
            <div className="pricing__container _container">
                <Title
                    id="pricing-title"
                    label="Pricing"
                    text="Simple pricing that grows with you"
                    description="Start free and upgrade when you're ready. Cancel anytime."
                />

                <div className="pricing__switch">
                    <div className="switch-pricing" role="group" aria-label="Billing period">
                        {billingOptions.map((option) => (
                            <button
                                key={option}
                                type="button"
                                className={classNames("switch-pricing__button", billing === option && "active")}
                                aria-pressed={billing === option}
                                onClick={() => setBilling(option)}
                            >
                                {option === "monthly" ? "Monthly" : "Yearly"}
                                {option === "yearly" && <span className="switch-pricing__discount">−30%</span>}
                            </button>
                        ))}
                    </div>
                </div>

                <ul className="pricing__list">
                    {plans.map((plan) => (
                        <PlanCard key={plan.name} plan={plan} billing={billing} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Pricing;
