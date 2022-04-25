const controlInput = document.querySelector("#font-size-control");
const controlText = document.querySelector("#text");

controlInput.addEventListener("input", (event) => {
    controlText.style.fontSize = `${event.currentTarget.value}px`;
});