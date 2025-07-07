let products = [
    {name:'Phone', price: 500},
    {name:'Laptop', price: 1200}
]

let cart = []

function renderProducts() {
    const productList = document.getElementById('product-list')
    productList.innerHTML = ''

    products.forEach((product, index) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <strong>${product.name}</strong> - $${product.price}<br>
        <button class="buy-btn" data-index="${index}">Buy</button>
        `
        productList.appendChild(div)
    })

    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function() {
            const index = parseInt(this.dataset.index)
            addToCart(index)
        })
    })
}

function renderCart() {
    const cartItems = document.getElementById('cart-items')
    const cartTotal = document.getElementById('cart-total')
    cartItems.innerHTML = ''

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price
        const li = document.createElement('li')
        li.innerHTML = `${item.name} - $${item.price} <button onclick='removeFromCart(${index})'>Remove</button>`
        cartItems.appendChild(li)
    })
    cartTotal.textContent = total
}

function addToCart(index) {  
    cart.push(products[index])
    renderCart()
}

function removeFromCart(index) {
    cart.splice(index, 1)
    renderCart()
}

document.getElementById('sell-form').addEventListener('submit', function(e) {
    e.preventDefault()
    const name = document.getElementById('sell-name').value
    const price = parseFloat(document.getElementById('sell-price').value)

    if (name && price) {
        products.push({name, price})
        renderProducts()
        this.reset()
    }
})

renderProducts()
renderCart()