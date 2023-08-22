const popupImage = document.querySelector(".popup__image");
const popupImageElement = document.querySelector("#popupImage");
const popupImageCloseButton = document.querySelector("#popupImageClose");
const popupCaption = document.querySelector(".popup__image-name");
const popupImageContainer = document.querySelector("#popup-image-container");

export default class Card {
  constructor(data){
    this._name = data.name;
    this._image = data.link;
  }

  _getTemplate(){
    const cardElement = document
      .querySelector("#card")
      .content
      .querySelector(".card")
      .cloneNode(true);
    
    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupCaption.textContent = this._name;
    popupImageElement.classList.add("popup_opened");
  }

  _handleClosePopup() {
    popupImage.src = "";
    popupCaption.textContent = "";
    popupImageElement.classList.remove("popup_opened");
  }
  
  _setEventListener(){
    this._element.querySelector(".card__like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like_active");
    });

    this._element.querySelector(".card__delete").addEventListener("click", (evt) => {
      const listCard= this._element.querySelector(".card__delete").closest(".card");
      listCard.remove();
    });

    this._element.querySelector(".card__image").addEventListener("click", (evt) => {
      this._handleOpenPopup();
    });

    popupImageCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });

    popupImageContainer.addEventListener("click", (evt) => {
      const closePopupImage = this._element.querySelector(".popup__close");
      if (popupImageContainer !== evt.target) return;
      const popupContainerImage = closePopupImage.closest(".popup__container-image");
      popupContainerImage.remove();
      popupImageContainer.classList.remove('popup_opened');
    }, false);

    document.addEventListener("keydown", function(evt){
      if(evt.key === "Escape"){
        this._handleClosePopup();
      }
    });
    
  }

  generatecard(){
    this._element = this._getTemplate();
    this._setEventListener();
    this._element.querySelector(".card__name").textContent = this._name;
    this._element.querySelector(".card__image").src = this._image;
    
    return this._element;
  }
 }