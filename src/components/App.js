import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

const App = () => {
    const [ isEditProfilePopupOpen, setEditProfilePopupOpen ] = useState(false);
    const [ isAddPlacePopupOpen, setAddPlacePopupOpen ] = useState(false);
    const [ isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = useState(false);
    const [ selectedCard, setSelectedCard ] = useState({});

    const handleCardClick = (card) => {
        setSelectedCard(card)
    };
    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    };
    const handleEitProfileClick = () => {
        setEditProfilePopupOpen(true);
    };
    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    };

    const closeAllPopups = () => {
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard({});
    }

    return (
        <div className={'page'}>

            <Header/>

            <Main
                onEditProfile={handleEitProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer/>

            <PopupWithForm
                name={"profile"}
                title={"Редактировать профиль"}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                buttonText={"Сохранить"}
                children={
                    <>
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя"
                            id="name-input"
                            className="popup__input popup__input_type_name"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                        <span className="popup__input-error name-input-error"/>
                        <input
                            type="text"
                            name="about"
                            placeholder="О себе"
                            id="about-input"
                            className="popup__input popup__input_type_description"
                            minLength="2"
                            maxLength="200"
                            required
                        />
                        <span className="popup__input-error about-input-error"></span>
                    </>
                }
            />


            <PopupWithForm
                name={"place"}
                title={"Новое место"}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText={"Сохранить"}
                children={
                    <>
                        <input
                            type="text"
                            name="place"
                            placeholder="Название"
                            id="title-input"
                            className="popup__input popup__input_type_title"
                            minLength="2"
                            maxLength="30"
                            required
                        />
                        <span className="popup__input-error title-input-error"></span>
                        <input
                            type="url"
                            name="link"
                            placeholder="Ссылка на картинку"
                            id="link-input"
                            className="popup__input popup__input_type_link"
                            required
                        />
                        <span className="popup__input-error link-input-error"></span>
                    </>
                }
            />

            <PopupWithForm
                name={"change-avatar"}
                title={"Обновить аватар"}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                buttonText={"Сохранить"}
                children={
                    <>
                        <input
                            type="url"
                            name="avatar"
                            placeholder="Ссылка на картинку"
                            id="avatar-link-input"
                            className="popup__input popup__input_type_avatar-link"
                            required
                        />
                        <span className="popup__input-error avatar-link-input-error"></span>
                    </>
                }
            />

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </div>
    );
};

export default App;