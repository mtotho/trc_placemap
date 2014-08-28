function UI(){
	//instance=this;
	//this.place;
	this.auditpanel;// = new UIAuditPanel();
	this.heatmappanel;

	$("#lnkAbout").click(function(){
		window.UI.display_instructions();
	});

	$("#lnkHeatmap").click(function(){
		var place_id=window.Helper.getParameterByName("place_id");

		if(!window.Helper.isNull(place_id)){
			var search = "?heatmap=true&place_id="+place_id;
			window.location.search=search;
			//window.location.reload();

		//console.log(window.location);
		}
	});

}

UI.prototype.load = function(){

	//Get the place_id in the url
	window.map.place_id=window.Helper.getParameterByName("place_id");
	var heatmap= window.Helper.getParameterByName("heatmap");
	//console.log(heatmap)

	//if the place_id is null, load up the welcome screen
	if(window.Helper.isNull(window.map.place_id) && heatmap!="true"){
		window.API.getPlaces(window.UI.display_welcome);

	//place_id is not null, should load this place
	}else if(!window.Helper.isNull(window.map.place_id) && heatmap!="true"){

		window.API.getPlace(window.map.place_id, window.UI.start_survey);	
	
	}else if(!window.Helper.isNull(window.map.place_id) && heatmap=="true"){
		
		this.heatmappanel=new HeatmapPanel();
		window.API.getResponses(window.map.place_id, this.heatmappanel.init);
		//window.API.getResponses(window.map.place_id, window.map.setUpHeatmap);
	}
}

UI.prototype.start_survey = function(place_response){
	
	var places = window.Mapper.mapPlaces(place_response);
	var place = places[window.map.place_id];

	this.auditpanel = new UIAuditPanel(place);

	console.log(place);


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

			//var html="<label for='chkSatellite'>Satellite</label><input id='chkSatellite' type='checkbox' value='hybrid' />";
			html+="     <label for='rdoRoadmap'>Roadmap</label>";
			html+=" 	<input id='rdoRoadmap' class='audit_radio' type='radio' name='rdoView' value='roadmap'>";
			
			html+="     <label for='rdoHybrid'>Hybrid</label>";
			html+=" 	<input id='rdoHybrid' class='audit_radio' type='radio' name='rdoView' value='hybrid'>";
			
			html+="     <label for='rdoStreet'>Street</label>";
			html+=" 	<input id='rdoStreet' class='audit_radio' type='radio' name='rdoView' value='street'>";
		
			//visit the selected study areas	
			$("#ui_panel").html(html);
		}

		
	});

}

UI.prototype.display_thankyou = function(){
	var html='';
	html+='<div class="modal fade" id="thanks_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
	html+=	'<div class="modal-dialog modal-lg">';
	html+=		'<div class="modal-content">';
	html+=			'<div class="modal-header">';
	html+=          	'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
	html+=              '<h4 class="modal-title" id="myModalLabel">Thank You!</h4>';
	html+=          '</div>';
	html+=          '<div class="modal-body">';
	html+=    			'<p>Thank you for participating in this street audit. Your feedback will be used anonymously to help ';
	html+=              'improve the streets in this neighborhood.';
	html+=          '</div>';
	html+=			'<div class="modal-footer">';
  //  html+=          	'<button type="button" class="btn btn-default" data-dismiss="modal"></button>';
    html+=          	'<button type="button" id="btnViewHeatmap" class="btn btn-primary">Okay</button>';
    html+=          '</div>';
    html+=		'</div>';
 	html+=	'</div>';
	html+='</div>';

	//Set the UI handle html 
	$("#ui_handle").html(html);

	//enable and show the modal
	$('#thanks_modal').modal();

	//event when modal hide command is fired
	$('#thanks_modal').on('hide.bs.modal', function(e){
		
	});

	//event when modal finished hiding
	$('#thanks_modal').on('hidden.bs.modal', function(e){
		
		
		//Delete html content
		$("#ui_handle").html("");
	});

	//event when "go" button is pressed within modal
	$('#btnViewHeatmap').click(function(){
		$("#thanks_modal").modal('toggle');
		
		window.location="https://google.com";
		/*
		var place_id=window.Helper.getParameterByName("place_id");

		if(!window.Helper.isNull(place_id)){
			var search = "?heatmap=true&place_id="+place_id;
			window.location.search=search;
			//window.location.reload();

		//console.log(window.location);
		}*/
		
	});
}

UI.prototype.display_instructions=function(){

	var html='';
	html+='<div class="modal fade" id="info_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
	html+=	'<div class="modal-dialog modal-lg">';
	html+=		'<div class="modal-content">';
	html+=			'<div class="modal-header">';
	html+=          	'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
	html+=              '<h4 class="modal-title" id="myModalLabel">Welcome to Placemap</h4>';
	html+=          '</div>';
	html+=          '<div class="modal-body">';
	html+=          	'<h5>About</h5>';
	html+=              	'<div class="panel panel-default">';
  	html+=						'<div class="panel-body">';
	html+=              			'<p>Placemap is a tool used by Urban planners to perform various audits on a city or neighborhood. ';
	html+=								'A study area has been created that includes intersections and as well as  mid block street locations. ';
	html+=								'You will rate these street locations based on your prior  ';
	html+=								'knowledge of that spot. Your responses will be anonymous and combined with other input to aggregate visualizations.';
	html+=							'</p>';
	//html+=                          '<p>For more information, please visit the full <a href="about.html" target="_blank">about page</a></p>';
	html+=						'</div>';
	html+=					'</div>';

	html+=          	'<h5>Instructions</h5>';
	html+=				'<ul">';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> Consider the location on the map indicated by the map marker</li>';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> If you know the location, answer each question then click &quot;Next&quot;</li>';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> If you are unfamiliar with the location, click &quot;Skip&quot; </li>';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> At any point you may leave the survey. Your responses up to this point will be used</li>';
	html+=				'</ul>';
	html+=          '</div>';
	html+=			'<div class="modal-footer">';
	html+=          	'<div class="contact">';
	html+=					'<p><em>For additional information please contact:</em></p>';
	html+=					'<p>Michael Toth, <a href="mailto:mftoth@uvm.edu" target="_top">mftoth@uvm.edu</a></p>';
	html+=              '</div>';
  //  html+=          	'<button type="button" class="btn btn-default" data-dismiss="modal"></button>';
    html+=          	'<button type="button" id="btnStart" class="btn btn-primary">Lets get started!</button>';
    html+=          '</div>';
    html+=		'</div>';
 	html+=	'</div>';
	html+='</div>';

	//Set the UI handle html 
	$("#ui_handle").html(html);

	//enable and show the modal
	$('#info_modal').modal();

	//event when modal hide command is fired
	$('#info_modal').on('hide.bs.modal', function(e){
		
	});

	//event when modal finished hiding
	$('#info_modal').on('hidden.bs.modal', function(e){
		
		
		//Delete html content
		$("#ui_handle").html("");
	});

	//event when "go" button is pressed within modal
	$('#btnStart').click(function(){
		$("#info_modal").modal('toggle');
		

		
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

function HeatmapPanel(){

	this.markers;
	this.heatmap=null;
	this.html=null;
	this.study_area="";
}

HeatmapPanel.prototype.re_weigh = function(question_id){
	var heatmapdata = new Array();
	var markers = this.markers;
	var heatmapdict = new Array();

//	var question_id = 3;


	
	for(i=0; i<markers.length; i++){
		var m = markers[i];
		var place_id = m.place_id;
		var responses = m.responses;
		var sum_response=0;
		var weight = 0;
		var ct=0;

		
		for(j=0; j<responses.length; j++){
			r = responses[j];
			

			if(question_id==0){
				sum_response+=parseInt(r.weight);
				ct++;
			}else{
				//console.log(parseInt(r.weight));
				//console.log(r.audit_question_id);
				if(parseInt(r.audit_question_id)==question_id){
					sum_response+=parseInt(r.weight);
					ct++;
					
				}
			}

		}


		if(responses.length>0){

			weight = sum_response/ct;

			var weightedmarker={
				"location": new google.maps.LatLng(m.lat, m.lng),
				"weight": weight
			}


			heatmapdata.push(weightedmarker);
		}


		//console.log("weight for marker " + m.marker_id + " is " + weight);
	}


	

//	console.log(heatmapdata);
	var gradient = [
    'rgba(201, 201, 201, 0)',
    'rgba(201, 201, 201, 1)',
    'rgba(212, 212, 212, 1)',
    //'rgba(255, 50, 0, 0)',
    //'rgba(255, 70, 0, 0)',
    'rgba(224, 204, 204, 1)',
    //'rgba(255, 110, 0, 1)',
    'rgba(255, 100, 0, 1)',
    //'rgba(255, 145, 0, 1)',
    //'rgba(255, 165, 0, 1)',
    'rgba(255, 160, 0, 1)',
    'rgba(255, 200, 0, 1)',
    //'rgba(255, 210, 0, 1)',
    'rgba(255, 221, 0, 1)',
    //'rgba(255, 251, 0, 1)',
    //'rgba(242, 255, 0, 1)',
    'rgba(212, 255, 0, 1)',
    //'rgba(180, 255, 0, 1)',
    'rgba(170, 255, 0, 1)',
    //'rgba(140, 255, 0, 1)',
    'rgba(120, 255, 0, 1)',
 //   'rgba(100, 255, 0, 1)',
    'rgba(0, 255, 0, 1)'
  ];

  var gradient2=[
  	'rgba(255, 90, 0, 1)',  //100%
  	'rgba(247, 94, 0, 1)', ///75%
  	'rgba(250, 229, 0, 1)', //50%
  	'rgba(133, 252, 0, 1)', //25%
  	'rgba(44, 255, 0, 1)',
  ]

    var gradient3 = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(90, 0, 91, 1)',
    'rgba(150, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  //gradient.reverse();
	var heatmap = new google.maps.visualization.HeatmapLayer({
	  data: heatmapdata,
	  radius: 90,
	  gradient: gradient,
	  opacity: 0.4,
	  dissipating:true
	});

	console.log(this.heatmap);
	if(!window.Helper.isNull(this.heatmap)){
		this.heatmap.setMap(null);
	}
	
	//console.log(window.map.map);
	heatmap.setMap(window.map.map);
	this.heatmap=heatmap;
}

HeatmapPanel.prototype.init = function(data){

	window.UI.heatmappanel.study_area = data.place_name;
	window.UI.heatmappanel.markers=data.markers;
	
	//console.log(data);
	var mapOptions = {
		center: new google.maps.LatLng(data.lat, data.lng),
		zoom: parseInt(data.zoom)
	}
	window.map.map.setOptions(mapOptions);

	window.UI.heatmappanel.re_weigh(0);

	window.UI.heatmappanel.draw();
}

HeatmapPanel.prototype.draw = function(){
	this.html="";
	this.html+="<div class='ui_panel_frame' id='heatmap_panel'>";
	this.html+="    <h2>Study Area: <span id='lblStudyArea' class='label label-info'>"+this.study_area+"</span></h2>";
	
	this.html+=     "<label for='ddFilter'>Filter</label>";
	this.html+=     "<select id='ddFilter'>";
	this.html+=     	"<option selected='selected' value=0>All Questions</option>";
	this.html+=         "<option value=1>Feeling of safetly</option>";
	this.html+=         "<option value=2>Overall attractiveness</option>";
	this.html+=         "<option value=3>Mix of stores and services</option>";
	this.html+=         "<option value=4>Ease of walking in location</option>";
	this.html+=     "</select>";

	//this.html+=" 
	//this.html+="    <a id='clear_cookie'>clear cookie (debug)</a>";
	this.html+="</div>";


	$("#ui_panel").html("");
	$("#ui_panel").html(this.html);

	$("#ddFilter").change(function(){
		var question_id = $(this).val();

		window.UI.heatmappanel.re_weigh(question_id);
	});

}

/*


AUDIT PANEL

*/

function UIAuditPanel(place){
	this.place=place;
	this.study_area=place.place_name;
	this.question_area;
	//this.question_input_array=new Array();

	this.survey = new Survey(place);
	
	instance=this;
	
	window.API.getAudit(1, this.loadQuestions);

	//this.draw();

	//this.survey.loadNext();
}

UIAuditPanel.prototype.loadQuestions = function(audit){
	audit=audit.audits[0];
	questions=audit.questions;

	html="";
	for(i=0; i<questions.length; i++){
		var question = questions[i];
		html+="<div class='well well-sm audit_question'>";
		html+="	<p>"+question.question_text+"</p>";
		html+=" <div class='radio-group'>";
		html+="     <label for='radio-1-"+i+"'>1</label>";
		html+=" 	<input id='radio-1-"+i+"' class='audit_radio' type='radio' name='question_id-"+question.question_id+"' value='1'>";
		
		html+="     <label for='radio-2-"+i+"'>2</label>";
		html+=" 	<input id='radio-2-"+i+"' class='audit_radio' type='radio' name='question_id-"+question.question_id+"' value='2'>";
		
		html+="     <label for='radio-2-"+i+"'>3</label>";
		html+=" 	<input id='radio-3-"+i+"' class='audit_radio' type='radio' name='question_id-"+question.question_id+"' value='3'>";
		

		html+="     <label for='radio-2-"+i+"'>Not sure</label>";	
		html+=" 	<input id='radio-4-"+i+"' class='audit_radio' type='radio' name='question_id-"+question.question_id+"' value='-1'>";
		/*
		html+="     <label for='radio-2-"+i+"'>5</label>";
		html+=" 	<input id='radio-5-"+i+"' class='audit_radio' type='radio' name='question_id-"+question.question_id+"' value='5'>";*/
		html+=" </div>"
		html+="</div>";
	}

	instance.question_area=html;

	instance.draw();
}	

UIAuditPanel.prototype.resetRadios = function(){
	var radiogroups = $(".audit_question").find(".radio-group");//.find('.audit_radio');
	for(i=0; i<radiogroups.length;i++){
		$(radiogroups).find('input').each(function(){
			$(this).prop('checked', false);  
		});

	}
}

UIAuditPanel.prototype.readRadios = function(){
	var radiogroups = $(".audit_question").find(".radio-group");//.find('.audit_radio');
	
	marker=instance.survey.getCurrentMarker();
	marker_id=marker.marker_id;
	var responses = Array();
	var checkedCt=0;

	//console.log($(radiogroups).children());
	//$(radiogroups).each(function(){
	//	console.log();
	//});


	$(radiogroups).find('input').each(function(){
		//console.log(this);
		if($(this).prop('checked')){
			checkedCt++;
			var radio_val = $(this).val();
			var question_id_str = $(this).prop('name');
			question_id_str=question_id_str.split("-");
			question_id=question_id_str[1];
			
			response ={
				"question_id":question_id,
				"response": radio_val
			}; 
			
			responses.push(response);
		}
		
		
		//$(this).prop('checked', false);  
	});

	if(checkedCt<radiogroups.length){
		alert("Must select a radio button for each question or you may skip instead.");
		return -1;

	}else{

		var response={
			"participant_id":instance.survey.participant_id,
			"audit_type_id":1,
			"marker_id":marker_id,
			"zoom_changed": window.map.hasZoomed
		};

		//console.log("has zoomed?: " + window.map.hasZoomed);
		response['responses']=responses;
		
		return response;

	}
}


UIAuditPanel.prototype.nextPoint = function(){


	if(this.survey.hasNext()){
		this.resetRadios();
		this.survey.loadNext();
		this.updateProgress();
	}else{

		this.updateProgress();
		window.UI.display_thankyou();
		//alert("Finished");
	}
}

UIAuditPanel.prototype.draw=function(){
	this.html="";
	this.html+="<div class='ui_panel_frame' id='audit_panel'>";
	this.html+="    <h2><span id='lblStudyArea' class='label label-info'>"+this.study_area+"</span></h2>";
	this.html+="    <p id='lblProgress'><span class='label label-success'>Progress</span></p>"
	this.html+="    <div class='progress'>";
	this.html+="    	<div id='survey_progress' class='progress-bar' role='progressbar' style='width:0%'></div>";
	this.html+="    </div>";
	this.html+="    <p><em>Larger values indicate a more positive rating.</em></p>";
	this.html+="    <div id='question_area'>" + this.question_area+"</div>";
	this.html+="	<button id='btnRate' class='btn btn-info'>Next</button>";
	this.html+="	<button id='btnSkip' class='btn'>Skip</button>";
	this.html+="    <a id='clear_cookie'>clear cookie (debug)</a>";
	this.html+="</div>";


	$("#ui_panel").html("");
	$("#ui_panel").html(this.html);

	$("#clear_cookie").click(function(){
		window.Helper.eraseCookie("participant_id");
		location.reload();
	});

	$("#btnRate").click(function(){


		var response = instance.readRadios();
		//console.log(response);

		if(response!=-1){
			window.API.postResponse(response, function(data){
				console.log(data);
			});


			if(instance.survey.hasNext()){
				instance.resetRadios();
				instance.survey.loadNext();
				instance.updateProgress();
			}else{
				window.UI.display_thankyou();
				instance.updateProgress();
				//alert("Finished");
			}

		}else{

		}
		//add response to database
		//instance.nextPoint();
	});

	$("#btnSkip").click(function(){
		
		marker=instance.survey.getCurrentMarker();
		marker_id=marker.marker_id;
		var responses = Array();

		var response={
			"participant_id":instance.survey.participant_id,
			"audit_type_id":1,
			"marker_id":marker_id,
			"zoom_changed":false
		};

		response['responses']=responses;

		window.API.postResponse(response, function(data){
				console.log(data);
		});

		if(instance.survey.hasNext()){
			instance.resetRadios();
			instance.survey.loadNext();
			instance.updateProgress();
		}else{
			window.UI.display_thankyou();
			instance.updateProgress();
		
		}
	});
}

UIAuditPanel.prototype.setStudyArea=function(study_area){
	this.study_area=study_area;
	$("#lblStudyArea").html(this.study_area);
}	

UIAuditPanel.prototype.updateProgress=function(){
	var completion = Math.ceil(this.survey.getCompletion());
	//console.log("updating progress");

	$("#survey_progress").attr("style", "width:"+completion+"%");
	$("#survey_progress").html(completion+"%");
}