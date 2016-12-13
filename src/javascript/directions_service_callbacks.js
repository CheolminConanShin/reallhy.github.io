const shortest_path_color = "green";
const highway_path_color = "blue";
const freeway_path_color = "orange";
const traffic_path_color = "purple";
const shortest_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);
	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : false,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
		markerOptions : {			// 마커 옵션
			draggable : false,			// 마커 드래깅 가능 여부. true 이면 마커를 드래그 할 수 있음. 디폴트 false,
			cation : 'test caption',	// 마커 캡션 설정.
			title : '',					// 마커 타이틀 설정.
			flat : true					// 마커의 그림자 표시여부. true이면 마커 그림자가 표시되지 않음. 디폴트 false
		},
		offPolylines : false,			// 경로 폴리라인 억제 여부. true 이면 경로를 표시하지 않음. 디폴트 false
		polylineOptions : {				// 경로 폴리라인 스타일 옵션
			strokeColor : shortest_path_color,	// 경로 폴리라인 칼라. 디폴트 #ff3131
			strokeWeight : 5			// 경로 폴리라인 두께. 디폴트 5 
		},
	}; 
	var directionsRenderer = new olleh.maps.DirectionsRenderer(directionsRendererOptions);
	directionsRenderer.setMap(map);
}

const highway_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);
	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : false,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
		markerOptions : {				// 마커 옵션
			draggable : false,			// 마커 드래깅 가능 여부. true 이면 마커를 드래그 할 수 있음. 디폴트 false,
			cation : 'test caption',	// 마커 캡션 설정.
			title : '',					// 마커 타이틀 설정.
			flat : true					// 마커의 그림자 표시여부. true이면 마커 그림자가 표시되지 않음. 디폴트 false
		},
		offPolylines : false,			// 경로 폴리라인 억제 여부. true 이면 경로를 표시하지 않음. 디폴트 false
		polylineOptions : {				// 경로 폴리라인 스타일 옵션
			strokeColor : highway_path_color,	// 경로 폴리라인 칼라. 디폴트 #ff3131
			strokeWeight : 5			// 경로 폴리라인 두께. 디폴트 5 
		},
	}; 
	var directionsRenderer = new olleh.maps.DirectionsRenderer(directionsRendererOptions);
	directionsRenderer.setMap(map);
}

const freeway_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);
	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : false,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
		markerOptions : {				// 마커 옵션
			draggable : false,			// 마커 드래깅 가능 여부. true 이면 마커를 드래그 할 수 있음. 디폴트 false,
			cation : 'test caption',	// 마커 캡션 설정.
			title : '',					// 마커 타이틀 설정.
			flat : true					// 마커의 그림자 표시여부. true이면 마커 그림자가 표시되지 않음. 디폴트 false
		},
		offPolylines : false,			// 경로 폴리라인 억제 여부. true 이면 경로를 표시하지 않음. 디폴트 false
		polylineOptions : {				// 경로 폴리라인 스타일 옵션
			strokeColor : freeway_path_color,	// 경로 폴리라인 칼라. 디폴트 #ff3131
			strokeWeight : 5			// 경로 폴리라인 두께. 디폴트 5 
		},
	}; 
	var directionsRenderer = new olleh.maps.DirectionsRenderer(directionsRendererOptions);
	directionsRenderer.setMap(map);
}

const traffic_path_service_callback = function(data) {
	var directionsResult = directionsService.parseRoute(data);
	var directionsRendererOptions = {
		directions : directionsResult, // 길찾기 결과. DirectionsService 의 parseRoute 결과
		map : map,						// 길찾기 결과를 렌더링할 지도
		keepView : false,				// 현재 뷰 유지 여부. true 이면 현재 뷰를 변경하지 않음. 디폴트 false
		offMarkers : false,				// 마커 표시 억제 여부. true 이면 마커를 표시하지 않음. 디폴트 false
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