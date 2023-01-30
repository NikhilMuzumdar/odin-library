

<style>
  #book-details-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
</style>

<script>
  const addBookButton = document.querySelector("#add-book-button");
  const bookDetailsPopup = document.querySelector("#book-details-popup");
  const closePopupButton = document.querySelector("#close-popup-button");

  addBookButton.addEventListener("click", () => {
    bookDetailsPopup.style.display = "block";
  });

  closePopupButton.addEventListener("click", () => {
    bookDetailsPopup.style.display = "none";
  });
</script>
