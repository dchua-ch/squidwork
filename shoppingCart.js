// Note that class declarations are not hoisted.
// So we need this on top.
class Product
{
    constructor(name,price,quantity,imgSrc)
    {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.imgSrc = imgSrc;
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
        this.products.forEach(
            product => 
            {
                // adds new attribute subTotal to product object
                product.subTotal = product.price * product.quantity;
                this.totalPrice += product.subTotal;
            }

        );

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
        if (this.products.length == 0)
        {
            renderThis = " <div class = \"product-checkout\"> Currently Empty. Try adding something to cart! :D </div>";
        }
        else
        {
        this.products.forEach(
            product =>
            {
                renderThis += `<div class = \"product-checkout\" id = \"checkout-${product.name.replaceAll(" ","-")}\"> `;
                renderThis += `<img src = \"${product.imgSrc}\">`
                renderThis += '<p class = \"bold\">' + product.name + '</p>';
                renderThis += '<p>Price: $' + product.price +'</p>';
                renderThis += `<p>Qty: ${product.quantity}</p>`
                renderThis +=` <p> Subtotal: \$${product.subTotal.toFixed(2)} </p>`;
                renderThis += `<button class = "update-quantity" type = "button" onclick = \"updateQuantity(\'#checkout-${product.name.replaceAll(" ","-")}\')\">Update Quantity</button>`
                renderThis += `<button class = "delete-from-cart" type = "button" onclick = \"deleteFromCart(\'#checkout-${product.name.replaceAll(" ","-")}\')\">Delete</button>`
                renderThis += '</div>'
            }
        )
        }

        checkoutPage.innerHTML += renderThis;
        let totalDiv = document.querySelector('#total');
        totalDiv.innerText =  'Total: $' + this.totalPrice.toFixed(2);
    }
    


}


// The container which will hold everything LOL
let myCart = new Cart;


function addToCart(selector)
{
    // selector is a string.
    let product = document.querySelector(selector);


    let name = product.children[1].innerText;

    let price = parseFloat(product.children[3].children[1].innerText).toFixed(2);

    let quantity = parseInt(product.children[4].children[1].value);

    let imgSrc = product.children[0].getAttribute("src");

    let newProduct = new Product(name,price,quantity, imgSrc);
    myCart.addProduct(newProduct);
    alert(`${quantity}x \"${name}\" was added to cart!`);
    myCart.render();
    return;
}

function deleteFromCart(selector)
{
    let product = document.querySelector(selector);

    let name = product.children[1].innerText;

    if(confirm(`Are you sure you would like to delete ${name} from cart?`))
    {
        myCart.products.forEach( (product,index) =>
            {
                if(product.name == name)
                {
                    myCart.products.splice(index,1,);
                }
            }

        );
   
        myCart.render();
    }

}

function updateQuantity(selector)
{
    let userInput = prompt('Please enter the new quantity: ');
    if (userInput != null && userInput != '')
    {
        let newQuantity = parseInt(userInput);
        if(isNaN(newQuantity))
        {
            alert("Invalid Quantity. Update quantity aborted.");
        }
        else if( newQuantity == 0)
        {
            deleteFromCart(selector);
        }
        else
        {
            let product = document.querySelector(selector);
    
            let name = product.children[1].innerText;
    
            myCart.products.forEach(
                product =>
                {
                    if(product.name == name)
                    {
                        product.quantity = newQuantity;
                    }
                }
            )
    
            myCart.render();
        
        
        }
    }
}



