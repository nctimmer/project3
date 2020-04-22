function initMap() {
	var home = new google.maps.Map(document.getElementById('map'));
	var myLocation = new google.maps.LatLng(73.9235, 40.7644);
	var mapOptions = {
		center: myLocation
		zoom: 15,
		mapTypeId: 'satellite'

		var marker = new google.maps.Marker({position: myLocation, map: home});
	}


	var slides = 0;
	var images = [];
	var time = 5000;

	images[0] = "Media/astoria2.jpg";
	images[1] = "Media/subway.jpg";
	images[2] = "Media/astoriapark.jpg";

	function changeImg() {
		document.getElementById('slide_image').src = images[slides];
		if (slides < images.length - 1) {
			slides++;
		}else {
			slides = 0;
		}
		setTimeout("changeImg()", time);
	}
	window.onload = changeImg;
}