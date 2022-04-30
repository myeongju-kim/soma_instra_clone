import "./Modal.css";

const Modal = () => {
  return `
    <div class="uploadModal" style="display:none;">
      <input type="text" id="fileName" disabled />
      <input type="file" name="photo" id="addPhotoInput" accept="image/*">
      <label for="addPhotoInput" id="modalBtn">
        사진 첨부
      </label>
      <br/>
      글 - 
      <input type="text" name="text" id="addTextInput" />
      <br/>
      <button id="uploadBtn">업로드</button>
    </div>
  `;
};

export default Modal;
