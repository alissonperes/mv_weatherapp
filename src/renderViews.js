const mainApp = document.getElementById('app');

const newDiv = `<div class="location">
  <div class="new-location">
    <input
      id="change-location-input"
      type="text"
      name=""
      placeholder="New Location"
    />
    <button id="change-location-btn" type="button" name="changeLocation">
      Change Location
    </button>
  </div>
  <div class="current-forecast">
    <h1 id="current-city">Brasília</h1>
    <!-- <h3>few clouds</h3>
    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" /> -->
  </div>
</div>
<div class="main-forecast"></div>`;
