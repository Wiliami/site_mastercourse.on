let form = document.getElementById('form');
let campo = document.querySelector('.required');
let span = document.querySelector('.span-required');
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


form.addEventListener('submit', (event) => {
  event.preventDefault();
  emailValidate();
});


function setError() {
  campo.style.border = '2px solid #e63656';
  span.style.display = 'block';
}

function removeError() {
  campo.style.border = '';
  span.style.display = 'none';
}

function emailValidate() {
  if(!emailRegex.test(campo.value)) {
    setError();
  } else {
    removeError();
  }
}