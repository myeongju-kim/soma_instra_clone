import { getEntryFromDb } from '../../database.js'

const addImagesToGallery = async () => {
  const gallerySection = document.querySelector('.gallery')
  //4. getEntryFromDb()를 사용해서 gallery 테이블에 담긴 데이터를 galleryData에 할당하세요. await 뒤에 작성하세요.
  const galleryData =  await getEntryFromDb('gallery')
  
  const galleryItems = galleryData.reverse().map(({ resultImage, mytext }) => {
    return `
      <div id="popup"></div>
      <a href="#" class="item">
        <img id="up_img" alt="stuff" src=${resultImage}
        onmouseover="document.getElementById('popup').style.display='block'" 
        onmouseout="document.getElementById('popup').style.display='none'">
      </a>
      <input type="range" min="3" max="15" id="ex-in" 
      oninput="var bright_filter='brightness('+this.value*10+'%'+')';
               document.getElementById('up_img').style.filter=bright_filter;">
    `
  })

  
  gallerySection.style.display = 'grid'
  gallerySection.innerHTML = galleryItems.join('')
}

export { addImagesToGallery }
