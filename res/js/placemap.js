/*  placemap.js
/*	main point of execution
/*	Michael Toth
*/

$(document).ready(function(){

	//set up vars
	window.debug=true;

	//Setup objects
	window.Helper = new Helper();
	window.API = new ApiConnector();
	window.map = new gmap();
	window.UI = new UI();

	//Set up user token
	check_user_cookie();

	//Load welcome splash
	window.UI.show_welcome();

	//test api call
	window.API.getPlaces(log_places);

	autosize();
});

function check_user_cookie(){
	
	//check for user cookie
		//if set, check expiration
			//if not expired, set the user object
			window.USER={
				"userId":1,
				"userToken":"planner",
				"userName": "planner_dev"
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
	headerheight=$("header").outerHeight();
	windowheight=$(window).outerHeight();
	$("#map_canvas").height(windowheight-headerheight);
}