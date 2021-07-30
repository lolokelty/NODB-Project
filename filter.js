const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-products');

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (products.classList.contains(filter)){
                    products.style.display = 'block'
                } else {
                    products.style.display = 'none'
                }
            }
        });
    });
};

const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");


search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if
        (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {

            product.parentElement.parentElement.style.display = "none"
        }
    })
}