if ( ! $this->_route instanceof Route)
 		{
			return HTTP_Exception::factory(404, 'Unable to find a route to match the URI: :uri', array(
				':uri' => $this->_uri,
 			))->request($this)
 				->get_response();
 		}

 		if ( ! $this->_client instanceof Request_Client)
 		{
