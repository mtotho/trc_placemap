<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once("mapper.php");

class place_mapper extends mapper{

	//format list of all places from that planner
	public function mapDBArray($planner_id, $place_id=null){
		$CI=& get_instance();
		$CI->load->library('mappers/marker_mapper');
		$map_results = array();

		if($place_id==null){
			$places = $CI->place_model->getPlaces($planner_id);
		}else{
			$places = $CI->place_model->getPlace($place_id);

			for($i=0; $i<sizeof($places); $i++){
				$markers = $CI->marker_mapper->mapDBArray($place_id);
				$places[$i]['markers']=$markers['markers'];
			}
		}

		$map_results['places'] = $places;
		return $map_results;
	}


	public function mapPostArray($place_post, $planner_id){
		$CI=& get_instance();
		$map_results=array();

		$validate=$this->validate($place_post, array('name', 'lat', 'lng', 'zoom'));

		if($validate['valid']==1){
			//Required vars present, post to db
			$posted_place = $CI->place_model->postPlace($place_post, $planner_id);
			$map_results['success']=1;
			$map_results['data'] = $posted_place;

		}else{
			$map_results['success']=0;
			$map_results['error'] = $validate['message'];
			error_log("[POST]place: " + $validate['message']);
		}
		
		return $map_results;

	}
}