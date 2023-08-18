const buttonSubmit = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    disableButton();
    nameValidate();
    emailValidate();    
    mainPasswordValidate();
    comparePassword();
}); 


function setError(index) {
    campos[index].style.border = '2px solid #e63656';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
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

function comparePassword() {
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        removeError(3);
    } else {
        setError(3);
    }
}

function disableButton() {
    $(document).ready(function() {
        $('input[type="submit"]').attr('disabled', true);
        $('input[type="text"], input[type="email"], input[type="password"]').on('keyup',function() {
            if($(this).val() != '') {
                $('input[type="submit"]').attr('disabled' , false);
            }else{
                $('input[type="submit"]').attr('disabled' , true);
            }
        });
    });
}


// function enableButtonWhenAllFieldsFilled() {
//     const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
//     const submitButton = document.querySelector('input[type="submit"]');

//     inputs.forEach(input => {
//         input.addEventListener('keyup', function() {
//             const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
//             submitButton.disabled = !allFieldsFilled;
//         });
//     });
// }