import { addEntryToDb, getEntryFromDb } from '../../database.js'


export let showRecommendResult =false;

export const toggleResultVisibility = (open) => {


    if(open) {
        document.getElementById('recommend-container-2').style.display ='flex';
        document.getElementById('recommend-container-1').style.display ='none';
    }
    else {
        document.getElementById('recommend-container-1').style.display ='block';
        document.getElementById('recommend-container-2').style.display ='none';
    }
} 

export const addRecomEventListeners = () => {
    document.getElementById('recommend-container').innerHTML =FORM_CONTENT + RECOMMEND_CONTENT; 
    const btn1 = document.getElementById('recommend_button');
    const btn2 = document.getElementById('recommend-back-button')
    btn1.addEventListener('click', () => toggleResultVisibility(true))
    btn2.addEventListener('click', () => toggleResultVisibility(false))
}


const FORM_CONTENT=` 
<div id="recommend-container-1">
<h3>책/영화 추천</h3>

<div style = "margin-bottom: 0px; display: flex">
    <div class="select-wrapper">
    성별:
        <div class="select">
        <select>
        <option value='F'> 남성 </option>
        <option value='M'> 여성 </option>

        </select>
    </div>
    </div>



<div style="margin-right: 8px"></div>

    <div class="select-wrapper">
    나이:
    <div class="select">
    <select>
    
    <option value=1 > 18세 이하 </option>
    <option value=2 > 18~24 </option>
    <option value=3 > 25~34 </option>
    <option value=4 > 35~44 </option>
    <option value=5 > 45~49 </option>
    <option value=6 > 50~55 </option>
    <option value=7 > 56+ </option>

    </select>
    </div>
    
</div>
</div>
<div style="margin-right: 8px"></div>


<div style = "margin-bottom: 0px; display: flex">
<div class="select-wrapper">
직업:
<div class="select">
<select>

    <option value=12> 프로그래머 </option>
    <option value=0 > 기타 </option>
    <option value=1> 교육자 </option>
    <option value=2> 예술가 </option>
    <option value=3> 사무직/관리직 </option>
    <option value=4> 대학생 </option>
    <option value=5> 고객 서비스 </option>
    <option value=6> 의료인 </option>
    <option value=7> 경영자 </option>
    <option value=8> 농업인 </option>
    <option value=9> 주부 </option>
    <option value=10> 학생 </option>
    <option value=11> 법조인 </option>
    <option value=13> 은퇴자 </option>
    <option value=14> 판매/마케팅 </option>
    <option value=15> 과학자 </option>
    <option value=16> 자영업자 </option>
    <option value=17> 기술자/엔지니어 </option>
    <option value=18> 상인 </option>
    <option value=19> 무직 </option>
    <option value=20> 작가 </option>
        
</select>
</div>
</div>
<div style="margin-right: 8px"></div>
<div class="buttons">
<button class="button is-primary" id="recommend_button">추천받기</button>
</div>
</div>

</div></div>`

const RECOMMEND_CONTENT = `
<div id="recommend-container-2">
<div id="recommend-back-button">
<span class="icon">
<i class="fas fa-arrow-left"></i>

</span>
뒤로 이동
</div>

<div style = "display: flex; flex-direction: row">
<div class="ranking-container">당신과 유사한 사람이 선택한 책 TOP 5

<div class="ranking-item">1. The God of Small Things </div>
<div class="ranking-item">2. The Big Bad Wolf: A Novel</div>
<div class="ranking-item">3. Four Blind Mice</div>
<div class="ranking-item">4. Private Screening</div>
<div class="ranking-item">5. Harlequin Valentine</div>
</div>
<div class="ranking-container">당신과 유사한 사람이 선택한 영화 TOP 5>

<div class="ranking-item">1. Maltese Falcon, The (1941)</div>
<div class="ranking-item">2. Amadeus</div>
<div class="ranking-item">3. Space Cowboys (2000)</div>
<div class="ranking-item">4. Mr.Smith Goes to Washington (1939)</div>
<div class="ranking-item">5. It's a Wonderful Life (1946)</div>
</div>
</div>
</div>
`

