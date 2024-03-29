import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import "./index.css"

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user ? (<Route path="/" exact element={<Main />} />) : (<Route path="/"
			element={<Navigate replace to="/login" />} />)}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			
		</Routes>
	);
}

export default App;
