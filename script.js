function initMap() {

	var myLatLng = { lat: 40.7644, lng: -73.9235 };

	var map = new.google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatLng
		mapTypeId: google.maps.MapTypeId.HYBRID
	});

	 var marker = new google.maps.Marker({
	 	position: myLatLng,
	 	map: map,
	 });
	
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
		setTimeout(changeImg, time);
	}
	window.onload = changeImg;
