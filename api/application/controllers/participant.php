<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("application/libraries/REST_Controller.php");

class Participant extends REST_Controller {


	public function index_get(){
		$planner_id=1;

	}

	public function index_post(){
		$planner_id=1;


		$participant_id=$this->participant_model->new_participant();

		$response['participant_id']=$participant_id;

		$this->response($response);
		
	}
}

