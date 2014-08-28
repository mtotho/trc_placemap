<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class place_model extends CI_Model {

	public function postPlace($place, $planner_id){
		$sql = "insert into place set
					name = ?,
					lat  = ?,
					lng  = ?,
					zoom = ?,
					planner_id=?";
		$this->db->query($sql, array($place['name'], $place['lat'], $place['lng'], $place['zoom'], $planner_id));

		$id = $this->db->insert_id();
		$place['id']=$id;

		return $place;
	}

	public function getPlace($place_id){
		$sql = "select 
					id as place_id,
					name as place_name,
					lat,
					lng,
					zoom
				from place
					where id=?";

		$raw = $this->db->query($sql, array($place_id));
		return $raw->result_array();
	}

	public function getPlaces($planner_id){
		$sql = "select 
					id as place_id,
					name as place_name,
					lat,
					lng,
					zoom
				from place
					where planner_id=?";
		$raw = $this->db->query($sql, array($planner_id));
		return $raw->result_array();
	}
}

/* End of file place_model.php */
/* Location: ./application/models/place_model.php */