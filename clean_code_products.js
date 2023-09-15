const products=[
    {productid:1, name: 'Laptop', cost: 999},
    {productid:2, name: 'Smartphone', cost: 599},
    {productid:3, name: 'Headphones', cost: 199},
];

function getProduct(id) {
    for(let product of products) {
        if(product.productid === id) 
        return product; 
    }
        return null;
    }

function addProduct(name, cost) {
    let maxId=0;
    for(let product of products) {
        if(product.productid > maxId) maxId = product.productid;}
        products.push({productid:maxId+1, name:name, cost:cost})
    }

function logProducts() {
    for(let product of products) {
        console.log(product.name + " costs " + product.cost + "€")}
    }

// Use functions
let person1 = getProduct(2);
console.log(person1);
addProduct("Tablet",399);
listProducts();