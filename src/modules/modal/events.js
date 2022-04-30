import { addEntryToDb } from "../../database.js";

const reader = new FileReader();

const uploadModal = () => {
  const modalMain = document.querySelector(".uploadModal");
  const modalBtn = document.querySelector("#modalBtn");
  modalBtn.addEventListener("click", () => {
    let stateDisplay = modalMain.style.display;
    if (stateDisplay === "none") {
      modalMain.style.display = "block";
    } else {
      modalMain.style.display = "none";
    }
  });
};

const addGalleryEventListeners = () => {
  //1. document.querySelector()를 사용해서 "addPhotoInput"을 할당하세요.
  const photoInput = document.querySelector("#addPhotoInput");

  photoInput.addEventListener("change", () => {
    //바이너리 파일을 Base64 Encode 문자열로 반환
    const file = photoInput.files[0];
    reader.readAsDataURL(file);
    document.getElementById("fileName").value = file.name;
  });
};

const uploadButtonEventListeners = () => {
  const uploadBtn = document.getElementById("uploadBtn");
  const gallerySection = document.querySelector(".gallery");
  uploadBtn.addEventListener("click", () => {
    if (reader.result !== null) {
      let mytext = document.getElementById("addTextInput").value;
      if (mytext !== "") {
        const resultImage = reader.result;
        addEntryToDb("gallery", { resultImage, mytext });
        const newItem = `
          <a href="#" class="item">
            <img alt="stuff" src=${resultImage}>
          </a>
        `;

        gallerySection.innerHTML = newItem + gallerySection.innerHTML;
        document.querySelector(".uploadModal").style.display = "none";

        document.getElementById("addTextInput").value = "";
        document.getElementById("fileName").value = "";

        alert("업로드 완료!");
      }
    }
  });
};

export { uploadModal, addGalleryEventListeners, uploadButtonEventListeners };
