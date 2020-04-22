function initMap() {
	var home = new google.maps.Map(document.getElementById('map'));
	var myLocation = new google.maps.LatLng(73.9235, 40.7644);
	var mapOptions = {
		center: myLocation
		zoom: 15,
		mapTypeId: 'satellite'
	}

	var slides = 0;
	var images = [];
	var time = 5000;

	images[0] = "Media/astoria2.jpg";
	images[1] = "Media/subway.jpg";
	images[2] = "Media/astoriapark.jpg";
}