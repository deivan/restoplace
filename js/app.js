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
      let selected = selectedCity.data.filter(item => item.id == restoranId)[0];
      let workTime = this.fillData(selected.workTimes);

      document.getElementById('restoranDetails').innerHTML = `
        <h3>${selected.name}</h3>
        <p><strong class="main-addres">Адреса:</strong>${selected.address}</p>${workTime}
      `;
      this.fillMenu(selected.menu);

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

    menuposicion.removeEventListener('click', this.addToCart);
    menuposicion.innerHTML = '';

    for (let i = 0; i < menu.length; i++) {
      let itemWrapper = document.createElement('DIV');

      itemWrapper.className = "card card-menu";
      itemWrapper.innerHTML = `
        <img src="https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg"
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
      menuposicion.addEventListener('click', this.addToCart);
    }
  }

  addToCart(e) {
    console.log(+e.target.dataset.id)
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