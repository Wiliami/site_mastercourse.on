$(document).ready(() => {
    const form = $('#form');

    const buttonSubmit = form.find('input[type="submit"]');
    const inputFields = form.find('input[type="username"], input[type="email"], input[type="password"]');


    function verifyFieldsEmpty() {
        return inputFields.toArray().some(field => $(field).val().trim() === '');
    }

    function verificarEmailValido() {
        const email = $('#email').val();
        if(email === '') {
            return false;
        }

        $.ajax({
            type: 'POST',
            url: '/verificar-email',
            data: JSON.stringify({ email: email }),
            contentType: 'application/json',    
            success: (response) => {
                console.log('Resposta do servidor:', response);
                $('#error-message').text('').hide();

                const isEmailValid = checkEmailValidity(response);

                if (isEmailValid && !verifyFieldsEmpty()) {
                // Email é válido
                    habilitarBotaoDeEnvio();
                } else {
                    // Email não é válido
                    desabilitarBotaoDeEnvio();
                    showError('Este e-mail já está cadastrado.');
                }
            },      
            error: function(xhr, status, error) {
                console.error('Erro ao verificar o email:', error);
                $('#error-message').text(xhr.responseText).show();                                                                                                  
                desabilitarBotaoDeEnvio();                                                                                                  
                showError('Informe um e-mal válido.');  
            }
        });
    }   

    inputFields.on('input', () => {
        if(!verifyFieldsEmpty()) {
            verificarEmailValido();
        } else {
            desabilitarBotaoDeEnvio();
        }
    });     

    function checkEmailValidity(response) {
        console.log('Resposta do servidor:', response);
        if(response && response.isValid !== undefined) {
            console.log('Campo "isValid" na resposta:', response.isValid);
            return response.isValid === true;    
        } else {
            console.log('Resposta não contém um campo "isValid" ou está vazio.');
            return false;
        }
    }

    function habilitarBotaoDeEnvio() {
        return buttonSubmit.prop("disabled", false);
    }

    function desabilitarBotaoDeEnvio() {
        return buttonSubmit.prop("disabled", true);
    }

    function showError(message) {
        const messageError = $('#error-message');
        messageError.text(message);
        messageError.show();
    }


    form.on('submit', (e) => {
        e.preventDefault(); 

        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        
        $.ajax({
            type: 'POST',
            url: '/register',
            data: JSON.stringify({ 
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }),
            contentType: 'application/json',
            success: (response) => {
                $('#error-success').text(response).show();
                console.log('Resposta do servidor', response);
            },
            error: (xhr, status, error) => {
                $('#error-message').text(xhr.responseText).show();
                console.log('Erro ao criar usuário:', xhr.responseText);
            }
        });

    });
 });