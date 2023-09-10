import {
    closeButtonFormProfile,
    closeCardEdit,
    popupProfileForm,
    popupEditcard
  } from "../utils/constants.js";
  
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

  _handleEscClose(){
    document.addEventListener("keydown", (evt) => {
        if(evt.key === "Escape"){
            this.close();
        }
      });
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
  }

  close() {
    this._popupSelector.remove('popup_opened');
  }

  setEventListener(){
    closeButtonFormProfile.addEventListener("click", this.close());
    closeCardEdit.addEventListener("click", this.close());
    popupProfileForm.addEventListener('click', (evt) => {
        if (popupProfileForm !== evt.target) return;
        this.close();
      }, false);
    popupEditcard.addEventListener('click', (evt) => {
        if (popupEditcard !== evt.target) return;
        this.close();
      }, false);
  }

}
