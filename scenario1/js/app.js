let emailModal= document.querySelector('.email-modal')
let closeModal = document.querySelector('.email-modal__close-btn')
let emailInput = document.getElementsByClassName('email-modal__input')[0];
let emailButton = document.getElementsByClassName('email-modal__button')[0];
let modalForm = document.querySelector('.email-modal__form-group')
let errorMsg = document.querySelector('.error')
let tyMsg = document.querySelector('.email-thank')

//when mouse leaves modal pops up
document.addEventListener('mouseleave', () => {
emailModal.classList.add('email-modal--visible')
console.log('mouse left')
});

//modal closes when clicking on X button
closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
    modalForm.classList.remove('error-border');
    errorMsg.classList.remove('error-display')
});

//validates email
let emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email)
}

//if email is valid show ty message and close in 1 second, if not show error msg
emailButton.addEventListener('click', () => {
    if(emailIsValid(emailInput.value)){
        tyMsg.classList.add('email-thank--success');
    setTimeout(() => {
        emailModal.classList.remove('email-modal--visible');
    },1000)
    }

    else{
        modalForm.classList.add('error-border');
        errorMsg.classList.add('error-display')
    }
});

//if clicking on email input after error then remove the errors
emailInput.addEventListener('click', () => {
    modalForm.classList.remove('error-border');
    errorMsg.classList.remove('error-display')
});

