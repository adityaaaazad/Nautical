export function showToast(operation, id) {

    

    const toast = document.createElement("div");
    toast.classList.add("toast");

    //Set the text content of the toast on the operation
    if(operation === "add"){
        toast.textContent = `Product with ID ${id} has been added.`;
    } else {
        toast.textContent = `Product with ID ${id} has been deleted.`;
    }

    document.body.appendChild(toast);

    // dissapearing toast after few seconds

    setTimeout(() => {
        toast.remove();
    }, 2000);
}