import React, {useEffect, useState} from "react";
import Card from "./Card";
import '../index.css';
import api from "../utilities/Api";


const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardData);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-button" onClick={onEditAvatar}>
                    <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={onCardClick}/>
                ))}
            </section>
        </main>
    )
}

export default Main;