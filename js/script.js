var map;
function initMap () {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:34.75, lng: -111.74},
      zoom: 9
    });
}
 var btn = document.querySelector(".hotel-search-btn");
 var popup = document.querySelector(".search-window");
 var field = popup.querySelector("[name=checkin-day]");
 var form = popup.querySelector("form");
 var checkin = popup.querySelector("[name=checkin-day");
 var checkout = popup.querySelector("[name=checkout-day");

 btn.addEventListener("click", function(evt) {
 popup.classList.toggle("search-window-show");
 field.focus();
});

 form.addEventListener("submit", function(evt) {
 	if(!checkin.value || !checkout.value) {
 	evt.preventDefault();
    console.log("Нужно ввести логи и пароль");
 	}
 });

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
	  if (popup.classList.contains("search-window-show")) {
        popup.classList.remove("search-window-show");
	}
  }
});
