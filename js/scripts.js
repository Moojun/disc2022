function initMap() {

  let styleArray = [
    {
      featureType: "all",
      stylers: [
        {saturation: 10}
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {hue: "#00ffee"},
        {saturation: 50}
      ]
    },
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        {visibility: "off"}
      ]
    }
  ];

  let map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 37.6293, lng: 127.0815},
    scrollwheel: false,
    zoom: 16,
    styles: styleArray
  });

  let marker = new google.maps.Marker({
    map: map,
    position: {lat: 37.6293, lng: 127.0815},
    title: "Here is our location"
  });

  let infoWindow = new google.maps.InfoWindow({map: map});
  let my_position = {lat: 37.6293, lng: 127.0815};
  infoWindow.setPosition(my_position);
  infoWindow.setContent("Here is our location");
}