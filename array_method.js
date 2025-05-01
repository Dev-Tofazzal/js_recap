const products = [
    {name:"laptop",price: 32000, brand: "lenovo", color: "silver"},
    {name:"phone",price: 7200, brand: "iphone", color: "golden"},
    {name:"watch",price: 2000, brand: "casio", color: "yellow"},
    {name:"sunglass",price: 300, brand: "rayban", color: "black"},
    {name:"camera",price: 52000, brand: "sony", color: "gray"},
]


// map
const brands = products.map(product => product.brand);
console.log(brands);

//forEach
products.forEach(product => console.log(product.color));

//filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter( product => product.name.includes("n"));
console.log(specificName);


//find
const special = products.find(product => product.name.includes("n"));
console.log(special);








