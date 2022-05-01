import { getEntryFromDb } from '../../database.js'


const addImagesToGallery = async () => {
  const gallerySection = document.querySelector('.gallery')
  //4. getEntryFromDb()를 사용해서 gallery 테이블에 담긴 데이터를 galleryData에 할당하세요. await 뒤에 작성하세요.
  const galleryData =  await getEntryFromDb('gallery')
  const galleryItems = galleryData.reverse().map(({ resultImage, mytext }) => {

    return `
      <a href="#" class="item">
        <img alt="stuff" src=${resultImage}>
        <div class="detailView">
          <img alt="detailStuff" src=${resultImage}>
        </div>
      </a>
    `
  })
  gallerySection.style.display = 'grid'
  gallerySection.innerHTML = galleryItems.join('')
}

const postDetailView = () => {
  const images = document.querySelectorAll('.item');

  console.log(images.length)

  for (let i = 0; i < images.length; i++) {
    images.addEventListener('click', (e) => {
      e.preventDefault();

      const detailDiv = e.target.childNodes[1];
      detailDiv.style.display = 'block';
    })
  }

}

export { addImagesToGallery, postDetailView }
