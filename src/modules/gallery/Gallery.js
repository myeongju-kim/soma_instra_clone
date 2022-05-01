import Modal from "../modal/Modal.js";
const Gallery = () => {
  return `
      <i class="add-photo fas fa-plus-square"></i>
      <div class="gallery-nav"></div>
      <section class="gallery">
        <div id="popup"></div>
        <div class="gallery-loader">
          <img src="./loader.svg" alt="">
          
        </div>
      </section>
      ${Modal()}
    `
  }

export default Gallery;
