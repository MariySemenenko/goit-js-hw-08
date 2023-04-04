import throttle from 'lodash.throttle'; 

const KEY = 'feedback-form-state';//задаю ключ для сховища

const form = document.querySelector('.feedback-form');//отримую форму та її поля

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
  if ( email.value === dataForm.email || message.value === dataForm.message) {
      console.log({ email: email.value, message: message.value });
    }
    else {
      return alert('fill out the form');
    }
  

  localStorage.removeItem(KEY);//видаляю данні
  e.currentTarget.reset();
  dataForm = {};
}
// данні що є в локалсторадж не записуються в форму після оновлення сторінки.
//  Треба не просто витягати об'єкт, а вписувати в value відповідних полів отримані значення.
//   При сабміті спочатку перевіряємо, чи всі поля заповнені, потім вже виводимо в консоль, 
//   якщо все заповнено, бо зараз виводить в консоль навіть не заповнену форму.

