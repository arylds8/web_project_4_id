import {
    profileName,
    profileDescription,
    nameInput,
    descriptionInput,
    popupProfileForm,
    popupEditcard
} from "./constants.js";

export const openFormProfile = () => {
    popupProfileForm.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;  
}

export const editProfile = (evt) => {
    evt.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    
    nameInput.value="";
    descriptionInput.value="";
    
    closeForm();
}


export const closeForm = (evt) => {
    popupProfileForm.classList.remove('popup_opened');
}

export const cardEdit = () => {
    popupEditcard.classList.add('popup_opened');
}

export const closeEditCard = () => {
    popupEditcard.classList.remove('popup_opened');
}

