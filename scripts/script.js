const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector('input[name="Name"]');
const descriptionInput = document.querySelector('input[name="Description"]');
const place = document.querySelector(".element__name");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");


// Tombol Edit
editButton.addEventListener("click", openForm);

function openForm() {
      popup.classList.add('popup_opened');
      nameInput.value = profileName.textContent;
      descriptionInput.value = profileDescription.textContent;
   }

// Tombol Close
closeButton.addEventListener("click", closeForm)

function closeForm() {
   popup.classList.remove('popup_opened');
  }


// Tombol Save
popupForm.addEventListener("submit", addItem);

function addItem(event){
   
   event.preventDefault();

   profileName.textContent = nameInput.value;
   profileDescription.textContent = descriptionInput.value;

   nameInput.value="";
   descriptionInput.value="";

   closeForm();
}

//Tombol Like tombol pertama
// const likeButton = document.querySelector(".element__like");
// const likeButtonActive = document.querySelector("[name='fill']");
// const likeButtonNotActive = document.querySelector("[name='no-fill']");

// likeButton.addEventListener("click", liked);

// let toggle = true;

// function liked() {

//    if (toggle) {
//       likeButtonActive.classList.remove("element__like_not-active");
//       likeButtonActive.classList.add("element__like_active");
   
//       likeButtonNotActive.classList.remove("element__like_active");
//       likeButtonNotActive.classList.add("element__like_not-active");

//       toggle = false
//    } else {
//       likeButtonActive.classList.add("element__like_not-active");
//       likeButtonActive.classList.remove("element__like_active");
   
//       likeButtonNotActive.classList.add("element__like_active");
//       likeButtonNotActive.classList.remove("element__like_not-active");
//       toggle = true
//    }
   
// }

// const likeButton = document.querySelectorAll(".element__like");
// const likeButtonActive = document.querySelectorAll("[name='fill']");
// const likeButtonNotActive = document.querySelectorAll("[name='no-fill']");

// for (let i = 0; i < likeButton.length; i++) {
//    likeButton[i].addEventListener("click", function(){
//          likeButtonActive[i].classList.toggle("element__like_not-active");
//          likeButtonActive[i].classList.toggle("element__like_active");
      
//          likeButtonNotActive[i].classList.toggle("element__like_active");
//          likeButtonNotActive[i].classList.toggle("element__like_not-active");
//    }); 
// }
