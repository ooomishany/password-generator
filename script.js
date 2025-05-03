

document.getElementById("feedbackForm").addEventListener("submit", function(event){

    event.preventDefault(); // отменить стандартную отправку 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name.length == 0) {
        showError("name", "Введите имя");
        return; // Прерываем проверку
      }
      else if(name.length < 2) {
        showError("name", "Имя слишком короткое");
        return;
      }

    if(message.length == 0){
        showError("message", "Введите сообщение");
    }

    if(email.length == 0){
        showError("email", "Введите почту");
        return;
    } else if(!email.includes("@") || !email.includes(".")){
        showError("email", "Email должен содержать @ и точку")
        return;
    }

    alert("Спасибо за сообщение!");
    form.reset(); 
})

function showError(fieldId, errorText) {
    const field = document.getElementById(fieldId);
    field.classList.add("error");
    alert(errorText);
    
    setTimeout(function() {
      field.classList.remove("error");
    }, 3000);
  }