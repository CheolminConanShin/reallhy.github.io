var map, directionsService;
var priorityType;
// 초기화 함수
function init() {
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
		
		directionsService = new olleh.maps.DirectionsService('frKMcOKXS*l9iO5g');
		directionsService.route({
				origin : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.516580, 127.100821)),
				destination : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.278013, 127.034959)),
				projection : olleh.maps.DirectionsProjection.UTM_K, 
				travelMode : olleh.maps.DirectionsTravelMode.DRIVING,
				priority : olleh.maps.DirectionsDrivePriority.PRIORITY_0
			}, 
			getCallbackString(olleh.maps.DirectionsDrivePriority.PRIORITY_0)
		); 
		directionsService.route({
				origin : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.516580, 127.100821)),
				destination : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.278013, 127.034959)),
				projection : olleh.maps.DirectionsProjection.UTM_K, 
				travelMode : olleh.maps.DirectionsTravelMode.DRIVING,
				priority : olleh.maps.DirectionsDrivePriority.PRIORITY_1
			}, 
			getCallbackString(olleh.maps.DirectionsDrivePriority.PRIORITY_1)
		); 
		directionsService.route({
				origin : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.516580, 127.100821)),
				destination : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.278013, 127.034959)),
				projection : olleh.maps.DirectionsProjection.UTM_K, 
				travelMode : olleh.maps.DirectionsTravelMode.DRIVING,
				priority : olleh.maps.DirectionsDrivePriority.PRIORITY_2
			}, 
			getCallbackString(olleh.maps.DirectionsDrivePriority.PRIORITY_2)
		); 
		directionsService.route({
				origin : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.516580, 127.100821)),
				destination : new olleh.maps.UTMK.valueOf(new olleh.maps.LatLng(37.278013, 127.034959)),
				projection : olleh.maps.DirectionsProjection.UTM_K, 
				travelMode : olleh.maps.DirectionsTravelMode.DRIVING,
				priority : olleh.maps.DirectionsDrivePriority.PRIORITY_3
			}, 
			getCallbackString(olleh.maps.DirectionsDrivePriority.PRIORITY_3)
		); 
	}
	navigator.geolocation.getCurrentPosition(geolocation_callback, null, null);
}

$(document).ready(function() {
	init();
	var flag = true;
	$('html').on("click", function(){
		if(flag) {
			var screen = document.querySelector('html');
			if(screen.requestFullScreen) {
			    screen.requestFullScreen();
			} else if(screen.mozRequestFullScreen) {
				screen.mozRequestFullScreen();
			} else if(screen.webkitRequestFullScreen) {
				screen.webkitRequestFullScreen();
			}
		}
		flag = false;
	});	
});