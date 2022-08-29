import React from "react";
import '../index.css';

function ImagePopup({card, onClose}) {

    return (
        <div className={`popup popup_type_image ${card.link && 'popup_opened'}`}>
            <div className="popup__container popup__container_type_image">
                <figure className="popup__card">
                    <img src={card.link} alt={card.name} className="popup__image" />
                        <figcaption className="popup__image-caption">{card.name}</figcaption>
                        <button type="button" className="popup__close-button" onClick={onClose}></button>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup