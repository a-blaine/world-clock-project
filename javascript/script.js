function updateTime() {
  let london = document.querySelector("#london");
  if (london) {
    let londonTime = moment().tz("Europe/London");
    let londonTimeElement = london.querySelector(".time");
    let londonDateElement = london.querySelector(".date");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss:SS[<small>]A[<small>]"
    );
  }

  let shanghai = document.querySelector("#shanghai");
  if (shanghai) {
    let shanghaiTime = moment().tz("Asia/Shanghai");
    let shanghaiTimeElement = shanghai.querySelector(".time");
    let shanghaiDateElement = shanghai.querySelector(".date");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format(
      "h:mm:ss:SS[<small>]A[<small>]"
    );
  }

  let phoenix = document.querySelector("#phoenix");
  if (phoenix) {
    let phoenixTime = moment().tz("America/Phoenix");
    let phoenixTimeElement = phoenix.querySelector(".time");
    let phoenixDateElement = phoenix.querySelector(".date");

    phoenixDateElement.innerHTML = phoenixTime.format("MMMM Do YYYY");
    phoenixTimeElement.innerHTML = phoenixTime.format(
      "h:mm:ss:SS[<small>]A[<small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone.length > 0) {
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesContainerElement = document.querySelector("#cities");
    citiesContainerElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss:SS"
          )}<small>${cityTime.format("A")}<small></div>
        </div>
        <a href="/">All cities</a>`;
  }
}

updateTime();
setInterval(updateTime, 1);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
