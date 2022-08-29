import React from 'react';

const Card = ({card, onCardClick}) => {

    const handleCardClick = () => {
        onCardClick(card);
    };

    return (
        <div className="element">
            <img src={card.link} alt={card.name}  className="element__image" onClick={handleCardClick}/>
                <h2 className="element__title">{card.name}</h2>
                <div className="element__likes">
                    <button className="element__button element__button-like" type="button"></button>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
        </div>
    );
};

export default Card;