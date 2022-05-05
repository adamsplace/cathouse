import { useNavigate } from "react-router-dom";

export default function Root() {
	const navigate = useNavigate()
	const signup = () => navigate( "/signup" )
	const login = () => navigate( "/login" )
	return (
		<div className="cool">
			<h1>cathouse</h1>
			<div style={{ display: "flex" }}>
				<button onClick={signup} style={{ margin: "10px" }}>
					Sign Up
				</button>
				<button onClick={login} style={{ margin: "10px" }}>
					Log In
				</button>
			</div>
		</div>
	);
}