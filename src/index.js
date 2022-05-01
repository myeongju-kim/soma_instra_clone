import React from 'react'
import { onRequest } from './database.js'
import Bio from './modules/bio/Bio.js'
//modules/bio/events.js의 addBioEventListeners 를 Import하세요
import { addBioEventListeners, readProfilePhto } from './modules/bio/events.js'
import Gallery from './modules/gallery/Gallery.js'

import { addImagesToGallery } from './modules/gallery/events.js'
import {
  addGalleryEventListeners,
  uploadModal,
  uploadButtonEventListeners,
} from './modules/modal/events.js'
import Nav from './modules/nav/Nav.js'
import Recommend from './modules/recommend/Recommend.js'
import Recom from './modules/recommend/Recom.js'
import { addRecomEventListeners} from './modules/recommend/events.js'


const App = async () => {

  return `

    ${Nav()}
    <div class="main-container">
      ${await Bio()}
      ${Gallery()}
      ${Recommend()}
      

    </div>
  `
}

onRequest.onsuccess = async () => {
  document.getElementById('root').innerHTML = await App()
  //addBioEventListeners 를 불러오고 실행합니다.
  addBioEventListeners();
  addGalleryEventListeners();
  addImagesToGallery();
  readProfilePhto();
  uploadModal();
  uploadButtonEventListeners();
  addRecomEventListeners();
};

