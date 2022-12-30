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

console.log('input', form.email);
console.log('localStorage object', formData);

function continueEnteringMessage (){
    const savedInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));


   
    if (savedInput) {
        form.email.value = savedInput.email ?? '';
        form.message.value = savedInput.message ?? '';
        formData.email = savedInput.email ?? '';
        formData.message = savedInput.message ?? '';
        }
    };
  
    function onFormSubmit(e){
        e.preventDefault();
        console.log(formData);
        e.currentTarget.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY);
    };
 
 