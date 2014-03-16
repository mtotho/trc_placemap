function Survey(place){
	this.markers=place.markers;
	this.markers = window.Helper.shuffle(this.markers);
	this.pointer=0;

	this.participant_id=window.Helper.readCookie("participant_id");
	if(window.Helper.isNull(this.participant_id)){
		
		//create test cookie with participant_id 1
		this.participant_id=1;
		window.Helper.createCookie(this.participant_id, 1, 10);
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