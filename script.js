/*------header------*/
const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const llink = document.querySelectorAll('#llink');
bar.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
llink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});

/*-------cards data-------*/
import products from "./api/product.json";
import { showProductContainer } from "./homeProductCards";

showProductContainer(products);