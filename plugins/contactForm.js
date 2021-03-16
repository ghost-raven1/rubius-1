const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const { name, phone } = form.elements;

  const formData = {
    name: name.value,
    phone: phone.value
  };

  form.reset();
  console.log(formData);
});