const products = [
  {
    img: './asset/images/blazer1.png',
    name: 'Produit 1',
    price: '100,00 €'
  },
  {
    img: './asset/images/pull3.png',
    name: 'Produit 4',
    price: '120,00 €'
  },
  {
    img: './asset/images/pull3.png',
    name: 'Produit 6',
    price: '120,00 €'
  },

 
];

// Keep track of the original products to toggle between them
let originalProducts = [...products];

// Track if product is toggled
let toggledStates = new Array(products.length).fill(false);

function toggleProduct(index) {
  const productElements = document.querySelectorAll('.product');
  const productElement = productElements[index];
  
  // Check if the product is toggled
  if (toggledStates[index]) {
    // If toggled, set it back to the original product
    productElement.querySelector('img').src = originalProducts[index].img;
    productElement.querySelector('h2').textContent = originalProducts[index].name;
    productElement.querySelector('.price').textContent = originalProducts[index].price;
  } 
  
  // Toggle the state for this product
  toggledStates[index] = !toggledStates[index];
}
