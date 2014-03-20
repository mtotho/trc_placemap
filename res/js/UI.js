function UI(){
	//instance=this;
	//this.place;
	this.auditpanel;// = new UIAuditPanel();

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
	console.log(heatmap)

	//if the place_id is null, load up the welcome screen
	if(window.Helper.isNull(window.map.place_id) && heatmap!="true"){
		window.API.getPlaces(window.UI.display_welcome);

	//place_id is not null, should load this place
	}else if(!window.Helper.isNull(window.map.place_id) && heatmap!="true"){

		window.API.getPlace(window.map.place_id, window.UI.start_survey);	
	
	}else if(!window.Helper.isNull(window.map.place_id) && heatmap=="true"){
		

		window.API.getResponses(window.map.place_id, window.map.setUpHeatmap);
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
			//visit the selected study areas	
		}

		
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
	html+=								'Your planner has set up a study area that contains a hand selected group of intersections and midblocks. ';
	html+=								'Each participant is asked to provide their feedback by rating each of these intersections and midblocks based on their prior ';
	html+=								'knowledge of that spot. Participant responses will be used anonymously to provide data to the planner and to create a public ';
	html+=								'visualizations of the participant responses.';
	html+=							'</p>';
	html+=						'</div>';
	html+=					'</div>';

	html+=          	'<h5>Instructions</h5>';
	html+=              '<p>As a participant the placemap tool is extremely easy to use.</p>';
	html+=				'<ul">';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> Focus on the location indicated by the map marker</li>';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> Based on your experience of the indicated location, answer each question</li>';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> After selecting each radio button, click the Next button</li>';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> If you are unfamiliar with the location represented, click the I don&apos;t know it button </li>';
	html+=					  '<li><span class="glyphicon glyphicon-chevron-right"></span> At any point you may leave the survey. Your responses up to this point will be used</li>';
	html+=				'</ul>';

	html+=          '</div>';
	html+=			'<div class="modal-footer">';
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
		
		html+="     <label for='radio-2-"+i+"'>4</label>";	
		html+=" 	<input id='radio-4-"+i+"' class='audit_radio' type='radio' name='question_id-"+question.question_id+"' value='4'>";
		
		html+="     <label for='radio-2-"+i+"'>5</label>";
		html+=" 	<input id='radio-5-"+i+"' class='audit_radio' type='radio' name='question_id-"+question.question_id+"' value='5'>";
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

	$(radiogroups).find('input').each(function(){
	
		if($(this).prop('checked')){

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

	var response={
		"participant_id":instance.survey.participant_id,
		"audit_type_id":1,
		"marker_id":marker_id
	};

	response['responses']=responses;
	
	return response;
}


UIAuditPanel.prototype.nextPoint = function(){


	if(this.survey.hasNext()){
		this.resetRadios();
		this.survey.loadNext();
		this.updateProgress();
	}else{

		this.updateProgress();
		alert("Finished");
	}
}

UIAuditPanel.prototype.draw=function(){
	this.html="";
	this.html+="<div class='ui_panel_frame' id='audit_panel'>";
	this.html+="    <h2>Study Area: <span id='lblStudyArea' class='label label-info'>"+this.study_area+"</span></h2>";
	this.html+="    <p id='lblProgress'><span class='label label-info'>Progress</span></p>"
	this.html+="    <div class='progress'>";
	this.html+="    	<div id='survey_progress' class='progress-bar' role='progressbar' style='width:0%'></div>";
	this.html+="    </div>";
	this.html+="    <div id='question_area'>" + this.question_area+"</div>";
	this.html+="	<button id='btnRate' class='btn btn-info'>Next</button>";
	this.html+="	<button id='btnSkip' class='btn'>I don&apos;t know it</button>";
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

		window.API.postResponse(response, function(data){
			console.log(data);
		});


		if(instance.survey.hasNext()){
			instance.resetRadios();
			instance.survey.loadNext();
			instance.updateProgress();
		}else{

			instance.updateProgress();
			alert("Finished");
		}
		//add response to database
		//instance.nextPoint();
	});

	$("#btnSkip").click(function(){
		
		if(instance.survey.hasNext()){
			instance.resetRadios();
			instance.survey.loadNext();
			instance.updateProgress();
		}else{

			instance.updateProgress();
			alert("Finished");
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