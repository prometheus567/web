document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseInt(btn.dataset.price),
      img: btn.dataset.img,
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`✅ Đã thêm ${product.name} vào giỏ hàng`);
  });
});
