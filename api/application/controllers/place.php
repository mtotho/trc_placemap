<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("application/libraries/REST_Controller.php");

class Place extends REST_Controller {


	public function index_get(){
		$planner_id=1;

		$this->load->library('mappers/place_mapper');

		$place_id = $this->get('place_id');
		$map_results = $this->place_mapper->mapDBArray($planner_id, $place_id);
		$this->response($map_results);
	}

	public function index_post(){
		$planner_id=1;

		$this->load->library('mappers/place_mapper');
		$place = $this->post('place');

		$map_results = $this->place_mapper->mapPostArray($place, $planner_id);

		if($map_results['success']==1){
			$this->response($map_results['data']);
		}else{
			$this->response($map_results['error']);
		}

		
	}
}

