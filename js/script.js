var map;
function initMap () {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:34.75, lng: -111.74},
      zoom: 9
    });
}