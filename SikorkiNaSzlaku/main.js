// NAVBAR ON CLICK
const burger = document.getElementsByClassName("burger");
const navSlider = () => {
  const nav = document.querySelector(".desktop");
  // TOGGLE NAVBAR
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    // BURGER ICON ANIMATE
    burger.classList.toggle("animate");
  });
};
navSlider();

// CONTACT FORM
const inputs = document.querySelectorAll("input");

const patterns = {
  name: /^\w+\s\w+$/,
  mail: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^\d{3}.?\d{3}.?\d{3}$/,
  subject: /[\w\s]*/,
};

validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
