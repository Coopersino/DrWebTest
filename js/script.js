var localStor = localStorage;
var popup = document.querySelector('.popup');
var form = popup.querySelector('form');
var loginInput = document.querySelector('[name=login]');
var passwordInput = document.querySelector('[name=password]');
var loginBtn = document.querySelector('.show-form-btn');
var closeBtn = document.querySelector('.close-btn');
var infoBlock = document.querySelector('.info-block');
var submitBtnError = document.querySelector('.login-form__submit-btn-error');

var password = 'qwerty12345';
var login = 'test';
var loginEmail = 'test@test.ru';

localStor.setItem('passwordInput', password);
localStor.setItem('loginInput', login);
localStor.setItem('email', loginEmail);

loginInput.addEventListener('focus', function(event) {
    event.preventDefault();
    submitBtnError.classList.remove('login-form__submit-btn-error--show');
});

passwordInput.addEventListener('focus', function(event) {
    event.preventDefault();
    submitBtnError.classList.remove('login-form__submit-btn-error--show');
});

closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    submitBtnError.classList.remove('login-form__submit-btn-error--show');
    popup.classList.remove('popup-show');
    popup.classList.remove('popup-error');
    infoBlock.classList.add('info-block--show');
});

loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('popup-show');
    infoBlock.classList.remove('info-block--show');
    loginInput.focus();
});

var showHidePassBtn = document.querySelector('.login-form__caption-btn');
showHidePassBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (passwordInput.type =='password') {
        passwordInput.type = 'text';
        showHidePassBtn.classList.add('login-form__caption-btn--show');
        showHidePassBtn.classList.remove('.login-form__caption-btn');
    } else {
        passwordInput.type = 'password';
        showHidePassBtn.classList.remove('login-form__caption-btn--show');
        showHidePassBtn.classList.add('.login-form__caption-btn');
    }
});

function showError(event) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    submitBtnError.classList.add('login-form__submit-btn-error--show');
}

form.addEventListener('submit', function(event) {
    if (!loginInput.value || !passwordInput.value) {
        showError(event );
    }
     if(loginInput.value != login && loginInput.value != loginEmail) {
            showError(event);
        }
      if(passwordInput.value != password) {
            showError(event);
        }
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
            popup.classList.remove("popup-error");
            infoBlock.classList.add('info-block--show');
        }
    }
});

