// cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')


// abrir carrinho de compras
cartIcon.onclick = () => {
    cart.classList.add("active");
}

// fechar carrinho de compras
closeCart.onclick = () => {
    cart.classList.remove("active");
}


// cart working 
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}


// Makig function
function ready() {
    //remove itenms from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)

    for (i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }
    // Quantity chages
    var quantityInput = document.getElementsByClassName('cart-quantity')
    for (i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener("change", quantityChanged);
    }

}

// Remove items from cart

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChanged(event) {
    var input = event.target;

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateTotal()
}

//update total

function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getAttributeNames('cart-box')
    var total = 0;

    for (i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("R$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);


        document.getElementsByClassName('total-price')[0].innerText = 'R$' + total;
    }
}

