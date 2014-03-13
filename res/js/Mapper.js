function Mapper(){

}

Mapper.prototype.mapPlaces = function(place_response){
	//window.places = null;
	places = place_response.places;
	window.placesDict=new Array();

	for(i=0; i<places.length; i++){
		
	try{
			p = places[i];
			console.log(i);	
			var place = new Place();
	
			//console.log(place);
			place.place_id  =p.place_id;
			place.place_name=p.place_name;
			place.lat       =p.lat;
			place.lng       =p.lng;
			place.zoom      =parseInt(p.zoom);
			
			for(k=0; k<p.markers.length; k++){
				place.markers[k]=window.Mapper.mapMarker(p.markers[k]);
			}

			window.placesDict[place.place_id] = place;
		}catch(e){
			console.log("error thrown mapping Place " + p.place_id + ": "+e);
		}
	}

	return window.placesDict;
	//window.places=places;
}

Mapper.prototype.mapMarker = function(marker_response){

	try{
		var marker = new Marker();
		marker.marker_id = marker_response.marker_id;
		marker.place_id  = marker_response.place_id;
		marker.lat       = marker_response.lat;
		marker.lng       = marker_response.lng;

	}catch(e){
		console.log("error thrown mapping Marker " + marker_response.marker_id + ": "+e);
	}

	return marker;
}