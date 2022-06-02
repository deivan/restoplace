window.addEventListener('load', () => {
  new App();
  console.log('app started.', DB);
});

class App {
  citySelector = document.getElementById('citySelector');
  cities = [];

  constructor() {
    this.selectedCity = null;
    this.restoranSelector = document.getElementById('restorationListSelector');
    this.selectedRestaurant = null;
    this.initCities();
    this.initEvents();
    this.restoreCity();
  }

  restoreCity() {
    this.selectedCity = window.localStorage.getItem('selectedCity');
    if (this.selectedCity) {
      document.querySelector('#selectedCity').innerText = this.cities[this.selectedCity - 1];
      document.querySelector('#selectedCityLabel').innerText = this.cities[this.selectedCity - 1];
      this.fillRestoranList();
    }
  }

  initCities() {
    DB.forEach(item => {
      let li = document.createElement('LI');
      li.innerHTML = `<a class="dropdown-item" data-city="${item.id}" href="#">${item.name}</a>`
      this.cities.push(item.name);
      citySelector.appendChild(li);
    });
  }

  initEvents() {
    citySelector.addEventListener('click', e => {
      this.selectedCity = e.target.dataset.city || '';
      if (this.selectedCity) {
        document.querySelector('#selectedCity').innerText = this.cities[this.selectedCity - 1];
        document.querySelector('#selectedCityLabel').innerText = this.cities[this.selectedCity - 1];
        this.fillRestoranList();
        document.getElementById('restoranDetails').innerHTML = '';
        window.localStorage.setItem('selectedCity', this.selectedCity);
      }
    });

    this.restoranSelector.addEventListener('click', e => {
      let restoranId = e.target.dataset.restoran || '';
      let selectedCity = DB.filter(item => item.id == +this.selectedCity)[0];
      let workTime;

      this.selectedRestaurant = selectedCity.data.filter(item => item.id == restoranId)[0];
      workTime = this.fillData(this.selectedRestaurant.workTimes);

      document.getElementById('restoranDetails').innerHTML = `
        <h3>${this.selectedRestaurant.name}</h3>
        <p><strong class="main-addres">Адреса:</strong>${this.selectedRestaurant.address}</p>${workTime}
      `;
      this.fillMenu(this.selectedRestaurant.menu);

    });
  }

  fillRestoranList() {
    let selectedCity = DB.filter(item => item.id == +this.selectedCity)[0];

    this.restoranSelector.innerHTML = '';

    selectedCity.data.forEach(item => {
      let li = document.createElement('LI');
      li.innerHTML = `<span class="dropdown-item" data-restoran="${item.id}">${item.name}</span>`
      this.restoranSelector.appendChild(li);
    });
  }

  fillMenu(menu) {
    let menuposicion = document.querySelector('#currentMenu');

    menuposicion.removeEventListener('click', this.addToCart.bind(this));
    menuposicion.innerHTML = '';

    for (let i = 0; i < menu.length; i++) {
      let itemWrapper = document.createElement('DIV');

      itemWrapper.className = "card card-menu";
      itemWrapper.innerHTML = `
        <img src="img/${menu[i].img}"
             class="card-img-top" alt="картинка блюда">
          <div class="card-body">
            <h5 class="card-title card__title-menu">${menu[i].name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: ${menu[i].price}</li>
          </ul>
          <div class="card-body">
            <button type="button" class="btn btn-success js-add-item-to-cart" data-id="${menu[i].id}">До кошику</button>
          </div>
      `;
      menuposicion.appendChild(itemWrapper);
    }
    menuposicion.addEventListener('click', this.addToCart.bind(this));
  }

  addToCart(e) {
    console.log(+e.target.dataset.id)
    let menuItem = this.selectedRestaurant.menu.filter(item => item.id == +e.target.dataset.id);
    console.log(menuItem)
    if (menuItem.length) {
      let currentCart = window.localStorage.getItem('cart') || '[]'; // String
      let cart = JSON.parse(currentCart); // Object
      cart.push(menuItem[0]);
      document.getElementById('cartCounter').innerText = cart.length;
      window.localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  fillData(wt) {
    let dateWork = ['пн.', 'вт.', 'ср.', 'чт.', 'пт.', 'сб.', 'нд.'];
    let datePush = '';
    for (let i = 0; i < wt.length; i++) {
      datePush += `${dateWork[i]} ${wt[i]}${i !== wt.length - 1 ? ', ' : ''}`
    }
    return datePush;
  }
}
