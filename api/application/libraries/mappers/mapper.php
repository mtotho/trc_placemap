<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class mapper{

	public function validate($data, $req, $opt=null){
		$required_count = 0;
		$validate=array();

		//error_log(print_r($data,true));
		//error_log($data['audit_type_id']);
		foreach($data as $key => $val){
			//error_log("key: " + print_r($key,true));
			if(in_array($key, $req)){
				//error_log("Derp");
				$required_count++;
			}
		}

		if($required_count!=sizeof($req)){
			//error_log("false");
			$validate['valid']=0;
			$validate['message']="Missing required parameters";
		}else{
			$validate['valid']=1;
			$validate['message']="None";
		}

		return $validate;
	}	
}