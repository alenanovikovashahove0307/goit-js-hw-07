import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
const imgEl = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item")><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}"  alt="${item.description}"/></a></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", imgEl);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
console.log(galleryItems);
