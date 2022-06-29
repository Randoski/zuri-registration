const firstName = document.querySelector('#first-name');
const firstNameError = document.querySelector('#first-name-error');
const lastName = document.querySelector('#last-name');
const lastNameError = document.querySelector('#last-name-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');



form.addEventListener('submit', (e) => {
      const firstNameValue = firstName.value.trim().toLowerCase();
      const lastNameValue = lastName.value.trim().toLowerCase();
      const emailValue = email.value.trim().toLowerCase();
      const passwordValue = password.value.trim().toLowerCase();

      if(firstNameValue == "" && lastNameValue == "" && emailValue == "" && passwordValue == "") {
            firstNameError.innerText = "First Name cannot be empty"
            lastNameError.innerText = "Last Name cannot be empty"
            emailError.innerText = "Looks like this is not an email"
            passwordError.innerText = "Password cannot be empty"
            e.preventDefault();
      } else if(firstNameValue == "" || firstNameValue == null) {
            firstNameError.innerText = "First Name cannot be empty"
            e.preventDefault();
      } else if(lastNameValue == "" || lastNameValue == null) {
            lastNameError.innerText = "Last Name cannot be empty"
            e.preventDefault();
      } else if(emailValue.length < 5 && emailValue.indexOf('@') < 0) {
            emailError.innerText = "Looks like this is not an email"
            e.preventDefault();
      } else if(passwordValue == "" || passwordValue == null) {
            passwordError.innerText = "Password cannot be empty"
            e.preventDefault();
      } else {
            form.submit();
      }
})



