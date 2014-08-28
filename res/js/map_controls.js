function AddTextInput(controlDiv, map){

    controlDiv.style.padding = '5px';
    controlDiv.id="pac-input";
    controlDiv.class="controls";
   // $(controlDiv).attr("rel", "popover");
    //$(controlDiv).attr("data-content", "Search a location");
    //$(controlDiv).attr("data-container", "body");
   
    //controlDiv.style.

    var controlUI = document.createElement('div');
    controlUI.style.padding='5px';
    controlUI.style.backgroundColor="#EBEBEB";
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '1px';

    controlDiv.appendChild(controlUI);

    var controlInput = document.createElement('input');
    controlInput.id = "txtSearch";
    controlInput.name = "txtSearch";
    controlInput.value = "Search a location";
    controlInput.style.height="3em";
    controlInput.style.width="20em";

    // Create a label
//var controlLabel = document.createElement('label');
    //controlLabel.innerHTML = 'Some information';
  //  controlLabel.setAttribute("for","some-information");
   
    // Create a button to send the information
    var controlButton = document.createElement('a');
    controlButton.innerHTML = 'Search!';
   // controlButton.backgroundColor="";

    // Append everything to the wrapper div
   // controlUI.appendChild(controlInput);
    controlUI.appendChild(controlInput);
    controlUI.appendChild(controlButton);
    
    $(controlButton).click(function(){
        var search_location = $(controlInput).val();
        



    });

    //google.maps.event.addDomListener(controlButton, 'click', onClick);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);
}


function AddMarkerControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#EBEBEB';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '1px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to set the map to Home';
  controlDiv.appendChild(controlUI);

  $(controlUI).addClass('customMapControl');
  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '25px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Add Marker</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // Chicago
  google.maps.event.addDomListener(controlUI, 'click', function() {
    if(window.debug)
			console.log("btnAddMarker click event()");

		var center = window.map.draggableMarker.getPosition();
		lat = center.lat();
		lng = center.lng();
		place_id = window.map.place_id;

    var view ="";
    /*if($("#rdoView").prop('checked')){
      view = $("#chkSatellite").val();
    }else{
      view="street";
    }
*/
    view = $("input:radio[name=rdoView]:checked").val();
    
    if(window.Helper.isNull(view)){
      alert("must select a view");
    }else{
      console.log(view);
      var marker={
        "lat": lat,
        "lng": lng,
        "place_id":place_id,
        "view": view
      };

      console.log(marker);

      window.API.postMarker(marker, window.map.load_marker);
   }
    //console.log(marker);
    /*//window.api.markers.add({
			placeid: window.map.place.pk_placeid,
			//email: window.userEmail,
			lat: lat,
			lng: lng
		});

		window.map.loadPlace(window.map.place);*/
  });
  
}

function AddPlaceControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#EBEBEB';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '1px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to set the map to Home';
  controlDiv.appendChild(controlUI);

   $(controlUI).addClass('customMapControl');

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '25px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Add Place</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // Chicago
  google.maps.event.addDomListener(controlUI, 'click', function() {
    if(window.debug)
			console.log("btnAddPlace click event()");
		
    var area_center = window.map.draggableMarker.getPosition();
    var lat = area_center.lat();
    var lng = area_center.lng();  
    var zoom = window.map.map.getZoom();
    var name = $("#txtAreaName").val();
    var place={
      "name": name,
      "lat": lat,
      "lng": lng,
      "zoom": zoom
    }


    window.API.postPlace(place, function(data){
      var place = data;
      //console.log(data);
      window.map.load_study_area(place);
    })



  });

}

function ResetMapControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#EBEBEB';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '1px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to set the map to Home';
  controlDiv.appendChild(controlUI);

   $(controlUI).addClass('customMapControl');
  
  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '14px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Reset Map</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // Chicago
  google.maps.event.addDomListener(controlUI, 'click', function() {
    if(window.debug)
			console.log("btnResetMap click event()");


		//clear the placeid
		location.hash = "";
  });

}