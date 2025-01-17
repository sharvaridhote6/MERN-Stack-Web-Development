// toFixed- Number of digits after the decimal point. Must be in the range 0 - 20, inclusive,Returns a string representing a number in fixed-point notation.
document.addEventListener('DOMContentLoaded', function(){
    
    // define the product properties
    const products=[
        {id:1,name:"Product 1", price:23.89},
        {id:2,name:"Product 2", price:84.59},
        {id:3,name:"Product 3", price:42.09},
   
    ];
    // create an array to push the products in
    const cart=[];

    //grab the dom elements
    const productList= document.getElementById("product-list");
    const cartItems=document.getElementById("cart-items");
    const emptyCart= document.getElementById("empty-cart");
    const cartTotal=document.getElementById("cart-total");
    const totalPrice=document.getElementById("total-price");
    const checkoutBtn= document.getElementById("checkout-button");

    //dynamically add the div to the page
    products.forEach(product=>{
        const productDiv=document.createElement('div');
        productDiv.classList.add('product')
        productDiv.innerHTML=`<span>${product.name}- $${product.price.toFixed(2)}</span> 
        <button data-id="${product.id}">Add to cart</button>`;
        productList.appendChild(productDiv);
    });

    //make the buttons responsive
    productList.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            console.log(typeof e.target.getAttribute('data-id'))
        }
    })
})  