
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector('input[name="Name"]');
const descriptionInput = document.querySelector('input[name="Description"]');
const popupProfileForm = document.getElementById("form-profile");
const popupEditcard = document.getElementById("form-card");


function openFormProfile() {
    popupProfileForm.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;  
}

function closeForm(evt) {
    popupProfileForm.classList.remove('popup_opened');
}

function cardEdit() {
    popupEditcard.classList.add('popup_opened');
}

function closeEditCard() {
    popupEditcard.classList.remove('popup_opened');
}

export {openFormProfile, closeForm, cardEdit, closeEditCard};