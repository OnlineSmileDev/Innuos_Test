import React from 'react';
import { useNavigate } from "react-router-dom";

function Begin() {
	let navigate = useNavigate();

  function handleClick() {
		navigate("../main", { replace: true });
  }

	return (
		<button type="button" onClick={handleClick} style={{marginTop: '200px'}}>
			GET ALBUMS
		</button>
	)
}

export default Begin;