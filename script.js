document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  resetErrors();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  let isValid = true;
  
  if(name.length === 0) {
      showError("name", "Пожалуйста, введите ваше имя");
      isValid = false;
  } else if(name.length < 2) {
      showError("name", "Имя должно содержать минимум 2 символа");
      isValid = false;
  } else if(/[0-9]/.test(name)) {
      showError("name", "Имя не должно содержать цифры");
      isValid = false;
  }
  
  if(email.length === 0) {
      showError("email", "Пожалуйста, введите email");
      isValid = false;
  } else if(!isValidEmail(email)) {
      showError("email", "Пожалуйста, введите корректный email");
      isValid = false;
  }
  
  if(message.length === 0) {
      showError("message", "Пожалуйста, введите сообщение");
      isValid = false;
  } else if(message.length < 15) {
      showError("message", "Сообщение должно содержать минимум 15 символов");
      isValid = false;
  }
  
  if(isValid) {
      showSuccess();
      this.reset();
  }
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(fieldId, errorText) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(`${fieldId}-error`);
  
  field.classList.add("error");
  errorElement.textContent = errorText;
  errorElement.classList.add("show");
  
  setTimeout(() => {
      field.classList.remove("error");
      errorElement.classList.remove("show");
  }, 5000);
}

function resetErrors() {
  const errors = document.querySelectorAll(".error-message");
  const fields = document.querySelectorAll(".form-group input, .form-group textarea");
  
  errors.forEach(error => error.classList.remove("show"));
  fields.forEach(field => field.classList.remove("error"));
}

function showSuccess() {
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.add("show");
  
  setTimeout(() => {
      successMessage.classList.remove("show");
  }, 3500);
}
