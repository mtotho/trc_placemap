<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("application/libraries/REST_Controller.php");

class Place extends REST_Controller {


	public function index_get()
	{	
		$out["cat"]="meow";
		$out["dog"]="woof";
		$this->response($out);
	}
}

