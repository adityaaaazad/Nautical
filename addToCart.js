import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id) => {
    
    let arrLocalStorageProduct = getCartProductFromLS();
    
    const currentProductElem = document.querySelector(`#card${id}`);
    // console.log(currentProductElem);
    let quantity = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector(".productPrice").innerText;
    // console.log(quantity, price);

    price = price.replace("₹","");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd === id );

    if(existingProd && quantity > 1){
       quantity = Number(existingProd.quantity) + Number(quantity);
       price = Number(price * quantity);
       let updatedCart = {id, quantity, price};

       updatedCart = arrLocalStorageProduct.map((curProd)=>{
       return curProd.id === id ? updatedCart : curProd;
       })
       console.log(updatedCart);

       localStorage.setItem('cartProductLzS', JSON.stringify(updatedCart));

       // show toast when added
       showToast("add", id)

    }

    if(existingProd){
        // alert("Duplicate item");
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    
       // show toast when added
       showToast("add", id)

} 