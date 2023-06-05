const editButton = document.querySelector(".profile__edit");
const saveButton = document.querySelector(".popup__save");
const closeButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector('input[name="Name"]');
const descriptionInput = document.querySelector('input[name="Description"]');
const place = document.querySelector(".element__name");
const page = document.querySelector(".page");


// Tombol Edit
editButton.addEventListener("click", openForm);

function openForm() {
      document.querySelector(".popup").classList.add('popup_active');
      page.classList.add("page_hidden");
   }

// Tombol Close
closeButton.addEventListener("click", closeForm )

function closeForm() {
   document.querySelector(".popup").classList.remove('popup_active');
   page.classList.remove("page_hidden");
  }


// Tombol Save
saveButton.addEventListener("click", addItem);

function addItem(){
   
   profileName.textContent ="";
   profileDescription.textContent="";

   profileName.insertAdjacentText("afterbegin", nameInput.value);
   profileDescription.insertAdjacentText("afterbegin", descriptionInput.value);

   nameInput.value="";
   descriptionInput.value="";

   page.classList.remove("page_hidden");

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

const likeButton = document.querySelectorAll(".element__like");
const likeButtonActive = document.querySelectorAll("[name='fill']");
const likeButtonNotActive = document.querySelectorAll("[name='no-fill']");

for (let i = 0; i < likeButton.length; i++) {
   likeButton[i].addEventListener("click", function(){
         likeButtonActive[i].classList.toggle("element__like_not-active");
         likeButtonActive[i].classList.toggle("element__like_active");
      
         likeButtonNotActive[i].classList.toggle("element__like_active");
         likeButtonNotActive[i].classList.toggle("element__like_not-active");
   }); 
}
