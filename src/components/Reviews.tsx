import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import Title from "./Title";

const RATING = 5;

const Reviews = () => {
    return (
        <section className="reviews" aria-labelledby="reviews-title">
            <div className="reviews__container _container">
                <Title id="reviews-title" label="Testimonials" text="Loved by people who get things done" />

                <ul className="reviews__list">
                    {testimonials.map((review) => (
                        <li key={review.name} className="reviews__item review">
                            <div className="review__top">
                                <div className="review__stars" aria-label={`Rated ${RATING} out of 5`}>
                                    {Array.from({ length: RATING }, (_, index) => (
                                        <Star key={index} fill="currentColor" aria-hidden="true" />
                                    ))}
                                </div>
                                <Quote className="review__quote-icon" aria-hidden="true" />
                            </div>

                            <figure className="review__body">
                                <blockquote className="review__text">“{review.quote}”</blockquote>
                                <figcaption className="review__author">
                                    <span className="review__avatar">{review.initials}</span>
                                    <span>
                                        <span className="review__name">{review.name}</span>
                                        <span className="review__role">{review.role}</span>
                                    </span>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Reviews;
