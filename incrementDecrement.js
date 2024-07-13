
import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const  incrementDecrement = (event, id, price) => {
    
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector('.productQuantity');
    const productPrice = currentCardElement.querySelector('.productPrice');


    let quantity = 1;
    let localStoragePrice = 0;

    // get the data from localStorage

    let localCartProducts = getCartProductFromLS();

    let existingProd = localCartProducts.find((curProd) => curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity
        localStoragePrice = existingProd.price;
    } else {
        localStoragePrice = price;
        price = price; 
    }
    

    if(event.target.className === "cartIncremet"){
        if(quantity){
            quantity += 1;
        }
    }


    

    if((event.target.className === "cartDecrement")){
        if(quantity > 1){
            quantity -= 1;
        }
}

    // update local Storage price

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id, quantity, price : localStoragePrice};

    updatedCart = localCartProducts.map((curProd)=>{
    return curProd.id === id ? updatedCart : curProd;
    })
    // console.log(updatedCart);

    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));

    // reflect changes on screen

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    //calculatig the price of products in cart
    updateCartProductTotal();
};