export const homeQuantityToggle = (event,id)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQuantity = currentCardElement.querySelector('.productQuantity');
    // console.log(productQuantity);

    let quantity = parseInt(productQuantity.getAttribute('data-quantity'))|| 1;

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

    productQuantity.innerText = quantity;
    // console.log(quantity); 
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
};