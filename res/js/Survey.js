function Survey(markers){
	this.markers=markers;
	this.pointer=0;
}

Survey.prototype.start = function(){
	window.map.load_audit_point(this.markers[this.pointer]);
}