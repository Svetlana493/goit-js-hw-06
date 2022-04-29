// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

function makeIngredientList(ingredients) {
    return ingredients.map(ingredient => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredient;
        ingredientItem.classList.add("item");
        // console.log(ingredientItem);
        return ingredientItem;
        // 

    });


};

const ingredientsItems = makeIngredientList(ingredients);
//  console.log(ingredientsItems);
ingredientsList.append(...ingredientsItems);

// const listEl = document.querySelector("#ingredients");
// ingredients.forEach((element) => {
//     const itemEl = document.createElement("li");
//     itemEl.textContent = element;
//     itemEl.classList.add("item");
//     listEl.append(itemEl);
// });
// console.log(listEl);

// const listEl = document.body.querySelector("#ingredients");

// function makeIngredientsList(items) {
//     return items.map((item) => {
//         const itemEl = document.createElement("li");
//         itemEl.classList.add("item");
//         itemEl.textContent = item;
//         return itemEl;
//     });
// }

// listEl.append(...makeIngredientsList(ingredients));
// console.log(listEl);
// const ingredientsEl = document.querySelector("#ingredients");
// const liElements = ingredients.map(ingredient => {
//     const listElem = document.createElement("li");
//     listElem.textContent = (`${ingredient}`);
//     listElem.classList.add("item");
//     return listElem;
// })
// console.log(liElements);
// ingredientsEl.append(...liElements);
// const ingredientsEl = document.querySelector("#ingredients");
// const result = ingredients.map(element => {
//     const listElem = document.createElement("li");
//     listElem.textContent = (`${element}`);
//     listElem.classList.add("item");
//     return listElem;
// })
// console.log(result);
// ingredientsEl.append(...result);