import throttle from 'lodash.throttle'; 

const KEY = 'feedback-form-state';//задаю ключ для сховища

const form = document.querySelector('.feedback-form');//отримую форму та її поля

// додаю обробник події на введення даних користувачем
form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);//подія на відправку форми

//oтримую данні зі сховища та розпарсюю в обьєкт
let dataForm = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements; //сюди потрапляє інформація з атрибутом name


function onInputData(e) {//форма для введення користувачем данних
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(KEY, JSON.stringify(dataForm));//приймаємо значення і перетворюємо в рядок
}


function onFormSubmit(e) {
  e.preventDefault();//зупиняю перезавантаження
  if ( email.value === dataForm.email || message.value === dataForm.message) {//якщо форма не пуста
      console.log({ email: email.value, message: message.value });
    }
    else {
      return alert('fill out the form');
    }
  

  localStorage.removeItem(KEY);//видаляю данні
  e.currentTarget.reset();
  dataForm = {};
}


