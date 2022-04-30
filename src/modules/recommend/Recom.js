const Recom = () => {
    return `
    <div style='visibility:visible'>
    <form >
    <h3> 사용자 맞춤 책/영화 추천 </h3>
      <label for='gender'> Gender : </label>
      <select name='gender' id = 'gender'>
        <option value='female'> Female </option>
        <option value='male'> Male </option>
      </select>

      <label for='occupation'> Occupation : </label>
      <select name='occupation' id = 'occupation'>
        <option value=0 > other </option>
        <option value=1> academic/educator </option>
        <option value=2> artist </option>
        <option value=3> clerical/admin</option>
        <option value=4> college/grad student </option>
        <option value=5> customer service </option>
        <option value=6> doctor/health care </option>
        <option value=7> executive/managerial </option>
        <option value=8> farmer </option>
        <option value=9> homemaker </option>
        <option value=10> K-12 student </option>
        <option value=11> lawyer </option>
        <option value=12> programmer </option>
        <option value=13> retired </option>
        <option value=14> sales/marketing </option>
        <option value=15> scientist </option>
        <option value=16> self-employed </option>
        <option value=17> technician/engineer </option>
        <option value=18> tradesman/craftsman </option>
        <option value=19> unemployed </option>
        <option value=20> writer </option>
      </select>

      <label for='age'> Age : </label>
      <select name='age' id = 'age'>
        <option value=1 > Under 18 </option>
        <option value=2 > 18~24 </option>
        <option value=3 > 25~34 </option>
        <option value=4 > 35~44 </option>
        <option value=5 > 45~49 </option>
        <option value=6 > 50~55 </option>
        <option value=7 > 56+ </option>
      </select>

      <input type="submit" value="추천받기" style=''> 
    </form>
    </div>


    <div style='visibility:hidden'>
      <div>
      <h3> 당신과 유사한 사람이 선택한 책 TOP5</h3>
      <p> 1. The God of Small Things </p> 
      <p> 2. The Big Bad Wolf: A Novel </p> 
      <p> 3. Four Blind Mice </p> 
      <p> 4. Private Screening </p> 
      <p> 5. Harlequin Valentine </p>
      </div>

      <div>
      <h3> 당신과 유사한 사람이 선택한 영화 TOP5</h3>
      <p> 1. Maltese Falcon, The (1941) </p>
      <p> 2. Amadeus (1984) </p>
      <p> 3. Space Cowboys (2000) </p>
      <p> 4. Mr.Smith Goes to Washington (1939) </p>
      <p> 5. It's a Wonderful Life (1946) </p>
      </div>
      </div>
    `
  }
  
  export default Recom;