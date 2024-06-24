
const productContainer = document.querySelector('#product-container');
const productTemplate = document.querySelector('#product-template');

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }
    products.forEach((curPro) => {
        const {brand, category, description, id, image, name, price, stock} = curPro;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#productName').textContent = name;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productStock').textContent = stock;      
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.catagory').textContent = category;
        productClone.querySelector('.productPrice').textContent = `$${price}`;
        productClone.querySelector('.productActualPrice').textContent = `$${price * 1.3}`; 


        productContainer.append(productClone);
    });
};