 const SHORTEST_PATH_COLOR = "green";
const HIGHWAY_PATH_COLOR = "blue";
const FREEWAY_PATH_COLOR = "orange";
const TRAFFIC_PATH_COLOR = "purple";
const DEFAULT_TAXI_FEE = 3000;

let routeDirectionListBox = document.querySelector("#routeDirectionList");
let routeDirectionDetails = document.querySelector("#routeDirectionDetails")

const shortest_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);

	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : true,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
		markerOptions : {			// 마커 옵션
			draggable : false,			// 마커 드래깅 가능 여부. true 이면 마커를 드래그 할 수 있음. 디폴트 false,
			cation : 'test caption',	// 마커 캡션 설정.
			title : '',					// 마커 타이틀 설정.
			flat : true					// 마커의 그림자 표시여부. true이면 마커 그림자가 표시되지 않음. 디폴트 false
		},
		offPolylines : false,			// 경로 폴리라인 억제 여부. true 이면 경로를 표시하지 않음. 디폴트 false
		polylineOptions : {				// 경로 폴리라인 스타일 옵션
			strokeColor : SHORTEST_PATH_COLOR,	// 경로 폴리라인 칼라. 디폴트 #ff3131
			strokeWeight : 5			// 경로 폴리라인 두께. 디폴트 5 
		},
	}; 
	var directionsRenderer = new olleh.maps.DirectionsRenderer(directionsRendererOptions);

	setRouteDirectionDetails(directionsResult);
	directionsRenderer.setMap(map);
}

const highway_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);
	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : true,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
		markerOptions : {				// 마커 옵션
			draggable : false,			// 마커 드래깅 가능 여부. true 이면 마커를 드래그 할 수 있음. 디폴트 false,
			cation : 'test caption',	// 마커 캡션 설정.
			title : '',					// 마커 타이틀 설정.
			flat : true					// 마커의 그림자 표시여부. true이면 마커 그림자가 표시되지 않음. 디폴트 false
		},
		offPolylines : false,			// 경로 폴리라인 억제 여부. true 이면 경로를 표시하지 않음. 디폴트 false
		polylineOptions : {				// 경로 폴리라인 스타일 옵션
			strokeColor : HIGHWAY_PATH_COLOR,	// 경로 폴리라인 칼라. 디폴트 #ff3131
			strokeWeight : 5			// 경로 폴리라인 두께. 디폴트 5 
		},
	}; 
	var directionsRenderer = new olleh.maps.DirectionsRenderer(directionsRendererOptions);

	setRouteDirectionDetails(directionsResult);
	directionsRenderer.setMap(map);
}

const freeway_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);
	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : true,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
		markerOptions : {				// 마커 옵션
			draggable : false,			// 마커 드래깅 가능 여부. true 이면 마커를 드래그 할 수 있음. 디폴트 false,
			cation : 'test caption',	// 마커 캡션 설정.
			title : '',					// 마커 타이틀 설정.
			flat : true					// 마커의 그림자 표시여부. true이면 마커 그림자가 표시되지 않음. 디폴트 false
		},
		offPolylines : false,			// 경로 폴리라인 억제 여부. true 이면 경로를 표시하지 않음. 디폴트 false
		polylineOptions : {				// 경로 폴리라인 스타일 옵션
			strokeColor : FREEWAY_PATH_COLOR,	// 경로 폴리라인 칼라. 디폴트 #ff3131
			strokeWeight : 5			// 경로 폴리라인 두께. 디폴트 5 
		},
	}; 
	var directionsRenderer = new olleh.maps.DirectionsRenderer(directionsRendererOptions);

	setRouteDirectionDetails(directionsResult);
	directionsRenderer.setMap(map);
}

const traffic_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);
	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : true,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
		markerOptions : {				// 마커 옵션
			draggable : false,			// 마커 드래깅 가능 여부. true 이면 마커를 드래그 할 수 있음. 디폴트 false,
			cation : 'test caption',	// 마커 캡션 설정.
			title : '',					// 마커 타이틀 설정.
			flat : true					// 마커의 그림자 표시여부. true이면 마커 그림자가 표시되지 않음. 디폴트 false
		},
		offPolylines : false,			// 경로 폴리라인 억제 여부. true 이면 경로를 표시하지 않음. 디폴트 false
		polylineOptions : {				// 경로 폴리라인 스타일 옵션
			strokeColor : traffic_path_color,	// 경로 폴리라인 칼라. 디폴트 #ff3131
			strokeWeight : 5			// 경로 폴리라인 두께. 디폴트 5 
		},
	}; 
	var directionsRenderer = new olleh.maps.DirectionsRenderer(directionsRendererOptions);

	setRouteDirectionDetails(directionsResult);
	directionsRenderer.setMap(map);
}

var getCallbackString = function(priorityType) {
	switch(priorityType) {
		case "0" : 
			return "shortest_path_service_callback"
		case "1" : 
			return "highway_path_service_callback"
		case "2" : 
			return "freeway_path_service_callback"
		case "3" : 
			return "traffic_path_service_callback"
		default : 
			return "traffic_path_service_callback"
	}
}

let setRouteDirectionDetails = (directionsResult) => {
	var displayArray = getDestinationRouteArray(directionsResult);
	var duration = getDuration(directionsResult);
	var distance = getDistance(directionsResult);
	var fee = getFee(directionsResult);

	routeDirectionListBox.textContent = displayArray;
	routeDirectionDetails.querySelector("#duration").textContent = duration;
	routeDirectionDetails.querySelector("#distance").textContent = distance;
	routeDirectionDetails.querySelector("#fee").textContent = fee;
}

let getDestinationRouteArray = function(durationResult) {
	var destinationArray = [];
	for(var route of durationResult.result.routes) {
		if(route.node_name != "" && route.node_name != undefined) {
			destinationArray.push(route.node_name);
		}
	}
	
	var uniqueArray = destinationArray.filter(function(item, pos, self) {
		return self.indexOf(item) == pos;
	});

	var displayArray = [];
	if(uniqueArray.length > 5) {
		var mok = uniqueArray.length/5;
		for(var cnt = 0; cnt < 5; cnt++) {
			displayArray.push(uniqueArray[Math.floor(mok*cnt)]);
		}
	} else {
		displayArray = uniqueArray;
	}

	return displayArray.toString().replace(/,/gi,"\u00a0\u00a0\u00a0\u00a0>\u00a0\u00a0\u00a0\u00a0");
}

let getDuration = function(directionsResult) {
	var durationMinutes = directionsResult.result.total_duration.value;
	var elapsedHours = Math.floor(durationMinutes / 60);
	var elapsedMinutes = Math.floor((durationMinutes / 60 - elapsedHours) * 60);
	return "약 " + (elapsedHours > 0 ? elapsedHours + "시간" : "") + (elapsedMinutes > 0 ? elapsedMinutes + "분" : "");
}

let getDistance = function(directionsResult) {
	var distanceInKm = directionsResult.result.total_distance.value/1000;
	return "약 " + parseFloat(distanceInKm).toFixed(2) + "km";
}

let getFee = function(directionsResult) {
	var distanceInKm = directionsResult.result.total_distance.value/1000;
	return "택시비 약 " + (Math.floor(distanceInKm) * 1000 <= DEFAULT_TAXI_FEE ? DEFAULT_TAXI_FEE : Math.floor(distanceInKm) * 1000) + "원";
}
