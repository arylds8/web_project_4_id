import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(handleFormSubmit, popUpSelector) {
    super(popUpSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues(){
    const inputs = this._popUpSelector.querySelectorAll(".form__input");
    
    this._formValues = {};
    inputs.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }

  close(){
    super.close();
    this._popUpSelector.reset();
  }

  setEventListeners(){
    super.setEventListeners();
    this._popUpSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this._popUpSelector.reset();
    });
    
    const closeButton = this._popUpSelector.querySelectorAll(".popup__close");

    closeButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this._popUpSelector.reset();
    });
  }

}