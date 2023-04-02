// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";// додатковий імпорт стилів
// Change code below this line


const gallery = document.querySelector('.gallery');
const galleryElements = createGalleryElements(galleryItems);//дістаю елементи галереї з імпорта
gallery.insertAdjacentHTML("beforeend", galleryElements);//вставляю елементи в галерею

function createGalleryElements (items)  {//витягую елем із галереї через деструкторизацію
return items.map(({preview, original, description}) => {//створюю новий масив значень через шабл рядок
return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
} )
.join('');//повертаю рядок в одну стрічку
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', // додаю відображення підписів до зображень з атрибута alt
    captionDelay: 250,//підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення
  });
console.log(galleryItems);
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай 
// рефакторинг з урахуванням того, що бібліотека була встановлена через npm 
// (синтаксис import/export).

