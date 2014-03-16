<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("application/libraries/REST_Controller.php");

class Audit extends REST_Controller {


	public function index_get(){
		$planner_id=1;

		$this->load->library('mappers/audit_mapper');

		$audit_type_id = $this->get('audit_type_id');
		$map_results = $this->audit_mapper->mapDBArray($planner_id, $audit_type_id);
		$this->response($map_results);
	}

	public function index_post(){
		$planner_id=1;
	}
}

