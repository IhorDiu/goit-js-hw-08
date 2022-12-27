
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            title="${description}"
            alt="${description}"
            >
        </a>
    `,
  '',
);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', { captionDelay: 250});














// ТУТАРІАЛ ПО ДОКІ
// 1 Install - npm install simplelightbox
// 2 Як зробити import - import SimpleLightbox from "simplelightbox";
// 3 Перевірка console.log(SimpleLightbox)
// 4 Як використати Usage - new SimpleLightbox('.some-element a', { /* options */ });
// 5 Розбір опцій Options
// 6 Методи роботи з інстансом(екземпяром)

