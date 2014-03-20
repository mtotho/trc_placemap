function Survey(place){
	instance=this;
	this.markers=place.markers;
	this.markers = window.Helper.shuffle(this.markers);
	this.pointer=0;

	

	//Get the participant id from the cookie
	this.participant_id=window.Helper.readCookie("participant_id");

	//Check to see if the participant id was a cookie value
	if(window.Helper.isNull(this.participant_id)){
		
		//Participant wasn't created, create a new participant in the database and set the id/cookie
		window.API.postParticipant(function(data){
			instance.participant_id=data.participant_id;

			window.Helper.createCookie("participant_id", instance.participant_id, 10);	
		});
	}


}
Survey.prototype.hasNext = function(){
	if(this.pointer<this.markers.length){
		return true;
	}else{
		return false;
	}
}

Survey.prototype.loadNext = function(){
	window.map.load_audit_point(this.markers[this.pointer]);
	this.pointer++;
}

Survey.prototype.getCompletion = function(){
	var completion = this.pointer/this.markers.length;
	return completion*100;
}
Survey.prototype.getCurrentMarker=function(){
	return this.markers[this.pointer];
}