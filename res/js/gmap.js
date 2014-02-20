/*  gmap.js
/*	map object. handles updating google map
/*	Michael Toth
*/

function gmap(){

	//set up vars
	this.center;
	this.test=3;
	this.map;

	//initialize the map
	this.initialize();
}

gmap.prototype.initialize=function(){

		this.center = new google.maps.LatLng(44.337689, -72.75613709999999);

		console.log(this.test);
		//Initial Map Options
		var mapOptions = {
		      center:this.center,
		      zoom: 10,
		      mapTypeId: google.maps.MapTypeId.ROAD,
		      draggable:true,
		      zoomControl: true,
		      disableDoubleClickZoom:false,
		     scaleControl: true
		};

		//The map variable
		this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		//setup map controls
		var ResetMapControlDiv = document.createElement('div');
		var ResetControl = new ResetMapControl(ResetMapControlDiv, this.map);

		ResetMapControlDiv.index = 1;
		this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(ResetMapControlDiv);

		var MarkerControlDiv = document.createElement('div');
		var MarkerControl = new AddMarkerControl(MarkerControlDiv, this.map);

		MarkerControlDiv.index = 1;
		this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(MarkerControlDiv);

		var PlaceControlDiv = document.createElement('div');
		var PlaceControl = new AddPlaceControl(PlaceControlDiv, this.map);

		PlaceControlDiv.index = 1;
		this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(PlaceControlDiv);

}

