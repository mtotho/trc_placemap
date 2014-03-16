/*  placemap.js
/*	main point of execution
/*	Michael Toth
*/

$(document).ready(function(){

	//set up environment vars
	window.debug=true;

	//Setup objects
	window.Helper = new Helper();
	window.Mapper = new Mapper();
	window.API = new ApiConnector();
	window.map = new gmap();
	window.UI = new UI();

	//Setup application objects
	window.placesDict = null;

	//Set up user token
	check_user_cookie();

	//Load welcome splash
	window.UI.load();
	

	autosize();
});

function check_user_cookie(){
	
	//check for user cookie
		//if set, check expiration
			//if not expired, set the user object
			window.USER={
				"userId":1,
				"userToken":"planner",
				"userName": "planner_dev",
				"userType": "planner"
				//"userAccess": "planner";
			};

		//else expired, must login

	//no cookie set, must login

}

function log_places(data){
	console.log(data);
}

$(window).resize(function(){
	autosize();
});

function autosize(){
	headerheight=$("header").outerHeight(true);
	
	windowheight=$(window).outerHeight();
	windowheight-=0.025*windowheight;

	$("#map_canvas").height(windowheight-headerheight);
	$("#ui_panel").height(windowheight-headerheight);
}