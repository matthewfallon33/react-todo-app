import React from "react";
import Todo from "./todo";

function todoList(props){

	return (

	<ul className="todoList">

	{props.todos.map((todo, index) => {
		return(
		<Todo onClick={props.remove} name={todo.name} key={index} index={index}/>
		);
	})}

	</ul>

	);

}

export default todoList;