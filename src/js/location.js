
    var photo = document.getElementById("mapContainer");

    photo.addEventListener("click", function() {
      var latitude = "52.51968268135677";
      var longitude = "13.375948164717533";

      var mapURL = "https://www.google.com/maps/place/" + latitude + "," + longitude;

      window.open(mapURL, "_blank");
    });
