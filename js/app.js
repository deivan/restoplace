window.addEventListener('load', () => {
  new App();
  console.log('app started.', DB);
});

class App {
  citySelector = document.getElementById('citySelector');
  cities = [];

  constructor() {
    this.selectedCity = '';
    this.initCities();
    this.initEvents();
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
        this.fillRestoranList(this.selectedCity);
      }
    });
  }

  fillRestoranList(city) {
    let selectedCity = DB.filter(item => item.id == city)[0];
    let restoranSelector = document.getElementById('restorationListSelector');

    selectedCity.data.forEach(item => {
      let li = document.createElement('LI');
      li.innerHTML = `<span class="dropdown-item" data-restoran="${item.id}">${item.name}</span>`
      restoranSelector.appendChild(li);
    });

    restoranSelector.addEventListener('click', e => {
      let restoranId = e.target.dataset.restoran || '';
      let selected = selectedCity.data.filter(item => item.id == restoranId)[0];
      document.getElementById('restoranDetails').innerHTML = `
        <p><strong>Адреса:</strong>${selected.address}</p>
        <p>${selected.workTimes.toString()}</p>
      `;
      this.fillMenu(selected.menu);
    })
  }

  fillMenu(menu) {
    console.log(menu)
  }
}