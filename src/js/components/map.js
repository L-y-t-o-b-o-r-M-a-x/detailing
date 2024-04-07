let center = [56.00453829737664, 37.864109246032726];

function init() {
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(
    [56.00396119640047, 37.863905398147594],
    {
      balloonContent: `

    <div class="balloon">
      <h3 class="balloon__title">Наш ks bunker</h3>
      <div class="balloon__address">2-й Фабричный проезд, 16, Пушкино</div>
      <div class="balloon__contacts">
        <div class="balloon__contacts-tel">
        <a href="tel:+79804767246">+79804767246</a>
        </div>
        <div class="balloon__contacts-tel">
        <a href="tel:+79859437936">+79859437936</a>
        </div>
      </div>
    </div>

    `,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "img/marker.png",
      iconImageSize: [30, 30],
      iconImageOffset: [-15, -27],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);

  placemark.balloon.open();
}

ymaps.ready(init);
