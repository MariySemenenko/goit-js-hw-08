import throttle from 'lodash.throttle'; 

const KEY = 'feedback-form-state';//задаю ключ для сховища

form = document.querySelector('.feedback-form');//отримую форму та її поля

// додаю обробник події на введення даних користувачем
form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);//подія на відправку форми

//oтримую данні зі сховища або порожнє значення
let dataForm = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;

function onInputData(e) {//форма для введення користувачем данних
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(KEY, JSON.stringify(dataForm));//приймаємо значення і перетворюємо в рядок
}

function onFormSubmit(e) {
  e.preventDefault();//зупиняю перезавантаження
  console.log({ email: email.value, message: message.value });//виводю обьєкт в консоль


  localStorage.removeItem(KEY);//видаляю данні
  e.currentTarget.reset();
  dataForm = {};
}