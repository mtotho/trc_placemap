<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Participant_model extends CI_Model {

	public function new_participant($ip="00.00.00.00"){
		$sql = "insert into participant set 
					ip=?";
		$this->db->query($sql, array($ip));

		return $this->db->insert_id();
	}
}

/* End of file participant_model.php */
/* Location: ./application/models/participant_model.php */