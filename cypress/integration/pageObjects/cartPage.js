export default {
    verifyProductInTheCart : verifyProductInTheCart,
    navigateToCartPage : navigateToCartPage,
};

let cartPageControls = {
    cartLink : '#cartur',
    placeOrderButton : '.col-lg-1 > .btn',
    cartListing : '#tbodyid > tr:nth-child(1) > td:nth-child(2)',
    products : '#tbodyid > tr',
};

//Navigate to Cart page and verify if user landed on Cary page
function navigateToCartPage(){
    cy.get(cartPageControls.cartLink).click();

    //Verify Place Order button is visible
    cy.get(cartPageControls.placeOrderButton, { timeout: 5000 })
    .should('be.visible');
}

//Verify Product has been added to the cart
function verifyProductInTheCart(product){
    cy.get(cartPageControls.cartListing).contains(product);
}