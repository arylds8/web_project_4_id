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
    this._popupSelector.classList.remove('popup_opened');
  }

  setEventListener(){
    this._handleEscClose()
    this._popupSelector.querySelector(".popup__close").addEventListener("click", ()=>{
      this.close();
    })
    this._popupSelector.addEventListener('click', (evt) => {
        if (this._popupSelector !== evt.target) return;
        this.close();
      }, false);
  }

}
