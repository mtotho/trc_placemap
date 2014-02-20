function UI(){


}

UI.prototype.show_welcome=function(){

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
		
		window.UI.create_study_area();
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
