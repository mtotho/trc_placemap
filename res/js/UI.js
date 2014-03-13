function UI(){


}

UI.prototype.load = function(){

	//Get the place_id in the url
	window.map.place_id=window.Helper.getParameterByName("place_id");

	//if the place_id is null, load up the welcome screen
	if(window.Helper.isNull(window.map.place_id)){
		window.API.getPlaces(window.UI.display_welcome);

	//place_id is not null, should load this place
	}else{
		window.API.getPlace(window.map.place_id, window.UI.start_survey);	
	}
}

UI.prototype.start_survey = function(place_response){
	
	var places = window.Mapper.mapPlaces(place_response);
	var place = places[window.map.place_id];

	console.log(place);

	var markers = place.markers;

	console.log(markers);

	//Dont think this shuffle is working
	markers = window.Helper.shuffle(markers);
	var survey = new Survey();
	survey.start();
	//this.current_point=0;
	//while(current_point<markers.length){

	//	window.map.load_audit_point(markers[i]);


		//alert("hit okay");
	//}
}


UI.prototype.display_welcome=function(places_response){
	
	//set the window places variable to the array of places
	//window.places = places_response.places;
	window.Mapper.mapPlaces(places_response);

	var html='';
	html+='<div class="modal fade" id="welcome_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
	html+=	'<div class="modal-dialog modal-lg">';
	html+=		'<div class="modal-content">';
	html+=			'<div class="modal-header">';
	html+=          	'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
	html+=              '<h4 class="modal-title" id="myModalLabel">Welcome to Placemap</h4>';
	html+=          '</div>';
	html+=          '<div class="modal-body">';

	//Display authenticated actions
	if(!window.Helper.isNull(window.USER)){
		html+=      '<p>Welcome back ' + window.USER.userName + '</p>';
		html+=      '<p>Existing study areas: </p>';
		html+=			'<select id="ddStudyArea">';
		html+=				'<option selected="selected" value="0">Create New</option>';
		
		for(key in window.placesDict){
			var place = window.placesDict[key];
			html+=          '<option value="' + place.place_id + '">'+ place.place_name +'</option>';
		}

		html+=			'</select>';

	}


	html+=          '</div>';
	html+=			'<div class="modal-footer">';
    html+=          	'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    html+=          	'<button type="button" id="btnWelcomeGo" class="btn btn-primary">Go</button>';
    html+=          '</div>';
    html+=		'</div>';
 	html+=	'</div>';
	html+='</div>';

	//Set the UI handle html 
	$("#ui_handle").html(html);

	//enable and show the modal
	$('#welcome_modal').modal();

	//event when modal hide command is fired
	$('#welcome_modal').on('hide.bs.modal', function(e){
		
	});

	//event when modal finished hiding
	$('#welcome_modal').on('hidden.bs.modal', function(e){
		
		
		//Delete html content
		$("#ui_handle").html("");
	});

	//event when "go" button is pressed within modal
	$('#btnWelcomeGo').click(function(){
		$("#welcome_modal").modal('toggle');
		
		var area_id = $("#ddStudyArea").val();
		
		//area_id selected is 0, create new one
		if(area_id==0){
			window.UI.create_study_area();
		}else{

			window.map.load_study_area(window.placesDict[area_id]);
			//visit the selected study areas	
		}

		
	});

}


UI.prototype.create_study_area = function(){

		//
		//var TextInputDiv = document.createElement('div');
		//var TextInput = new AddTextInput(TextInputDiv, window.map.map);
		window.map.show_search();


		//$(TextInputDiv).popover();
		//$(TextInputDiv).popover('toggle');


		//Delete search bar when done
		//$("#SearchDiv").remove();
}

UI.prototype.debug = function(data){
	console.log(data);
}