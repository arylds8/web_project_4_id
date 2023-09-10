import "./styles/index.css";
import {
  initialCards,
  cardList,
  cardListSelector,
  editButton,
  closeButtonFormProfile,
  closeCardEdit,
  titleImage,
  urlImage,
  formCard,
  popupCardEdit,
  popupForm,
  popupProfileForm,
  popupEditcard,
} from "../utils/constants.js";
import FormValidator from "../scripts/FormValidator.js";
import Card from "../components/Card.js";
import {editProfile, openFormProfile, closeForm, cardEdit, closeEditCard} from "../utils/utils.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
// import PopupWithImage from "../components/PopupWithImage";
// Initial Load
const loadInitialCards = new Section ({
  items: initialCards,
  renderer : (item) => {
    const card = new Card(item, "#card");

    const cardElement = card.generateCard();

    loadInitialCards.setItem(cardElement);
  }
}, cardListSelector);
loadInitialCards.renderItems();


//Initial class Popup
const popupfunction = new Popup(popupProfileForm);
// const popupWithImagefunction = new PopupWithImage();

// Tombol open edit profile Form
editButton.addEventListener("click", function(){
  popupfunction.open();
});
 
// Tombol Submit edit profile
popupForm.addEventListener("submit", editProfile);


// Tombol Close form profile
closeButtonFormProfile.addEventListener("click", closeForm);
  
// Close profile form  with Overlay
popupProfileForm.addEventListener('click', (evt) => {
  if (popupProfileForm !== evt.target) return;
  closeForm();
}, false);
  

//close form with esc button
document.addEventListener("keydown", (evt) => {
  if(evt.key === "Escape"){
    closeForm();
    closeEditCard();
  }
});


//Open Form-Card
popupCardEdit.addEventListener("click", cardEdit);

// Tombol Close card edit
closeCardEdit.addEventListener("click", closeEditCard);


// Close add-card Form with Overlay
popupEditcard.addEventListener('click', (evt) => {
  if (popupEditcard !== evt.target) return;
  closeEditCard();
}, false);

//add card 
formCard.addEventListener('submit', (e) => {
  e.preventDefault();

  // memamasukkan nilai ke title
  const input = {
    name: titleImage.value, 
    link: urlImage.value
    }
  
  const newPlace = new Card(input);
  const cardElement = newPlace.generateCard();
  cardList.prepend(cardElement);
  
  closeEditCard();
});

//Validasi Form

const editProfilepopup = document.querySelector("#form-profile");
const editProfileForm = editProfilepopup.querySelector(".popup__form");
const editProfileFormValidator = new FormValidator({
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: ".popup__save_inactive",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__input-error_active"
}, editProfileForm);

editProfileFormValidator.enableValidation();

const addCardFormpopup = document.querySelector("#form-card");
const addCardForm = addCardFormpopup.querySelector(".popup__form");
const addCardFormValidator = new FormValidator({
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: ".popup__save_inactive",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__input-error_active"
}, addCardForm);

addCardFormValidator.enableValidation();