const list = document.body.querySelector("#categories");
const categories = list.children;

console.log("Number of categories:", categories.length);

for (const element of categories) {
    console.log("\nCategory:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
}

// const categoriesList = document.querySelectorAll("h2").length;
// console.log("Numders of сategories", categoriesList);
// const animalsTitle = document.querySelector("h2").textContent;
// console.log("Category", animalsTitle);
// const animalsList = document.querySelector(".item > ul").children.length;
// console.log("Elements", animalsList);
// const productsTitle = document.querySelectorAll(".item > h2")[1].textContent;
// console.log("Category", productsTitle);
// const productsList = document.querySelectorAll(".item > ul")[1].children.length;
// console.log("Elements", productsList);
// const technologiesTitle = document.querySelectorAll(".item > h2")[2].textContent;
// console.log("Category", technologiesTitle);
// const technologiesList = document.querySelectorAll(".item > ul")[2].children.length;
// console.log("Elements", technologiesList);