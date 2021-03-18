const testInitialize = require('./../helpers/test-initialize.js');
const homePage = require('./../pageObjects/homePage.js');
const cartPage = require('./../pageObjects/cartPage.js');
const signUpPage = require('./../pageObjects/signUpPage.js');
const loginPage = require('./../pageObjects/loginPage.js');
import { constants } from './../helpers/constants.js';

describe('Navigate to website', function () {
  it('Visit webpage', function () {
    testInitialize.launchWebsite();
  })
  it('Verify user landed on Home Page', function () {
    homePage.verifyUserNavigatedToHomePage();
  })
})

describe('Sign up new account', function () {
  it('Navigate to Signup page', function () {
    signUpPage.navigateToSignUpPage();
  })
  it('Sign up new user account', function () {
    signUpPage.signUp(constants.username, constants.password);
  })
  it('Verify user is on home page', function () {
    homePage.verifyUserNavigatedToHomePage();
  })
})

describe('Login with newly signup account', function () {
  it('Navigate to Login page', function () {
    loginPage.navigateToLoginPage();
  })
  it('Login with account', function () {
    loginPage.login(constants.username, constants.password);
  })
})

describe('Select product and add to the cart', function () {
  it('Verify user is on home page', function () {
    homePage.verifyUserNavigatedToHomePage();
  })
  it('Select Samsung galaxy s6 product', function () {
    homePage.selectProduct("Samsung galaxy s6");
  })
  it('Add product to the cart', function () {
    homePage.addProductToCart();
  })
})

describe('Verify product has been added to cart', function () {
  it('Navigate to Cart page', function () {
    cartPage.navigateToCartPage();
  })
  it('Verify product has been added to the cart', function () {
    cartPage.verifyProductInTheCart("Samsung galaxy s6");
  })
})