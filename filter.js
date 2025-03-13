// JavaScript source code
const data = [
{
    id: 1,
    name: "Timex Men's Weekender ",
    img: "https://m.media-amazon.com/images/I/71FcK0+PVCL._AC_SY450_.jpg",
    price: 63,
    cat: "Casual",
},
{
    id: 2,
    name: "Casio Forester",
    img: "https://m.media-amazon.com/images/I/91AgG0TMbDL._AC_SY550_.jpg",
    price: 68,
    cat: "Casual",
},
{
    id: 3,
    name: "Casio Classic Resin Strap",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
},
{
    id: 4,
    name: "Casio G-Shock",
    img: "https://m.media-amazon.com/images/I/71NF9Ua20NL._AC_SX679_.jpg",
    price: 82,
    cat: "Sport",
},
{
    id: 5,
    name: "Casio Men's Classic Green Cloth",
    img: "https://m.media-amazon.com/images/I/61Zf5DqfldL._AC_SY679_.jpg",
    price: 51,
    cat: "Sport",
},
{
    id: 6,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
},
{
    id: 7,
    name: "Timex Men's Expedition Scout",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 64,
    cat: "Casual",
},
{
    id: 8,
    name: "Timex Men's Expedition Scout Indiglo",
    img: "https://m.media-amazon.com/images/I/91hxkCArEVL._AC_SX569_.jpg",
    price: 64,
    cat: "Casual",
},
{
    id: 9,
    name: "Garmin Venu Smartwatch",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Sport",
},
{
    id: 10,
    name: "Casio MTP-1381L-7AVDF",
    img: "https://m.media-amazon.com/images/I/71ICJkNgmaL._AC_SX569_.jpg",
    price: 125,
    cat: "Luxury",
},
{
    id: 11,
    name: "Emporio Armani AR2500",
    img: "https://m.media-amazon.com/images/I/51xZiUzyrKL._AC_SX679_.jpg",
    price: 158,
    cat: "Luxury",
},
{
    id: 12,
    name: "Stuhrling Original 3997Z",
    img: "https://m.media-amazon.com/images/I/81-JPPOwtEL._AC_SY679_.jpg",
    price: 90,
    cat: "Dress",
},
{
    id: 13,
    name: "Bulova Caravelle",
    img: "https://m.media-amazon.com/images/I/71OsHznHc1L._AC_SX569_.jpg",
    price: 114,
    cat: "Dress",
},
{
    id: 14,
    name: "Gosasa Swiss Carnival",
    img: "https://m.media-amazon.com/images/I/71hNqUNeLxL._AC_SY679_.jpg",
    price: 200,
    cat: "Luxury",
},
{
    id: 15,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
},
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
        .map(
            (product) =>
            `
            <div class="product">
                <img
                src=${product.img}
                alt=""
                />
                <span class="name">${product.name}</span>
                <span class="priceText">$${product.price}</span>
            </div>
            `
        )
        .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(
            data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
        );
    } else {
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    categoriesContainer.innerHTML = categories
        .map(
            (cat) =>
                `
            <span class="cat">${cat}</span>
            `
        )
        .join("");
    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All"
            ? displayProducts(data)
            : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
};

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};

setCategories();
setPrices();
