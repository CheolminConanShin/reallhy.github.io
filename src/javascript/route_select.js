var map, directionsService;
var priorityType;
// 초기화 함수
var documentReady = function() {
	directionsService = new olleh.maps.DirectionsService('frKMcOKXS*l9iO5g');
	let geolocation_callback = function(position) {
		map = new olleh.maps.Map('map_div', {
			center : new olleh.maps.LatLng(position.coords.latitude, position.coords.longitude),
			zoom : 7,
			zoomControl: true,
			copyrightControl: false,
			mapTypeControl: false,
			measureControl: false,
			scaleControl: false,
			panControl: false,
		});
		// sds : 37.516580, 127.100821
		// 수원 : 37.278013, 127.034959
		// origin : new olleh.maps.UTMK(960487, 1955309.75), 
		// destination : new olleh.maps.UTMK(960804.5, 1956454), 
	}
	navigator.geolocation.getCurrentPosition(geolocation_callback, null, null);
}

var clearMap = function() {
	let polylines = document.querySelectorAll('#layer_container svg polyline')
	for (var polyline of polylines) {
		polyline.remove();
	}
}

var recommendedRoute = function() {
	clearMap();
	directionsService.route({
		origin : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.516580, 127.100821)),
		destination : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.278013, 127.034959)),
		projection : olleh.maps.DirectionsProjection.UTM_K, 
		travelMode : olleh.maps.DirectionsTravelMode.DRIVING,
		priority : olleh.maps.DirectionsDrivePriority.PRIORITY_0
	}, 
	getCallbackString(olleh.maps.DirectionsDrivePriority.PRIORITY_0)
	); 
}	
var shortestRoute = function() {
	clearMap();
	directionsService.route({
		origin : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.516580, 127.100821)),
		destination : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.278013, 127.034959)),
		projection : olleh.maps.DirectionsProjection.UTM_K, 
		travelMode : olleh.maps.DirectionsTravelMode.DRIVING,
		priority : olleh.maps.DirectionsDrivePriority.PRIORITY_1
	}, 
	getCallbackString(olleh.maps.DirectionsDrivePriority.PRIORITY_1)
	); 
}
var freeRoute = function() {
	clearMap();
	directionsService.route({
		origin : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.516580, 127.100821)),
		destination : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.278013, 127.034959)),
		projection : olleh.maps.DirectionsProjection.UTM_K, 
		travelMode : olleh.maps.DirectionsTravelMode.DRIVING,
		priority : olleh.maps.DirectionsDrivePriority.PRIORITY_2
	}, 
	getCallbackString(olleh.maps.DirectionsDrivePriority.PRIORITY_2)
	); 
}