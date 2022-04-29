// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.

const input = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);





function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
    const newBoxes = [];
    for (let i = 1; i <= amount; i++) {
        let boxHeight = 30;
        let boxWidth = 30;
        const newBox = `<div style="width:${boxWidth}px; height:${boxHeight}px; background-color: ${getRandomHexColor()};"></div>`
        newBoxes.push(newBox)

        boxHeight += 10;
        boxWidth += 10;
    }
    boxes.insertAdjacentHTML("beforeend", newBoxes.join(""));

}

function destroyBoxes() {
    boxes.innerHTML = "";
    input.value = "";

}


// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
//   let inputNumber = document.querySelector(“input”);
//   const boxeDiv = document.querySelector(“#boxes”);
//   //
//   // Create_button
//   const createElemButton = document.querySelector(“[data-create]“);
//   function createBoxes() {
//     let counterDiv = inputNumber.value;
//     let iPx = 30;
//     for (let i = 0; i < inputNumber.value; i += 1) {
//       boxeDiv.insertAdjacentHTML(
//         “beforeend”,
//         `<div style=“width:${iPx}px;height:${iPx}px;border:0.5px solid #000; background-color:${getRandomHexColor()}; margin:10px “></div>`
//       );
//       iPx += 10;
//     }
//   }
//   createElemButton.addEventListener(“click”, createBoxes);
//   //
//   // Destroy_button
//   const dectrElemButton = document.querySelector(“[data-destroy]“);
//   function dectrBoxes() {
//     inputNumber.value = “”;
//     boxeDiv.innerHTML = “”;
//   }
//   dectrElemButton.addEventListener(“click”, dectrBoxes);