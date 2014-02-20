<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("application/libraries/REST_Controller.php");

class Api extends REST_Controller {


	public function index_get()
	{
		$this->response("derp");
	}
}

