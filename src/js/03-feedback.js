import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    };

continueEnteringMessage ();

function onFormSubmit(e){
        e.preventDefault();
        console.log(formData);
        e.currentTarget.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY);
    };
    
function continueEnteringMessage (){
    const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
           
    if (savedMessage) {
        form.email.value = savedMessage.email;
        form.message.value = savedMessage.message;
        }
    };



