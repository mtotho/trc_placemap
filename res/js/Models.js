function Place(){

	this.place_id=-1;
	this.place_name="";
	this.lat=0;
	this.lng=0;
	this.zoom=-1;
	this.markers=new Array();
}

function Marker(){
	this.place_id=-1;
	this.marker_id=-1;
	this.lat=0;
	this.lng=0;
}