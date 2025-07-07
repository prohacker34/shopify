
let products = JSON.parse(localStorage.getItem('products')) || [
    {name:'Apple iPhone 11', price: 500, image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0al6bBsZPzI-2vKAl20ePb5aTjn27ECfcO7EYNE_2t4yXqZfPulWxtKCLBBmlZvKOkXR02rC_Er7ELsYNTb3CheUgjXjmXciBEYS8O5vJcQqQKwYGN3egI_uH--gzWlWEvZGd5Hk&usqp=CAc"},
    {name:'Purchase HP EliteBook 850 G7 Core i5 Laptop', price: 1200, image:"data:image/webp;base64,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"}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveData() {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderCart();
});

function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error("Could not find element with ID 'product-list'");
        return;
    }
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `
            <img src="${product.image || 'placeholder-image.jpg'}" alt="${product.name}" width="100">
            <strong>${product.name}</strong> - $${product.price.toFixed(2)}<br>
            <button class="buy-btn" data-index="${index}">Buy</button>
        `;
        productList.appendChild(div);
    });

    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function() {
            const index = parseInt(this.dataset.index);
            addToCart(index);
        });
    });
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems || !cartTotal) {
        console.error("Could not find cart elements");
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <img src="${item.image || 'placeholder-image.jpg'}" alt="${item.name}" width="50">
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}

function addToCart(index) {
    if (index >= 0 && index < products.length) {
        cart.push(products[index]);
        renderCart();
        saveData();
    } else {
        console.error("Invalid product index:", index);
    }
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        renderCart();
        saveData();
    } else {
        console.error("Invalid cart index:", index);
    }
}

const sellForm = document.getElementById('sell-form');
if (sellForm) {
    sellForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('sell-name').value.trim();
        const priceInput = document.getElementById('sell-price');
        const priceText = priceInput.value;
        const price = parseFloat(priceText);
        const image = document.getElementById('sell-image').value.trim();


        console.log(`Input: ${priceText}, Parsed: ${price}`);


        if (!name) {
            alert("Please enter a product name");
            document.getElementById('sell-name').focus();
            return;
        }


        if (isNaN(price) || priceText === "") {
            alert("Please enter a valid price");
            priceInput.focus();
            return;
        }

        if (price <= 0) {
            alert("Price must be greater than 0");
            priceInput.focus();
            return;
        }


        products.push({name, price, image});
        renderProducts();
        saveData();
        this.reset();
    });
}