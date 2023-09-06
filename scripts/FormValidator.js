  export default class FormValidator{
    constructor(selector, formElement){
     this._inputSelector = selector.inputSelector;
     this._submitButtonSelector = selector.submitButtonSelector;
     this._inactiveButtonClass = selector.inactiveButtonClass;
     this._inputErrorClass = selector.inputErrorClass;
     this._errorClass = selector.errorClass;
     this._formSelector = formElement;
    }

    _isValid(popupForm, formInput){
      if (!formInput.validity.valid) {
        this._showInputError(popupForm, formInput, formInput.validationMessage);
        popupForm.querySelector(this._submitButtonSelector).classList.add("popup__save_inactive");
        popupForm.querySelector(this._submitButtonSelector).disabled = true;
      } else {
        this._hideInputError(popupForm, formInput);
        popupForm.querySelector(this._submitButtonSelector).classList.remove("popup__save_inactive");
        popupForm.querySelector(this._submitButtonSelector).disabled = false;
      }
    }

    _showInputError(popupForm, formInput, errorMessage){
      const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
      formInput.classList.add("popup__input_type_error");
      errorElement.textContent = errorMessage;
      errorElement.classList.add("popup__input-error_active");
    }

    _hideInputError(popupForm, formInput){
      const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
      formInput.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__input-error_active");
      errorElement.textContent = "";
    }

    _setEventListeners(formElement){
      const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._isValid(formElement, inputElement)
        });
      });
    }

    enableValidation(){
      this._formSelector.addEventListener("submit", (evt) =>{
        evt.preventDefault();
      });
      this._setEventListeners(this._formSelector);
    }

  }