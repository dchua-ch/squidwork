// Note that class declarations are not hoisted.
// So we need this on top.
class Product
{
    constructor(name,price,quantity)
    {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}


class Cart
{
    constructor()
    {}
    products = [];
    totalPrice= 0;

    calculateTotal()
    {
        this.totalPrice = 0;
        console.log(this.totalPrice);
        this.products.forEach(
            product => {this.totalPrice += product.price * product.quantity;}

        );
        console.log(this.totalPrice);

    }

    render()
    {
        let checkoutPage = document.querySelector("#cart");
        let renderThis = '';
        this.calculateTotal();
        //clear cart div first
        checkoutPage.innerHTML = renderThis;

        this.products.forEach(
            product =>
            {
                renderThis += '<div> ';
                renderThis += 'Name: ' + product.name;
                renderThis += ' ';
                renderThis += 'Price: ' + product.price;
                renderThis += ' ';
                renderThis += 'Quantity: ' + product.quantity;
                renderThis += '</div>'
            }
        )
        renderThis += '<div>';
        renderThis += 'Total: $' + this.totalPrice;
        checkoutPage.innerHTML += renderThis;
    }

}


// The container which will hold everything LOL
let myCart = new Cart;


function addToCart(selector)
{
    console.log(selector);
    // selector is a string.
    let product = document.querySelector(selector);
    console.log(product);


    let name = product.children[1].innerText;
    console.log(name);

    let price = parseFloat(product.children[3].children[1].innerText);
    console.log(price);

    let quantity = product.children[4].children[1].value;
    console.log(quantity);

    let newProduct = new Product(name,price,quantity);
    myCart.products.push(newProduct);
    console.log(myCart);
    myCart.render();
    return;
}




