<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("application/libraries/REST_Controller.php");

class Marker extends REST_Controller {


	public function index_get(){
		$planner_id=1;

		$this->load->library('mappers/marker_mapper');

		$place_id=$this->get('place_id');

		$map_results = $this->marker_mapper->mapDBArray($place_id);
		$this->response($map_results);
	}

	public function index_post(){
		$planner_id=1;

		$this->load->library('mappers/marker_mapper');
		$marker = $this->post('marker');

		$map_results = $this->marker_mapper->mapPostArray($marker, $planner_id);

		if($map_results['success']==1){
			$this->response($map_results['data']);
		}else{
			$this->response($map_results['error']);
		}

		
	}
}

