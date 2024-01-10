//edit profile
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup-edit");
const editForm = document.querySelector(".popup-edit__form");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup-edit__input-title");
const inputAbout = document.querySelector(".popup-edit__input-about");
const popupEditcloseButton = document.querySelector(
  ".popup-edit__close-button"
);

//add card
const cards = document.querySelector(".elements");
const card = document.querySelector(".element");
const popupAddCard = document.querySelector(".popup-addCard");
const addForm = document.querySelector(".popup-addCard__form");
const addCardButton = document.querySelector(".profile__add-button");
const addCardTitulo = document.querySelector(".popup-addCard__input-title");
const addCardImage = document.querySelector(".popup-addCard__input-image");
const popupAddCardCloseButton = document.querySelector(
  ".popup-addCard__close-button"
);
const addCardSaveButton = document.querySelector(".popup-addCard__save-button");

//like button
const likeButtons = document.querySelectorAll(".element__like-button");

const removeButton = document.querySelectorAll(".element__close-button");

editButton.addEventListener("click", function () {
  popupEditProfile.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

popupEditcloseButton.addEventListener("click", function () {
  popupEditProfile.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupEditProfile.classList.remove("popup_opened");

}
editForm.addEventListener("submit", handleProfileFormSubmit);



const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

document.addEventListener('DOMContentLoaded', function(){
initialCards.forEach(function(card){
  const newCard = `
    <div class="element">
    <button type="button" class="element__close-button"></button>
    <img
      class="element__image"
      src="${card.link}"
      alt="${card.name}"
    />
    <h2 class="element__info">
      <span class="element__title">${card.name}</span>
      <button type="submit" class="element__like-button"></button>
    </h2>
  </div>
    `;

    cards.insertAdjacentHTML("beforeend", newCard);

});
});


addCardButton.addEventListener("click", function () {
  popupAddCard.classList.add("popup_opened");
});

addCardSaveButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  const titulo = addCardTitulo.value.trim();
  const imagem = addCardImage.value.trim();

  if (titulo && imagem) {
    const newCard = `
    <div class="element">
    <img
      class="element__image"
      src="${imagem}"
      alt="${titulo}"
    />
    <h2 class="element__info">
      <span class="element__title">${titulo}</span>
      <button type="submit" class="element__like-button"></button>
    </h2>
  </div>
    `;

    cards.insertAdjacentHTML("beforeend", newCard);
    addForm.reset();
    popupAddCard.classList.remove("popup_opened");
  } else {
    alert("Please, fill all inputs");
  }
});



popupAddCardCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupAddCard.classList.remove("popup_opened");
});

likeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
      if (button.classList.contains("like-button_active")) {
          button.classList.remove("like-button_active");
      } else {
          button.classList.add("like-button_active");
      }
  });
});


removeButton.forEach(function(button){
  button.addEventListener("click", function(){
    card.classList.add("removeButton");
  });
});

