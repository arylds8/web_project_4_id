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
        showInputError(popupForm, formInput, formInput.validationMessage);
        popupForm.querySelector(".popup__save").classList.add("popup__save_inactive");
        popupForm.querySelector(".popup__save").disabled = true;
      } else {
        hideInputError(popupForm, formInput);
        popupForm.querySelector(".popup__save").classList.remove("popup__save_inactive");
        popupForm.querySelector(".popup__save").disabled = false;
      }
    }

    _showInputError(){
      const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
      formInput.classList.add("popup__input_type_error");
      errorElement.textContent = errorMessage;
      errorElement.classList.add("popup__input-error_active");
    }

    _hideInputError(){
      const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
      formInput.classList.remove("popup__input_type_error");
      errorElement.classList.remove("popup__input-error_active");
      errorElement.textContent = "";
    }

    _setEventListeners(formElement){
      formElement.querySelector(this._inputSelector).addEventListener("input", () => {
        isValid(formElement, formElement.querySelector(this._inputSelector));
      });
    }

    enableValidation(){
      this._formSelector.addEventListener("submit", () =>{
        evt.preventDefault();
      });
      setEventListeners(this._formSelector);
    }

  }
 

  

  
  // // Validasi form
  // const popupForm = document.querySelector(".popup__form");
  // const formInput = popupForm.querySelector(".popup__input");
  // const formError = popupForm.querySelector(`.${formInput.id}-error`);

  // const showInputError = (popupForm, formInput, errorMessage) => {
  //   const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
  //   formInput.classList.add("popup__input_type_error");// red border bottom 
  //   errorElement.textContent = errorMessage;
  //   errorElement.classList.add("popup__input-error_active");//opacity 1
  // }

  // const hideInputError = (popupForm, formInput) => {
  //   const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
  //   formInput.classList.remove("popup__input_type_error");
  //   errorElement.classList.remove("popup__input-error_active");
  //   errorElement.textContent = "";
  // };

  // const isValid = (popupForm, formInput) => {
  //   if (!formInput.validity.valid) {
  //     showInputError(popupForm, formInput, formInput.validationMessage);
  //     popupForm.querySelector(".popup__save").classList.add("popup__save_inactive");
  //     popupForm.querySelector(".popup__save").disabled = true;
  //   } else {
  //     hideInputError(popupForm, formInput);
  //     popupForm.querySelector(".popup__save").classList.remove("popup__save_inactive");
  //     popupForm.querySelector(".popup__save").disabled = false;
  //   }
  // };

  // const setEventListeners = (popup__form) => {
  //   // Temukan semua kolom di dalam formulir, dan
  //   // membuat array dari kolom tersebut menggunakan metode Array.from()
  //   const inputList = Array.from(popup__form.querySelectorAll(".popup__input"));
  
  //   // Perulangan array yang dihasilkan
  //   inputList.forEach((inputElement) => {
  //     // tambahkan input event handler ke setiap kolom
  //     inputElement.addEventListener("input", () => {
  //       // Panggil fungsi isValid() di dalam callback,
  //       // dan teruskan formulir dan elemen yang akan diperiksa
  //       isValid(popup__form, inputElement)
  //     });
  //   });
  // };
  
  // function enableValidation (params) {
  //   const {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = params; 
  //   // Hal ini akan menemukan semua formulir dengan kelas yang ditentukan di DOM, dan
  //   // membuat array dari kolom tersebut menggunakan metode Array.from()
  //   const formList = Array.from(document.querySelectorAll(".popup__form"));
  
  //   // Perulangan array yang dihasilkan
  //   formList.forEach((formElement) => {
  //     formElement.addEventListener("submit", (evt) => {
  //       // Batalkan perilaku bawaan untuk setiap formulir
  //       evt.preventDefault();
  //     });
  
  //     // Panggil fungsi setEventListeners() untuk setiap formulir,
  //     // mengambil elemen formulir sebagai argumen
  //     setEventListeners(formElement);
  //   });
  // };
  

