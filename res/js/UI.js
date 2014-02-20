function UI(){


}

UI.prototype.show_welcome=function(){

	var html='';
	html+='<div class="modal fade" id="welcome_model" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
	html+=	'<div class="modal-dialog">';
	html+=		'<div class="modal-content">';
	html+=			'<div class="modal-header">';
	html+=          	'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
	html+=              '<h4 class="modal-title" id="myModalLabel">Modal title</h4>';
	html+=          '</div>';
	html+=          '<div class="modal-body">';
	html+=          '</div>';
	html+=			'<div class="modal-footer">';
    html+=          	'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    html+=          	'<button type="button" class="btn btn-primary">Save changes</button>';
    html+=          '</div>';
    html+=		'</div>';
 	html+=	'</div>';
	html+='</div>';

	//Set the UI handle html 
	$("#ui_handle").html(html);

	//enable and show the modal
	$('#welcome_model').modal();

	//event when modal is closed/x'd
	$('#welcome_model').on('hide.bs.modal', function(e){
		

		//Delete html content
		$(this).html("");
	});

}
