//importación de React y Hooks
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importación de helpers
import ProtectedRoute from "./helpers/protectedRoutes";
//importacion de componentes
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login} />
				<ProtectedRoute exact path="/" component={Home} />
				<Route to="*" component={() => "404 Not Found"} />
			</Switch>
		</Router>
	);
}

export default App;
