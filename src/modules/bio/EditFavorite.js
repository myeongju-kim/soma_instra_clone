
const EditFavorite = () => {
    return `
      <form class="edit-favorite-form">
        <input type="text" id="fav" placeholder="Favorite or Interest" autocomplete="off" required /><br>
        <button type="button" class="cancel-edit-favorite">Cancel</button>
        <button type="submit">Submit</button>
      </form>
    `
  }
  
  export default EditFavorite