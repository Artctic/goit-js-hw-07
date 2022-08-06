import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createSmallGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryEl.innerHTML = createSmallGallery(galleryItems);

galleryEl.addEventListener("click", onPhotoClick);

const lightbox = basicLightbox.create(`<img>`, {
  onShow: () => window.addEventListener("keydown", onEscape),
  onClose: () => window.removeEventListener("keydown", onEscape),
});

function onPhotoClick(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== "IMG") {
    return;
  }
  console.log(ev.target);

  lightbox
    .element()
    .querySelector("img")
    .setAttribute("src", `${ev.target.dataset.source}`);
  lightbox.show();
}

function onEscape(ev) {
  if (ev.code !== "Escape") {
    return;
  }
  lightbox.close();
  lightbox.element().querySelector("img").removeAttribute("src");
}
