let buttonSubmit = document.getElementById('form');
let campos = document.querySelectorAll('.required');
let span = document.querySelectorAll('.span-required');

let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  nameValidate();
  emailValidate();
  mainPasswordValidate();
  confirmPassword();
});

function setError(index) {
  campos[index].style.border = '2px solid #e63656';
  span[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  span[index].style.display = 'none';
}

function nameValidate() {
  if(campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if(!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function mainPasswordValidate() {
  if(campos[2].value.length < 8) {
    setError(2);
  } else {
    removeError(2);
  }
}

function confirmPassword() {
  if(campos[2].value == campos[3].value && campos[3].value.length >= 8) {
    removeError(3);
  } else {
    setError(3);
  }
}