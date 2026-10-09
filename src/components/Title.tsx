interface TitleProps {
    id: string;
    label: string;
    text: string;
    description?: string;
}

const Title = ({ id, label, text, description }: TitleProps) => {
    return (
        <div className="title">
            <span className="title__label label">{label}</span>
            <h2 id={id} className="title__text">
                {text}
            </h2>
            {description && <p className="title__description">{description}</p>}
        </div>
    );
};

export default Title;
