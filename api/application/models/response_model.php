<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class response_model extends CI_Model {

	public function postResponse($response){

		$sql = "insert into audit_response set
					audit_type_id=?,
					participant_id=?,
					marker_id=?";
		$this->db->query($sql, 
			array($response['audit_type_id'], $response['participant_id'], $response['marker_id']));

		$audit_response_id = $this->db->insert_id();

		$responses = $response['responses'];

		foreach($responses as $r){
			$question_id=$r['question_id'];
			$res        =$r['response'];

			$sql = "insert into question_response set
						audit_response_id=?,
						audit_question_id=?,
						response         =?";

			$this->db->query($sql, array($audit_response_id, $question_id, $res));
		}

	}	

}

/* End of file response_model.php */
/* Location: ./application/models/response_model.php */