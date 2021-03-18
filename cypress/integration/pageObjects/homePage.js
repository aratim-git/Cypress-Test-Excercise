export default {
    verifyUserNavigatedToHomePage : verifyUserNavigatedToHomePage,
    selectProduct: selectProduct,
    addProductToCart : addProductToCart,
};

let homePageControls = {
    categoriesList : '#cat',
    samsungGalaxyProduct : ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
    nokiaLumia1520Product : ':nth-child(2) > .card > .card-block > .card-title > .hrefch',
    addToCartButton : '.col-sm-12 > .btn',
    productHeader : '.name',    
};

let products = new Map();
products.set("Samsung galaxy s6", homePageControls.samsungGalaxyProduct);
products.set("Nokia lumia 1520", homePageControls.nokiaLumia1520Product);


function verifyUserNavigatedToHomePage(){
    cy.get(homePageControls.categoriesList).should('be.visible');
}

function selectProduct(product){    
    for (let [key, value] of products) {
        if(key==product){
            cy.get(value).click();
        }
    }

    //Verify select product description is visible
    cy.get(homePageControls.productHeader, { timeout: 2000 })
    .should('be.visible').and('contain', product);

    //Verify Add to Cart Button is visible
    cy.get(homePageControls.addToCartButton).should('be.visible');    
}

//Add selected product to the cart
function addProductToCart(){    
    cy.get(homePageControls.addToCartButton).click();
}
