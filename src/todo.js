import React from "react";	

function todo(props){
	return (
		<div>
		<li index={props.index} onClick={props.onClick.bind(this)} >{props.name}</li>
		</div>
	);

}

export default todo;
