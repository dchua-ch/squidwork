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

    addProduct(newProduct)
    {
        let productExists = false;
        this.products.forEach(
            product => 
            {
                if (product.name == newProduct.name)
                {
                    productExists = true;
                    product.quantity += newProduct.quantity;
                    return;// I think this is just ending execution of function within forEach
                }
            }

        );
        if(!productExists)
        {
            this.products.push(newProduct);
        }
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

    let quantity = parseInt(product.children[4].children[1].value);
    console.log(quantity);

    let newProduct = new Product(name,price,quantity);
    // myCart.products.push(newProduct);
    myCart.addProduct(newProduct);
    console.log(myCart);
    alert(`${quantity}x \"${name}\" was added to cart!`);
    myCart.render();
    return;
}




