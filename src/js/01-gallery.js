import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryPic=document.querySelector("ul.gallery");
console.log(galleryPic);

galleryItems.forEach((item) => {
    const galleryNew = document.createElement("li");
    const galleryNewLink = document.createElement ("a");
    const img = document.createElement ("img");

    galleryNew.classList.add("gallery__item");
    galleryNewLink.classList.add("gallery__link");
    galleryNewLink.href = item.original; 

    img.classList.add("gallery__image");
    img.src = item.preview;
    img.alt = item.description;
    img.setAttribute("data-source",item.original);

    galleryNewLink.append(img);
    galleryNew.append(galleryNewLink);
    galleryPic.append(galleryNew);
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captions: true,
    captionsData: "alt",
});