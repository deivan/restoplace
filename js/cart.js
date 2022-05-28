window.addEventListener('load', () => {
  new Cart();
  console.log('cart started.', DB);
});

class Cart {
  cities = [];
	cartItems = document.getElementById('cartItems');

  constructor() {
    this.initCities();
	this.fillCart();
	document.querySelector('#cartFinished').addEventListener('click', () => {
		window.localStorage.removeItem('cart');
		window.location.href = '/index.html';
	})
  }

  initCities() {
    DB.forEach(item => {
      this.cities.push(item.name);
    });
		this.selectedCity = window.localStorage.getItem('selectedCity');
    if (this.selectedCity) {
      document.querySelector('#selectedCity').innerText = this.cities[this.selectedCity - 1];
    }
  }

	fillCart() {
		let currentCard = window.localStorage.getItem('cart') || '[]';
		let cart = JSON.parse(currentCard);
		let cartTemplate = '';
		let total = cart.reduce((acc, item) => acc + Number(item.price), 0)

		if (cart.length) {
			cart.forEach(item => {
				cartTemplate += `
					<div class="card-basket">
							<img class="card-basket__img"
									src="${item.img}"
									alt="">
							<span class="card-basket__name-product">${item.name}</span>
							<div class="card-basket__btns">
									<button class="basket-btn card-basket__btn-del"><img class="card-basket__img-btn-del"
													src="img/icon/free-i.png" alt=""></button>
									<span class="card-basket__amount">1</span>
									<button class="basket-btn card-basket__btn-add">
											<img class="card-basket__img-btn-add" src="img/icon/free-i.png" alt="">
									</button>
							</div>
							<div class="card-basket__price">uan<span class="card-basket__price-number">${item.price}</span></div>
					</div>
				`
			});
			this.cartItems.innerHTML = cartTemplate;
			document.querySelector('#totalCartQuantity').innerText = cart.length;
			document.querySelector('#totalCartPrice').innerText = total;
		} else {
			this.cartItems.innerText = 'Cart is empty';
		}

	}
}