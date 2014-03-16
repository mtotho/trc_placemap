<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Audit_model extends CI_Model {

	public function getAuditQuestions($audit_type_id){
		$sql="select 
				aq.id as question_id,
				aq.text as question_text,
				atq.order
			from audit_type_question atq 
				inner join audit_question aq on atq.audit_question_id=aq.id
			where atq.audit_type_id=?
				order by atq.order";
		$raw = $this->db->query($sql, array($audit_type_id));

		return $raw->result_array();
	}

	public function getAuditType($audit_type_id){
		$sql="select 
				id as audit_type_id,
				name as audit_name,
				planner_id
			from audit_type at
				where at.id=?";
		$raw = $this->db->query($sql, array($audit_type_id));
		$row =  $raw->result_array();
		return $row[0];
	}

	public function getAudits($planner_id){

	}

}

/* End of file audit_model.php */
/* Location: ./application/models/audit_model.php */