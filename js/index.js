let indicator = document.querySelectorAll('.indicator button');
let lightbox = document.querySelector('#lightbox');
let block = document.querySelector('#block'); // 라이트박스 배경
let lightboxContents = document.querySelectorAll(".lightbox-contents");

// lightbox 표시
function lightbox_open(num){
    lightbox.setAttribute('class', 'active');
    block.setAttribute('class', 'active');

    for (let i = 0; i < lightboxContents.length; i++) {
      lightboxContents[i].style.display = 'none'
    }
    lightboxContents[num - 1].style.display = '';

    change_img(num);
    indicator[num-1].focus();	
}

// lightbox close
function lightbox_close(){
    lightbox.removeAttribute('class');
    block.removeAttribute('class');
}

// 이미지 전환 표시 함수
function change_img(val){
  let imgs = document.querySelectorAll('figure > img');

  for(let i = 0; i < imgs.length; i++){
    imgs[i].removeAttribute('class');
  }
  imgs[val - 1].setAttribute('class', 'active');

  for (let i = 0; i < lightboxContents.length; i++) {
    lightboxContents[i].style.display = 'none'
  }
  lightboxContents[val - 1].style.display = '';
}	

// Google Map
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