function Survey(place){

	//var instance=this;
	this.markersDict=window.Mapper.mapMarkers(place.markers);
	//console.log(this.markersDict);

	//this.markers=window.Helper.shuffle(this.markers);
	this.incompleted_markers= new Array();
	this.responded_markers = new Array();
	this.current_marker;
	
	//this.pointer =0;

	//Get the participant id from the cookie
	this.participant_id=window.Helper.readCookie("participant_id");

	window.UI.display_instructions();

	//Check to see if the participant id was a cookie value
	if(window.Helper.isNull(this.participant_id)){
		
		//window.UI.display_instructions();

		//Participant wasn't created, create a new participant in the database and set the id/cookie
		window.API.postParticipant(function(data){
			instance.participant_id=data.participant_id;

			window.Helper.createCookie("participant_id", instance.participant_id, 10);	
		});
	}

	console.log("participant_id: " + this.participant_id);

	window.API.getParticipantProgress(this.participant_id, place.place_id, function(data){
		instance.survey.syncProgress(data);

		if(instance.survey.hasNext()){
			instance.survey.loadNext();	
		}

		setTimeout(function(){
			//console.log("delayed");
			instance.updateProgress();
		}
		, 1000);
	});
}


Survey.prototype.syncProgress = function(completed_markers){
	
	for(key in instance.survey.markersDict){

		//Marker has been completed, push to that array
		if($.inArray(key, completed_markers)!=-1){
			instance.survey.responded_markers.push(key);
		//marker has not been completed, push to incomplete
		}else{
			instance.survey.incompleted_markers.push(instance.survey.markersDict[key]);
		}
	}

	//shuffle markers
	instance.survey.incompleted_markers=window.Helper.shuffle(instance.survey.incompleted_markers);

	//console.log("responded marker count: " + this.responded_markers.length);
	//console.log("total marker count: " + window.Helper.sizeof(this.markersDict));
	//console.log("incompleted: " + this.incompleted_markers.length);
	//console.log(completed_markers);
	//console.log(instance.survey.responded_markers);
	//console.log(instance.survey.incompleted_markers);
	//instance.loadNext();
}

Survey.prototype.hasNext = function(){
	if(this.incompleted_markers.length>0){
		return true;
	}else{
		return false;
	}
}


Survey.prototype.loadNext = function(){
	//this.complete_marker();

	if(this.incompleted_markers.length>0){
		//console.log("responded: " + this.responded_markers.length);
		var marker = this.incompleted_markers[0];
		this.incompleted_markers.splice(0, 1);
		

		this.current_marker = marker;
		this.responded_markers.push(marker.marker_id);
		window.map.load_audit_point(marker);
		//this.pointer++;
	}
	/*
	if(this.incompleted_markers.length>0){
		console.log("responded: " + this.responded_markers.length);
		var marker = this.incompleted_markers[0];
		this.current_marker = marker;
		window.map.load_audit_point(marker);
		//this.pointer++;
	}*/
}

Survey.prototype.getCompletion = function(){
	var completion = this.responded_markers.length/ window.Helper.sizeof(this.markersDict);
	return completion*100;
}
Survey.prototype.getCurrentMarker=function(){
	return this.current_marker;
}