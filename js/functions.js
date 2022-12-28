// modal trigging code
const modal = document.getElementById("modal")
const modalTriggerButton = document.querySelectorAll("button.modal-trigger");
const modalCloseButton = document.getElementById("modalCloseButton");

for (let i = 0; i < modalTriggerButton.length; i += 1) { 
modalTriggerButton[i].addEventListener('click', () => {
    modal.style.display = "block";
});
}

modalCloseButton.addEventListener("click", () => {
    modal.style.display = "none";
})
