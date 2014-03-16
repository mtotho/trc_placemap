<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once("mapper.php");

class audit_mapper extends mapper{

	//format list of all places from that planner
	public function mapDBArray($planner_id, $audit_type_id=null){
		$CI=& get_instance();
	
		$map_results = array();

		if($audit_type_id!=null){
			$audit = $CI->audit_model->getAuditType($audit_type_id);
			$audit['questions'] = $CI->audit_model->getAuditQuestions($audit_type_id);
			$audits[0]=$audit;
		}else{
			$audits = $CI->audit_model->getAudits($planner_id);
		}

		$map_results['audits'] = $audits;
		return $map_results;
	}


	public function mapPostArray($place_post, $planner_id){
		$CI=& get_instance();
		$map_results=array();

		$validate=$this->validate($place_post, array('name', 'lat', 'lng', 'zoom'));

		
		return $map_results;

	}
}