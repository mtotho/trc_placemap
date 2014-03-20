<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once("mapper.php");

class marker_mapper extends mapper{

	//format list of all places from that planner
	public function mapDBArray($place_id){
		$CI=& get_instance();
		$map_results = array();

		$markers = $CI->marker_model->getMarkers($place_id);

		$map_results['markers'] = $markers;
		return $map_results;
	}


	public function mapPostArray($marker_post, $planner_id){
		$CI=& get_instance();
		$map_results=array();

		$validate=$this->validate($marker_post, array('place_id', 'lat', 'lng', 'view'));

		if($validate['valid']==1){
			//Required vars present, post to db
			$CI->marker_model->postMarker($marker_post, $planner_id);
			$map_results['success']=1;
			$map_results['data'] = $marker_post;

		}else{
			$map_results['success']=0;
			$map_results['error'] = $validate['message'];
			error_log("[POST]marker: " + $validate['message']);
		}
		
		return $map_results;

	}
}