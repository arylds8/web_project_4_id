import 
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
    
  }

}
