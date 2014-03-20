/*  gmap.js
/*	map object. handles updating google map
/*	Michael Toth
*/

function gmap(){

	//set up vars
	this.center;
	this.map;
	this.draggableMarker;
	this.search_bar;

	this.place_id=0;
	this.markersDict=new Array();


	//controls
	this.btnAddPlace;
	this.btnAddMarker;


	this.instance=this;
	//initialize the map
	this.initialize();
	this.pointMarker;
}

gmap.prototype.initialize=function(){

		this.center = new google.maps.LatLng(44.337689, -72.75613709999999);

		console.log(this.test);
		//Initial Map Options
		var mapOptions = {
		      center:this.center,
		      zoom: 10,
		      mapTypeId: google.maps.MapTypeId.STREET,
		      draggable:true,
		      zoomControl: true,
		      disableDoubleClickZoom:false,
		     scaleControl: true
		};

		//The map variable
		this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		this.draggableMarker = new google.maps.Marker({
				    	map: null,
				    	position:this.center,
				    	draggable:true
	    });

		//setup map controls
		//var ResetMapControlDiv = document.createElement('div');
		//var ResetControl = new ResetMapControl(ResetMapControlDiv, this.map);

		//ResetMapControlDiv.index = 1;
		//this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(ResetMapControlDiv);



		//this.show_search();
}

gmap.prototype.setUpHeatmap = function(data){
	var mapOptions = {
		center: new google.maps.LatLng(data.lat, data.lng),
		zoom: parseInt(data.zoom)
	}
	window.map.map.setOptions(mapOptions);

	var heatmapdata = new Array();
	var markers = data.markers;
	
	for(i=0; i<markers.length; i++){
		var m = markers[i];
		var place_id = m.place_id;
		var responses = m.responses;
		var sum_response=0;
		var weight = 0;
		
		for(j=0; j<responses.length; j++){
			r = responses[j];
			sum_response+=parseInt(r.response);
		}

		if(responses.length>0){
			weight = sum_response/responses.length;

			var weightedmarker={
				"location": new google.maps.LatLng(m.lat, m.lng),
				"weight": weight
			}
			heatmapdata.push(weightedmarker);
		}

		//console.log("weight for marker " + m.marker_id + " is " + weight);
	}

	console.log(heatmapdata);
	var gradient = [
    //'rgba(255, 0, 0, 0)',
    //'rgba(255, 30, 0, 1)',
    //'rgba(255, 10, 0, 0)',
    //'rgba(255, 50, 0, 0)',
    //'rgba(255, 70, 0, 0)',
    'rgba(255, 90, 0, 0)',
    'rgba(255, 110, 0, 1)',
    'rgba(255, 130, 0, 1)',
    'rgba(255, 145, 0, 1)',
    'rgba(255, 165, 0, 1)',
    'rgba(255, 180, 0, 1)',
    'rgba(255, 200, 0, 1)',
    'rgba(255, 210, 0, 1)',
    'rgba(255, 221, 0, 1)',
    //'rgba(255, 251, 0, 1)',
    //'rgba(242, 255, 0, 1)',
    'rgba(212, 255, 0, 1)',
    'rgba(180, 255, 0, 1)',
    'rgba(160, 255, 0, 1)',
    'rgba(140, 255, 0, 1)',
    'rgba(120, 255, 0, 1)',
    'rgba(100, 255, 0, 1)',
    'rgba(0, 255, 0, 1)'
  ];

  var gradient2=[
  	'rgba(255, 90, 0, 1)',  //100%
  	'rgba(247, 94, 0, 1)', ///75%
  	'rgba(250, 229, 0, 1)', //50%
  	'rgba(133, 252, 0, 1)', //25%
  	'rgba(44, 255, 0, 1)',
  ]
  //gradient.reverse();
	var heatmap = new google.maps.visualization.HeatmapLayer({
	  data: heatmapdata,
	  radius: 90,
	  gradient: gradient,
	  opacity: 0.4,
	  dissipating:true
	});

	heatmap.setMap(window.map.map);




	//console.log(data);
}

gmap.prototype.load_study_area=function(place){
	this.center = new google.maps.LatLng(place.lat, place.lng);
	this.map.setCenter(this.center);
	this.map.setZoom(place.zoom);

	//set the current place_id
	this.place_id=place.place_id;

	//User is a planner, set the draggablemarker
	if(window.USER.userType=="planner"){
		this.draggableMarker.setMap(this.map);
		this.draggableMarker.setPosition(this.center);

		window.API.getMarkers(this.place_id, window.map.load_markers);

		//load up the add marker button
		if(window.Helper.isNull(window.map.btnAddMarker)){
			this.btnAddMarker = document.createElement('div');
			var MarkerControl = new AddMarkerControl(this.btnAddMarker, this.map);

			this.btnAddMarker.index = 1;
			this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.btnAddMarker);
		}
	}

}

//load a single audit point for evaluation
gmap.prototype.load_audit_point = function(marker){
	this.center = new google.maps.LatLng(marker.lat, marker.lng);
	this.map.setCenter(this.center);
	this.map.setZoom(20);

	if(!window.Helper.isNull(this.pointMarker)){
		this.pointMarker.setMap(null);
	}

	this.pointMarker = new google.maps.Marker({
		map:this.map,
		position:this.center,
		icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	});
}

gmap.prototype.load_markers=function(markers_response){
	markers=markers_response.markers;

	for(i=0; i<markers.length; i++){
		window.map.load_marker(markers[i]);
	}
}

gmap.prototype.load_marker=function(marker){
	//map to api response to json marker
	console.log(marker);
	var json_marker = window.Mapper.mapMarker(marker);

	//create the google map marker
	var gmarker = new google.maps.Marker({
		map:window.map.map,
		position:new google.maps.LatLng(json_marker.lat, json_marker.lng),
		icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	});

	//add gmarker to map dictionary
	window.map.markersDict[json_marker.marker_id]=gmarker;

}


gmap.prototype.show_search=function(){
	this.search_bar = document.createElement('input');
	$(this.search_bar).attr("id", "pac-input");
	$(this.search_bar).attr("class", "controls");
	$(this.search_bar).attr("placeholder", "Search a location");


  	this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.search_bar);


	var searchBox = new google.maps.places.SearchBox(this.search_bar);

	// [START region_getplaces]
	// Listen for the event fired when the user selects an item from the
	// pick list. Retrieve the matching places for that item.
	google.maps.event.addListener(searchBox, 'places_changed', function() {
		var places = searchBox.getPlaces();
		

		if(places.length==1){
			address = places[0].formatted_address;

			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({ 'address': address}, function(results, status){

				if (status == google.maps.GeocoderStatus.OK) {
				    lat=results[0].geometry.location.lat();
				    lng=results[0].geometry.location.lng();

				    center = new google.maps.LatLng(lat,lng);

				    window.map.map.setCenter(center);
				    window.map.map.setZoom(15);

				    window.map.draggableMarker.setMap(window.map.map);
				    window.map.draggableMarker.setPosition(center);

				    //Only add the control if the button variable is null so we don't duplicate
				    if(window.Helper.isNull(window.map.btnAddPlace)){

					    window.map.btnAddPlace = document.createElement('div');
						var PlaceControl = new AddPlaceControl(window.map.btnAddPlace, this.map);

						window.map.btnAddPlace.index = 1;
						window.map.map.controls[google.maps.ControlPosition.TOP_LEFT].push(window.map.btnAddPlace);
					}

				} else {
				    console.log("Geocode was not successful for the following reason: " + status);
				}
			});
		}
	});
}

