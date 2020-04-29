
  function initMap() {
        var map = new google.maps.Map(document.getElementById("eu-map"), {
          zoom: 3,
          center: { lat: 46.202, lng: 1.2644 },
        });

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var markers = locations.map(function (location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
          });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      };
      var locations = [
        { lat: 51.5074, lng: -0.118092 },
        { lat: 48.8566, lng: 2.3522 },
        { lat: 40.4168, lng: -3.703790 },
        { lat: 38.7223, lng: -9.142685 },
        { lat: 52.3667, lng: 4.899431 },
      ];

 