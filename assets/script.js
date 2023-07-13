const form = document.querySelector("form");
const successEmailPlaceholder = document.querySelector(".success__email");
const card = document.querySelector(".card");
const success = document.querySelector(".success");
const successSubmitButton = document.querySelector(".success__submit");
const errorMessage = document.querySelector(".errorMessage");

const toggleHidden = () => {
  card.classList.toggle("hidden");
  success.classList.toggle("hidden");
};

const validateEmail = (value) => {
  return String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const handleSubmit = (e) => {
  e.preventDefault();
  const emailInput = document.querySelector("#emailInput");
  console.log(validateEmail(emailInput.value));
  if (emailInput.value && validateEmail(emailInput.value)) {
    successEmailPlaceholder.innerHTML = emailInput.value;
    toggleHidden();
  } else {
    emailInput.classList.toggle("error");
    errorMessage.classList.toggle("open");
  }
};

form.addEventListener("submit", handleSubmit);
successSubmitButton.addEventListener("click", () => {
  toggleHidden();
  window.location = "/";
});
