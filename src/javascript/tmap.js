var map;
var appKey = "2447e707-af39-327f-ac4c-78189ebfd9f9";
//초기화 함수
function initTmap(){
    map = new Tmap.Map({div:'map_div',
        width:'100%',
        height:'70%',
        transitionEffect:"resize",
        animation:true
    });
    document.getElementById("route").addEventListener("click", function(){
        parseLocation(document.getElementById("start").value, document.getElementById("end").value, searchRoute);
    });
   // $('#destinationDialog').modal('show');
};

function parseLocation(address1, address2, callback){
    var urlStr = "https://apis.skplanetx.com/tmap/geo/fullAddrGeo?version=1&format=json&addressFlag=F00";
    urlStr += "&appKey=" + appKey;
    urlStr += "&fullAddr=";
    $.getJSON(urlStr + address1, function(result1){
        var coord1 = result1.coordinateInfo.coordinate[0];
        console.log(coord1);
        $.getJSON(urlStr + address2, function(result2){
            var coord2 = result2.coordinateInfo.coordinate[0];
            console.log(coord2);
            callback(coord1.newLon, coord1.newLat, coord2.newLon, coord2.newLat);
        });
    });
}
var routeLayer;
//경로 정보 로드
function searchRoute(startX, startY, endX, endY){
    if(routeLayer) map.removeLayer(routeLayer);
    try{
        var routeFormat = new Tmap.Format.KML({extractStyles:true, extractAttributes:true});
        var urlStr = "https://apis.skplanetx.com/tmap/routes?version=1&format=xml";
        urlStr += "&startX="+startX;
        urlStr += "&startY="+startY;
        urlStr += "&endX="+endX;
        urlStr += "&endY="+endY;
        urlStr += "&appKey="+appKey;
        var prtcl = new Tmap.Protocol.HTTP({
            url: urlStr,
            format:routeFormat
        });
        routeLayer = new Tmap.Layer.Vector("route", {protocol:prtcl, strategies:[new Tmap.Strategy.Fixed()]});
        routeLayer.events.register("featuresadded", routeLayer, onDrawnFeatures);
        map.addLayer(routeLayer);
    } catch(error){
        console.log(error);
    }
}
//경로 그리기 후 해당영역으로 줌
function onDrawnFeatures(e){
    map.zoomToExtent(this.getDataExtent());
}
