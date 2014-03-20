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

	public function getResponsesByPlace($place_id){
		$sql="select 
				id as place_id,
				name as place_name,
				lat,
				lng,
				zoom,
				planner_id
			  from place 
			  	where id=".$place_id;
		
		$raw = $this->db->query($sql);
		
		$place = $raw->result_array();
		$place = $place[0];

		$markers = $this->marker_model->getMarkers($place_id);

		$i=0;
		foreach($markers as $marker){
			$marker_id=$marker['marker_id'];

			$sql2="select
					qr.audit_question_id,
					qr.audit_response_id,
					qr.response,
					ar.audit_type_id,
					ar.participant_id,
					aq.text as question_text					
			   from question_response qr
			   		inner join audit_response ar on ar.id=qr.audit_response_id
			   		inner join audit_question aq on aq.id=qr.audit_question_id
			   where ar.marker_id=".$marker_id;

			$raw2 = $this->db->query($sql2);
			$markers[$i]['responses']=$raw2->result_array();


			$i++;
		}

		$place['markers']=$markers;
		//error_log(print_r($places,true));
		
		

		//$places['responses']=$raw2->result_array();

		return $place;
	}

}

/* End of file response_model.php */
/* Location: ./application/models/response_model.php */