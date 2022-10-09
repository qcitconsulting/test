function initialize() {
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(-2.1890375, -79.900023), //change the coordinates
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(51.488966, -0.096777) //change the coordinates
	});
	google.maps.event.addListener(marker, "click", function () {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);