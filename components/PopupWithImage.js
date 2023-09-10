import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popUpSelector) {
    super(popUpSelector);
  }

  open(){
    super.open();
    this.popUpSelector.src = this._image;
    this.popUpSelector.textContent = this._name;
  }
}