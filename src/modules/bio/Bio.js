import EditBioForm from './EditBio.js'
import EditFavorite from './EditFavorite.js'

//1. database.js에서 사용자가 입력한 정보를 데이터베이스에서 가져오는 getEntryFromDb 함수를 import하세요.
import {getEntryFromDb} from '../../database.js'

const Bio = async () => {
//2. getEntryFromDb를 사용해서 bio라는 객체저장소에서 json 데이터를 가져와 userInfo라는 변수에 넣으세요.
const userInfo = await getEntryFromDb('bio');
const favoriteInfo = await getEntryFromDb('favorite');
const postingNum = await getEntryFromDb('gallery');

//3. p태그로 감싸진 name과 about을 렌더링하세요.
  return `
  <section class="bio">
    <div class="profile-photo">
      <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="profile-photo">
      <input type="file" name="profile" id="addProfileInput" accept="image/*">
      <label for="addProfileInput">
        <i class="add-profile fas fa-plus-square"></i>
      </label>
    </div>
    <div class="profile-info">
      <p class="name"> ${userInfo[0] ? userInfo[0].name : 'Please enter your bio' }</p>
      <p class="about"> ${userInfo[0] ? userInfo[0].about : 'Please enter your bio' }</p>
      <p class="info">Posts <span style="font-weight:bold">${postingNum.length}</span></p>
      <button class="edit-bio-button">Edit bio</button>
    </div>
    <div class="favorite-info">
      <p>Favorite and Interest</p>
      <div class="favorite">${favoriteInfo[0] ? favoriteInfo[0] : 'Please enter your bio' }</div>
      <div class="favorite">${favoriteInfo[1] ? favoriteInfo[1] : 'Please enter your bio' }</div>
      <div class="favorite">${favoriteInfo[2] ? favoriteInfo[2] : 'Please enter your bio' }</div>
    </div>
    ${EditBioForm()}
    ${EditFavorite()}
  </section>
`}

export default Bio