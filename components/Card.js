const popupImage = document.querySelector(".popup__image");
const popupImageElement = document.querySelector("#popupImage");
const popupImageCloseButton = document.querySelector("#popupImageClose");
const popupCaption = document.querySelector(".popup__image-name");
const popupImageContainer = document.querySelector("#popup-image-container");

export default class Card {
  constructor(data, cardSelector, handleCardClick){
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate(){
    const cardElement = document
      .querySelector(this._cardSelector)
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

    this._element.querySelector(".card__delete").addEventListener("click", () => {
      const listCard= this._element.querySelector(".card__delete").closest(".card");
      listCard.remove();
    });

    this._element.querySelector(".card__image").addEventListener("click", () => {
      this._handleOpenPopup();
    });

    popupImageCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });

    popupImageElement.addEventListener("click", (evt) => {
      if (popupImageElement !== evt.target) return;
      this._handleClosePopup();
    }, false);

    document.addEventListener("keydown", (evt) => {
      if(evt.key === "Escape"){
        this._handleClosePopup();
      }
    });
    
  }


  generateCard(){
    this._element = this._getTemplate();
    this._setEventListener();
    this._element.querySelector(".card__name").textContent = this._name;
    this._element.querySelector(".card__image").src = this._image;
    
    return this._element;
  }
 }