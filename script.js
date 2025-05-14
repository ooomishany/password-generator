document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  const userNameDisplay = document.getElementById('userNameDisplay');
  const userMessageDisplay = document.getElementById('userMessageDisplay');

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset validation
      document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      
      // Get form values
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let isValid = true;
      
      // Validation
      if (!name.value.trim()) {
          name.classList.add('is-invalid');
          document.getElementById('name-error').textContent = 'Пожалуйста, введите ваше имя';
          isValid = false;
      }
      
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          email.classList.add('is-invalid');
          document.getElementById('email-error').textContent = 'Пожалуйста, введите корректный email';
          isValid = false;
      }
      
      if (!message.value.trim()) {
          message.classList.add('is-invalid');
          document.getElementById('message-error').textContent = 'Пожалуйста, введите ваше сообщение';
          isValid = false;
      }
      
      if (isValid) {
          // Display user data in modal
          userNameDisplay.textContent = name.value.trim();
          userMessageDisplay.textContent = message.value.trim();
          
          // Simulate form submission
          setTimeout(() => {
              form.reset();
              successModal.show();
          }, 500);
      }
  });
});
