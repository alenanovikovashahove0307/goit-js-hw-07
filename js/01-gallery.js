import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
const imgEl = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item")><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", imgEl);
list.addEventListener("click", onGalleryItemClick);
function onGalleryItemClick(event) {
    if (event.target.nodeName !=="IMG") {
        return
    }
  event.preventDefault();
  const instance = basicLightbox.create(
    ` <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
      </div>`
  );
  instance.show();
  const modalElement = document.querySelector('.modal');
  modalElement.addEventListener("click", () => {
    instance.close();
  });
  
}
console.log(galleryItems);
