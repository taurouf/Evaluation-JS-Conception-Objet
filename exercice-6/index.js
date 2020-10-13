'use strict';

var MyNumberCheck = function MyNumberCheck() {

}

MyNumberCheck.prototype.run = function () {
  this.form();
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


var number1 = new MyNumberCheck();
number1.run();