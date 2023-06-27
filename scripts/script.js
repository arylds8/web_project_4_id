const editButton = document.querySelector(".profile__edit");
const closeButtonFormProfile = document.getElementById("close-form-profile");
const closeCardEdit = document.getElementById("close-edit-card");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector('input[name="Name"]');
const descriptionInput = document.querySelector('input[name="Description"]');
const titleImage = document.querySelector('input[name="title-image"]');
const urlImage = document.querySelector('input[name="url-image"]');
const place = document.querySelector(".element__name");
const popupProfileForm = document.getElementById("form-profile");
const popupEditcard = document.getElementById("form-card");
const popupCardEdit = document.querySelector(".profile__add");
const popupForm = document.querySelector(".popup__form");

//Inisial Load

const initialCards = [
   {
     name: "Lembah Yosemite",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
   },
   {
     name: "Danau Louise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
   },
   {
     name: "Pegunungan Gundul",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
   },
   {
     name: "Gunung Latemar",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
   },
   {
     name: "Taman Nasional Vanoise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
   },
   {
     name: "Lago di Braies",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
   }
 ];

 //get card template
 const cardTemplate = document.querySelector("#card");

 //get card container
 const cardItem = document.querySelector(".cards");

 //every card element
 //clone cart template
 
 initialCards.map((item) => {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardName = cardElement.querySelector(".card__name");
    cardImage.src = item.link;
    cardName.textContent = item.name;

    //love button
    cardElement.querySelector(".card__like").addEventListener("click", function(evt){
    evt.target.classList.toggle("card__like_active");
      });
    
    //pop up gambar
    cardImage.addEventListener("click", popupImage);
    
    //add delete button
    const deleteButton = cardElement.querySelector(".card__delete");
    deleteButton.addEventListener("click", function(evt){
    const listCard = deleteButton.closest(".card");
    listCard.remove();
    });
    
    cardItem.appendChild(cardElement);
 });
 
//popup image
//get popup image template
const popupImageTemplate = document.querySelector("#showImageTemplate");

//get card container
const popupImageContainer = document.querySelector(".bob");

function popupImage() {
  const popupImageTemplateClone = popupImageTemplate.content.cloneNode(true);
  const cardImagePopup = popupImageTemplateClone.querySelector(".popup-showImage__image");
  const cardTitlePopup = popupImageTemplateClone.querySelector(".popup-showImage__name");
  const cardUrl = this.parentElement.querySelector('.card__image');
  const cardName = this.parentElement.querySelector('.card__name');
  cardImagePopup.src = cardUrl.src;
  cardTitlePopup.textContent = cardName.textContent;

  // close popup image
  const closePopupImage = popupImageTemplateClone.querySelector("#popup-img-close");
  closePopupImage.addEventListener("click", function(evt){
  const popupParent = closePopupImage.closest(".popup-showImage");
  popupParent.remove();
  });

  popupImageContainer.appendChild(popupImageTemplateClone);
}

// Tombol open Form Profile
editButton.addEventListener("click", openFormProfile);

function openFormProfile() {
      popupProfileForm.classList.add('popup_opened');
      nameInput.value = profileName.textContent;
      descriptionInput.value = profileDescription.textContent;
   }

// Tombol Close form profile
closeButtonFormProfile.addEventListener("click", closeForm)

function closeForm() {
   popupProfileForm.classList.remove('popup_opened');
  }


// Tombol edit
popupForm.addEventListener("submit", editProfile);

function editProfile(event){
   event.preventDefault();

   profileName.textContent = nameInput.value;
   profileDescription.textContent = descriptionInput.value;

   nameInput.value="";
   descriptionInput.value="";

   closeForm();
}

//Open Form-Card
popupCardEdit.addEventListener("click", cardEdit);

function cardEdit() {
      popupEditcard.classList.add('popup_opened');
   }

// Tombol Close card edit
closeCardEdit.addEventListener("click", closeEditCard)

function closeEditCard() {
   popupEditcard.classList.remove('popup_opened');
  }


//add card 
const formCard = document.getElementById('form-card');
  
  formCard.addEventListener('submit', function(e) {
    e.preventDefault();
    const cardElement = cardTemplate.content.cloneNode(true);

    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__name");

    //love button
    cardElement.querySelector(".card__like").addEventListener("click", function(evt){
      evt.target.classList.toggle("card__like_active");
    });

    //delete button
    const deleteButton = cardElement.querySelector(".card__delete");
    deleteButton.addEventListener("click", function(evt){
    const listCard = deleteButton.closest(".card");
    listCard.remove();
    });

    //pop up gambar
    cardImage.addEventListener("click", popupImage);

    // memamasukkan nilai ke title
    cardImage.src = urlImage.value;
    cardTitle.textContent = titleImage.value;

    // dorong template ke container
    cardItem.appendChild(cardElement);

    // clean up value
    urlImage.value = '';
    titleImage.value = '';

    closeEditCard();
  });

  // pop up image

  
  