const editButton = document.querySelector(".profile__edit");
const closeButtonFormProfile = document.getElementById("close-form-profile");
const closeCardEdit = document.getElementById("close-edit-card");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector('input[name="Name"]');
const descriptionInput = document.querySelector('input[name="Description"]');
const titleImage = document.querySelector('input[name="title-image"]');
const urlImage = document.querySelector('input[name="url-image"]');
const popupProfileForm = document.getElementById("form-profile");
const popupEditcard = document.getElementById("form-card");
const popupCardEdit = document.querySelector(".profile__add");
const popupForm = document.querySelector(".popup__form");
const popupImageElement = document.querySelector("#popupImage");
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import {openFormProfile, closeForm, cardEdit, closeEditCard} from "./Util.js";

//Inisial Load
const initialCards = [
   {
     name: "Lembah Yosemite",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
   },
   {
     name: "Danau Louise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
   },
   {
     name: "Pegunungan Gundul",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
   },
   {
     name: "Gunung Latemar",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
   },
   {
     name: "Taman Nasional Vanoise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
   },
   {
     name: "Lago di Braies",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
   }
 ];

const cardList = document.querySelector(".cards");
initialCards.forEach((data) => {
    const card = new Card(data);
    const cardElement = card.generatecard();
    cardList.appendChild(cardElement);
 });


// Tombol open edit profile Form
editButton.addEventListener("click", function(){
  openFormProfile();
});
 
// Tombol Submit edit profile
popupForm.addEventListener("submit", editProfile);

function editProfile(event){
  event.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  
  nameInput.value="";
  descriptionInput.value="";
  
  closeForm();
}

// Tombol Close form profile
closeButtonFormProfile.addEventListener("click", closeForm);
  

// Close profile form  with Overlay
popupProfileForm.addEventListener('click', function(evt){
  if (popupProfileForm !== evt.target) return;
  closeForm();
}, false);
  

//close form with esc button
document.addEventListener("keydown", function(evt){
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
popupEditcard.addEventListener('click', function(evt){
  if (popupEditcard !== evt.target) return;
  closeEditCard();
}, false);

//add card 
const formCard = document.getElementById('form-card');
  
formCard.addEventListener('submit', function(e) {
  e.preventDefault();

  // memamasukkan nilai ke title
  const input = {
    name: titleImage.value, 
    link: urlImage.value
    }
  
  const newPlace = new Card(input);
  const cardElement = newPlace.generatecard();
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