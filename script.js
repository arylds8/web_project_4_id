const profileButton = document.querySelector(".button__add");
const closeButton = document.querySelector(".button__close");
const editButton = document.querySelector(".button__edit");
const saveButton = document.querySelector(".button__save");

editButton.addEventListener("click", openForm);

function openForm() {
    document.querySelector(".edit-form").style.display = "block";
   }


closeButton.addEventListener("click", closeForm )

function closeForm() {
   document.querySelector(".edit-form").style.display = "none";
  }

function renderAdded(){
   
}

saveButton.addEventListener("click", addItem);


function addItem(){
   const name = document.querySelector('input[name="Name"]');
   const description = document.querySelector('input[name="Description"]');
   const profile = document.querySelector(".profile__info");
   

   profile.innerHTML= `
      <div class="profile__info">
         <h1 class="profile__name">${name.value}</h1> 
         <h2 class="profile__description">${description.value}</h2>
         <button class="button__edit"><img src="./images/edit__button.svg" alt="edit-button"></button>
      </div>
  `;

   closeForm();
}