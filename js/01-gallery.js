import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imageEl = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageEl);

galleryContainer.addEventListener("click", onGaleryContainerClick);

function createImageMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
        `;
    })
    .join("");
}

function onGaleryContainerClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = e.target.dataset.source;
  const removeImageRef = basicLightbox.create(`<img src="${imageRef}"/>`);

  removeImageRef.show();
  document.addEventListener("keydown", escapeModalClose);

  function escapeModalClose(e) {
    if (e.code === "Escape") {
      removeImageRef.close();
      document.removeEventListener("keydown", escapeModalClose);
      console.log(e.code);
    }
  }
}
