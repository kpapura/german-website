
    var photo = document.getElementById("mapContainer");

    photo.addEventListener("click", function() {
      var latitude = "47.17615234321743";
      var longitude = "8.50702517021836";

      var mapURL = "https://www.google.com/maps/place/" + latitude + "," + longitude;

      window.open(mapURL, "_blank");
    });
