import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {

    let produceSubTotal = document.querySelector(".productSubTotal");
    let produceFinalTotal = document.querySelector(".productFinalTotal");


    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = (curElem.price) || 0;
        return accum + productPrice;
    }, initialValue);
    // console.log(totalProductPrice);

    produceSubTotal.textContent = `₹${totalProductPrice}`;
    produceFinalTotal.textContent = `₹${totalProductPrice + 49}`;

};