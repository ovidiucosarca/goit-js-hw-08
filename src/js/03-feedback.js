import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

console.log(email.value, message.value);

form.addEventListener('input', throttle(() =>{
    const settings={
        email: email.value,
        message: message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings))
}, 500)
);

form.addEventListener('submit', event =>{
    event.preventDefault();
    
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    //updateOutput();
});

// function updateOutput() {
//     output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
//   }

  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };

  const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}