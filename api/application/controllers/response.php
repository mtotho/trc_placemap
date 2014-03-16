<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("application/libraries/REST_Controller.php");

class Response extends REST_Controller {


	public function index_get(){
		$planner_id=1;

	}

	public function index_post(){
		$planner_id=1;

		$this->load->library('mappers/response_mapper');
		$response = $this->post('response');

		//error_log(print_r($response,true));
		$map_results = $this->response_mapper->mapPostArray($response, $planner_id);

		if($map_results['success']==1){
			$this->response($map_results['data']);
		}else{
			$this->response($map_results['error']);
		}

		
	}
}

