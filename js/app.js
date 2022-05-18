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

    let workTime;
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

      workTime = this.fillData(selected);

      document.getElementById('restoranDetails').innerHTML = `
        <p><strong class="main-addres">Адреса:</strong>${selected.address}</p>
     ${workTime}
      `;
      this.fillMenu(selected.menu);

    })
  }

  fillMenu(menu) {
    let menuposicion = document.querySelector('.cards__block');
    for (let i = 0; i < menu.length; i++) {

      let obverkaTovara = document.createElement('DIV');
      obverkaTovara.className = "card card-menu";
      obverkaTovara.innerHTML = ` <img src="https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg"
      class="card-img-top" alt="картинка блюда">
  <div class="card-body">
      <h5 class="card-title card__title-menu">${menu[i].name}</h5>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Prise: ${menu[i].price}</li>
      <li class="list-group-item">Grammar:0</li>
  </ul>
  <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
  </div>`;
      menuposicion.appendChild(obverkaTovara);
    }
    //console.log(menu);
  }
  fillData(WorkTime) {
    let deteWork = ['пн.', 'вт.', 'ср.', 'чт.', 'пт.', 'сб.', 'вс.'];
    let detePush = "";
    let i = 0;
    WorkTime.workTimes.forEach(element => {
      if (element !== "") {
        detePush += `<p class='date__work'>${deteWork[i]}${element.toString()}</p>`;
      }
      else if(element == "") {
        detePush += `<p class='date__work'>${deteWork[i]} не работаем</p>`;
      }
      i++;

    });
    //console.log(detePush);
    return detePush;
  }
}