<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Participant_model extends CI_Model {

	public function new_participant($ip="00.00.00.00"){
		$sql = "insert into participant set 
					ip=?";
		$this->db->query($sql, array($ip));

		return $this->db->insert_id();
	}

	//return all the markers this user has responded on
	public function get_responded($participant_id, $place_id){

		$sql = "select 
					ar.marker_id
				from audit_response ar
					inner join marker m on m.id=ar.marker_id
				where ar.participant_id=? and m.place_id=?";
		$raw = $this->db->query($sql, array($participant_id, $place_id));

		$results = array();
		$ugly = $raw->result_array();
		foreach($ugly as $u){
			array_push($results, $u['marker_id']);
		}
		return $results;
	}
}

/* End of file participant_model.php */
/* Location: ./application/models/participant_model.php */