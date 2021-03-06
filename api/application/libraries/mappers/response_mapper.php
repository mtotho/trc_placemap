<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once("mapper.php");

class response_mapper extends mapper{

	//format list of all places from that planner
	public function mapDBArray($place_id){
		$CI=& get_instance();
	
		$map_results = array();

		//error_log("place_id: " + $place_id);

		$responses = $CI->response_model->getResponsesByPlace($place_id);

		$map_results['success']=1;
		$map_results['data']=$responses;


		return $map_results;
	}


	public function mapPostArray($response_post, $planner_id){
		$CI=& get_instance();
		$map_results=array();



		$validate=$this->validate($response_post, array('participant_id', 'audit_type_id', 'marker_id', 
			'responses', 'zoom_changed'));

		if($validate['valid']==1){
			error_log("valid");

			$CI->response_model->postResponse($response_post);
			$map_results['success']=1;
			$map_results['data']=$response_post;

		}else{
			//error_log("there was an error");
			$map_results['success']=0;
			$map_results['error'] = $validate['message'];
			error_log("[POST]response: " + $validate['message']);
		}
		
		return $map_results;

	}
}