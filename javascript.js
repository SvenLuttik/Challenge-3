
// init map
var myMap;

function initMap() {
	// set options for map 
	var mapOptions = {
		center: {
			lat: 52.497997, 
			lng: 4.768848
		},
		zoom: 17,
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}