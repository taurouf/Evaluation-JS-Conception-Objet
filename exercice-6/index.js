'use strict';

var MyNumberCheck = function MyNumberCheck() {

}

MyNumberCheck.prototype.run = function () {
  this.form();
  this.check();
}

MyNumberCheck.prototype.form = function () {
  var form = document.createElement('form');
  var tel = document.createElement('input');
  tel.className = 'tel';
  tel.setAttribute('placeholder', 'Numero');
  tel.setAttribute('type', 'tel');
  form.appendChild(tel);
  var submit = document.createElement('input');
  submit.className = 'button'
  submit.value = 'Confirmer';
  submit.setAttribute('type', 'button');
  form.appendChild(submit);
  form.addEventListener("keydown", function (e) { if (e.keyCode == 13) e.preventDefault() });
  document.body.appendChild(form);
}

MyNumberCheck.prototype.check = function () {
  var button = document.querySelector('.button');
  var p = document.createElement('p');
  button.addEventListener('click', function () {
    var numberCorrect = new RegExp(/^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$/g);
    var numberValue = document.querySelector('.tel').value;
    if (numberCorrect.test(numberValue)) {
      p.textContent = 'Numero valide';
      p.style.color = 'green';
    } else {
      p.textContent = 'Numero invalide';
      p.style.color = 'red';
    }
    document.body.appendChild(p);
  })
}

var number1 = new MyNumberCheck();
number1.run();