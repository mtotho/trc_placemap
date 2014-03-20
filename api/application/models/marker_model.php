<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class marker_model extends CI_Model {

	public function postMarker($marker){
		$sql = "insert into marker set
					place_id = ?,
					lat  = ?,
					lng  = ?,
					view = ?";
		$this->db->query($sql, array($marker['place_id'], $marker['lat'], $marker['lng'], $marker['view']));
	}

	public function getMarkers($place_id){
		$sql = "select 
					id as marker_id,
					lat,
					lng,
					view,
					place_id
				from marker
					where place_id=?";
		$raw = $this->db->query($sql, array($place_id));
		return $raw->result_array();
	}
}

/* End of file place_model.php */
/* Location: ./application/models/place_model.php */