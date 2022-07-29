import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markUpHTML = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src='${item.preview}'
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markUpHTML);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const el = event.target.dataset.source;
  const removeImageRef = basicLightbox.create(`
    <img src="${el}" width="800" height="600">
  `);

  removeImageRef.show();
  document.addEventListener("keydown", escapeModalClose);

  function escapeModalClose(event) {
    if (event.code === "Escape") {
      removeImageRef.close();
      document.removeEventListener("keydown", escapeModalClose);
      console.log(event.code);
    }
  }
});

//
// function onGaleryContainerClick(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const imageRef = e.target.dataset.source;
//   const removeImageRef = basicLightbox.create(<img src="${imageRef}"/>);

//   removeImageRef.show();
//   document.addEventListener("keydown", escapeModalClose);

//   function escapeModalClose(e) {
//     if (e.code === "Escape") {
//       removeImageRef.close();
//       document.removeEventListener("keydown", escapeModalClose);
//       console.log(e.code);
//     }
//   }
// }
