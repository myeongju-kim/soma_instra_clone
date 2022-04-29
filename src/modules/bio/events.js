import { addEntryToDb, clearAllEntries, getEntryFromDb, putEntryToDb } from '../../database.js';

const addBioEventListeners = () => {
  const editBioButton = document.querySelector('.edit-bio-button')
  const editBioForm = document.querySelector('.edit-bio-form')
  const cancelFormButton = document.querySelector('.cancel-edit-bio')
  const profilePhotoInput = document.querySelector('#addProfileInput')
  const profileImage = document.querySelector('.profile-photo img')
  const editFavoriteButton = document.querySelectorAll('.favorite')
  const editFavoriteForm = document.querySelector('.edit-favorite-form')
  const cancelFormButton2 = document.querySelector('.cancel-edit-favorite')

  // Edit Profile
  profilePhotoInput.addEventListener('change', () => {
    const reader = new FileReader()
    
    if (!profilePhotoInput.files[0]) return;
    //바이너리 파일을 Base64 Encode 문자열로 반환
    reader.readAsDataURL(profilePhotoInput.files[0])
    

    //읽기 동작이 완료되었을 때
    reader.addEventListener('load', () => {
    
     clearAllEntries('profile') 
     addEntryToDb('profile', reader.result)

     profileImage.src = reader.result;
  })
})

  // Edit Bio
  editBioButton.addEventListener('click', () => {
    editBioForm.style.display = 'block'
  })

  editBioForm.addEventListener('submit', () => {
//4. document.querySelector()를 이용해서 name과 about에 해당하는 값을 변수에 할당하세요.
    const name = document.querySelector('#name').value;
    const about = document.querySelector('#about').value;

    const nameElement = document.querySelector('.name')
    const aboutElement = document.querySelector('.about')
    clearAllEntries('bio')
    //5. name과 about에 해당하는 값을 bio 테이블에 저장하세요.
    
    addEntryToDb('bio', {name, about});
    
    nameElement.innerText = name
    aboutElement.innerText = about
    editBioForm.style.display = 'none'
  })


  cancelFormButton.addEventListener('click', () => {
    editBioForm.style.display = 'none'
  })

  // Edit Favorite
  let favnum = 0;

  for (let i = 0; i < editFavoriteButton.length; i++) {
    editFavoriteButton[i].addEventListener('click', () => {
      editFavoriteForm.style.display = 'block'
      favnum = i;
    })
  }

  editFavoriteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fav = document.querySelector('#fav').value;
    document.querySelector('#fav').value = null;

    putEntryToDb('favorite', fav, favnum + 1);

    editFavoriteButton[favnum].innerText = fav
    console.log(favnum);
    editFavoriteForm.style.display = 'none'
  })

  cancelFormButton2.addEventListener('click', () => {
    editFavoriteForm.style.display = 'none'
  })

}

const readProfilePhto = async () => {
  const profileImage = document.querySelector('.profile-photo img')
  const profileData = await getEntryFromDb('profile')
  if (profileData.length !== 0) profileImage.src = profileData
}

export { addBioEventListeners, readProfilePhto }