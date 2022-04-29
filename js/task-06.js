const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
    if (inputEl.dataset.length <= inputEl.value.length) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
}


// const inputElement = document.querySelector('#validation-input');
// const numberForChecking = Number(inputElement.dataset.length);


// inputElement.addEventListener('blur', () => {
//     if (inputElement.value.length === numberForChecking) {
//         inputElement.classList.add('valid');
//         inputElement.classList.remove('invalid');
//     } else {
//         inputElement.classList.add('invalid');
//         inputElement.classList.remove('valid');
//     }
// });