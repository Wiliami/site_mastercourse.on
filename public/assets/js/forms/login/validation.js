const buttonSubmit = document.getElementById('button-submit');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  emailValidate();
  passwordValidate();
});

function setError(index) {
  campos[index].style.border = '2px solid #e63656';
  span[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  span[index].style.display = 'none';
}

function emailValidate() {
  if(!emailRegex.test(campos[0].value)) {
    setError(0);
  } else {
    removeError(0);
  }
} 

function passwordValidate() {
  if(campos[1].value.length < 8)  {
    setError(1);
  } else {
    removeError(1);
  }
}