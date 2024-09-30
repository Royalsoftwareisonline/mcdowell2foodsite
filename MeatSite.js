document.getElementById('category').addEventListener('change', filterProducts);
document.getElementById('search').addEventListener('input', filterProducts);

function filterProducts() {
    const category = document.getElementById('category').value.toLowerCase();
    const search = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category').toLowerCase();

        if ((category === 'all' || productCategory === category) &&
            productName.includes(search)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
