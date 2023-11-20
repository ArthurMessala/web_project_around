const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup-edit__close-button");
const popup = document.querySelector(".popup");
const editForm = document.querySelector(".popup-edit__form");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup-edit__input-title");
const inputAbout = document.querySelector(".popup-edit__input-about");
const likeButton = document.querySelector(".element__like-button");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.remove("popup_opened");
}

editForm.addEventListener("submit", handleProfileFormSubmit);
