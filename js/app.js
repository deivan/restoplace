const CITIES = {
  dnipro: 'Дніпро',
  kyiv: 'Київ',
  lviv: 'Львів'
};

window.addEventListener('load', () => {
  new App();
  console.log('app started.');
});

class App {
  constructor() {
    this.selectedCity = '';
    this.initEvents();
  }

  initEvents() {
    const citySelector = document.querySelector('#citySelector');

    citySelector.addEventListener('click', e => {
      this.selectedCity = e.target.dataset.city || '';
      if (this.selectedCity) document.querySelector('#selectedCity').innerText = CITIES[this.selectedCity]
    });
  }
}