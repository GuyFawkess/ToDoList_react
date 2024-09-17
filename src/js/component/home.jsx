import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]); // creamos un array para las tareas

	const contador = () => {
		if (todos.length == 0) {
			return "No hay tareas";
		} else if (todos.length == 1) {
			return "Te queda la última tarea";
		} else {
			return `Te quedan ${todos.length} tareas`;
		}
	}

	return (
		<div className="container mt-5">
			<h1 className="text-center">My To Do's</h1>
			<ul className="m-auto">
				<li>
					<input
						type="text"
						placeholder="Add To Do"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter" && inputValue !== '') { // chequeamos que el input no este vacio
								setTodos(todos.concat(inputValue));
								setInputValue('');
							}
						}}
					/>
				</li>
				{todos.map((t, index) => (
					<li key={index}>
						{t}
						<i
							className="fas fa-times text-danger todo-icon"
							onClick={() =>
								setTodos(todos.filter((t, currentIndex) => index !== currentIndex))
							}

						></i>
					</li>
				))}
				<div>{contador()}</div>
			</ul>
		</div>
	);
};

export default Home;


