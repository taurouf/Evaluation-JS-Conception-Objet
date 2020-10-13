var MyFormCheck = function MyFormCheck() {

}

MyFormCheck.prototype.run = function () {
  this.form();
  this.check();
}

MyFormCheck.prototype.form = function () {
  var form = document.createElement('form');
  var lastNameLabel = document.createElement('Label');
  lastNameLabel.innerHTML = 'Last Name'
  var lastName = document.createElement('input');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('placeholder', 'Nom');
  lastName.className = 'lastName';
  lastNameLabel.appendChild(lastName);
  form.appendChild(lastName);
  var firstName = document.createElement('input');
  var firstNameLabel = document.createElement('label')
  firstNameLabel.textContent = 'Prénom'
  firstName.setAttribute('type', 'text');
  firstName.setAttribute('placeholder', 'Prénom');
  firstName.className = 'firstName';
  firstNameLabel.appendChild(firstName);
  form.appendChild(firstName);
  var email = document.createElement('input');
  var emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email';
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Email');
  email.className = 'email';
  emailLabel.appendChild(email);
  form.appendChild(email);
  var password = document.createElement('input');
  var passswordLabel = document.createElement('label');
  passswordLabel.textContent = ('Mot de passe');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Mot de passe');
  password.className = 'password';
  passswordLabel.appendChild(password);
  form.appendChild(password);
  var submit = document.createElement('input');
  submit.value = 'Confirmer';
  submit.setAttribute('type', 'button');
  form.appendChild(submit);
  document.body.appendChild(form);
}

MyFormCheck.prototype.check = function () {
  var button = document.querySelector(('[type="button"]'));
  var ul = document.createElement('ul');
  button.addEventListener('click', function () {
    ul.textContent = '';
    var lastNameCorrect = new RegExp(/[a-z]+/g);
    var liLastName = document.createElement('li');
    var lastNameValue = document.querySelector('.lastName').value;
    var lastNameValueError = document.querySelector('.lastName');

    if (lastNameCorrect.test(lastNameValue, lastNameValueError)) {

      liLastName.textContent = 'Nom valide';
      liLastName.style.color = 'green';
    } else {
      liLastName.textContent = 'Nom invalide';
      liLastName.style.color = 'red';
      lastNameValueError.style.backgroundColor = 'red';
    }
    ul.appendChild(liLastName);

    var firstNameCorrect = new RegExp(/[a-z]+/g);
    var liFirstName = document.createElement('li');
    var firstNameValue = document.querySelector('.firstName').value;
    var firstNameValueError = document.querySelector('.firstName');

    if (firstNameCorrect.test(firstNameValue, firstNameValueError)) {
      liFirstName.textContent = 'Prénom valide';
      liFirstName.style.color = 'green';
    } else {
      liFirstName.textContent = 'Prénom invalide';
      liFirstName.style.color = 'red';
      firstNameValueError.style.backgroundColor = 'red';
    }
    ul.appendChild(liFirstName);

    var emailCorrect = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    var liEmail = document.createElement('li');
    var emailValue = document.querySelector('.email').value;
    var emailValueError = document.querySelector('.email')
    if (emailCorrect.test(emailValue, emailValueError)) {
      liEmail.textContent = 'Email valide';
      liEmail.style.color = 'green';
    } else {
      liEmail.textContent = 'Email invalide';
      liEmail.style.color = 'red';
      emailValueError.style.backgroundColor = 'red'
    }
    ul.appendChild(liEmail);
    var passwordCorrect = new RegExp(/[a-z]+/g);
    var liPassword = document.createElement('li');
    var passwordValue = document.querySelector('.password').value;
    var passwordValueError = document.querySelector('.password');

    if (passwordCorrect.test(passwordValue, passwordValueError)) {
      liPassword.textContent = 'Mot de passe valide';
      liPassword.style.color = 'green';
    } else {
      liPassword.textContent = 'Mot de passe invalide';
      liPassword.style.color = 'red';
      passwordValueError.style.backgroundColor = 'red';
    }
    ul.appendChild(liPassword);
    document.body.appendChild(ul);
  })
}

var form = new MyFormCheck();

form.run();
