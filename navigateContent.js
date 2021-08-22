//Query the DOM
const homeButton = document.querySelector("#home-button");
const chairsButton = document.querySelector("#chairs-button");
const desksButton = document.querySelector("#desks-button");
const checkoutButton = document.querySelector("#checkout-button");
const home = document.querySelector("#home");
const chairs = document.querySelector("#chairs");
const desks = document.querySelector("#desks");
const checkout = document.querySelector("#checkout");

//Click events
let selector = 0;
navigateContent(selector);

homeButton.onclick = () => {selector = 0; navigateContent(selector);}


chairsButton.onclick = () => {selector = 1; navigateContent(selector);}


desksButton.onclick = () => {selector = 2; navigateContent(selector);}


checkoutButton.onclick = () => {selector = 3; navigateContent(selector);}



// This function will be hoisted to top of script
// I think there should be a cleaner way of doing this
function navigateContent(selector){
    switch (selector) {
        case 0:
            home.setAttribute('style', 'display:block;');
            chairs.setAttribute('style','display:none;');
            desks.setAttribute('style','display:none;');
            checkout.setAttribute('style','display:none;');

            homeButton.setAttribute('style','font-weight:bold;');
            chairsButton.setAttribute('style','font-weight:lighter');
            desksButton.setAttribute('style','font-weight:lighter');
            checkoutButton.setAttribute('style','font-weight:lighter');
            break;

        case 1:
            home.setAttribute('style', 'display:none;');
            chairs.setAttribute('style','display:block;');
            desks.setAttribute('style','display:none;');
            checkout.setAttribute('style','display:none;');

            homeButton.setAttribute('style','font-weight:lighter;');
            chairsButton.setAttribute('style','font-weight:bold');
            desksButton.setAttribute('style','font-weight:lighter');
            checkoutButton.setAttribute('style','font-weight:lighter');
            break;

        case 2:
            home.setAttribute('style', 'display:none;');
            chairs.setAttribute('style','display:none;');
            desks.setAttribute('style','display:block;');
            checkout.setAttribute('style','display:none;');

            homeButton.setAttribute('style','font-weight:lighter;');
            chairsButton.setAttribute('style','font-weight:lighter');
            desksButton.setAttribute('style','font-weight:bold');
            checkoutButton.setAttribute('style','font-weight:lighter');
            break;

        case 3:
            home.setAttribute('style', 'display:none;');
            chairs.setAttribute('style','display:none;');
            desks.setAttribute('style','display:none;');
            checkout.setAttribute('style','display:block;');

            homeButton.setAttribute('style','font-weight:lighter;');
            chairsButton.setAttribute('style','font-weight:lighter');
            desksButton.setAttribute('style','font-weight:lighter');
            checkoutButton.setAttribute('style','font-weight:bold');
            break;

    }
}
