import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = localStorage.getItem("crypto_app_user") || null;
	console.log(
		"🚀 ~ file: ProtectedRoute.js ~ line 7 ~ ProtectedRoute ~ rest",
		rest
	);
	console.log(
		"🚀 ~ file: ProtectedRoute.js ~ line 8 ~ ProtectedRoute ~ Component",
		Component
	);

	return (
		<Route
			// trae todos los props que hay y se pueden mandar en ProtectedRoute y se los pasa al hijo
			{...rest}
			// me permite pasar un componente en una función en vez de crearlo por separado evitado crear el componente cada vez de que se actualice
			render={(props) => {
				if (isAuthenticated) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export default function ProtectedRoute({ component: Component, ...rest }) {
//   const isAuthenticated = localStorage.getItem("crypto_app_user") || null;
//   console.log(
//     "🚀 ~ file: ProtectedRoute.js ~ line 7 ~ ProtectedRoute ~ rest",
//     rest
//   );
//   console.log(
//     "🚀 ~ file: ProtectedRoute.js ~ line 8 ~ ProtectedRoute ~ Component",
//     Component
//   );
//   return (
//     <Route
//       // trae todos los props que hay y se pueden mandar en ProtectedRoute y se los pasa al hijo
//       {...rest}
//       // me permite pasar un componente en una función en vez de crearlo por separado evitado crear el componente cada vez de que se actualice
//       render={(props) => {
//         console.log(props)
//         if (isAuthenticated) {
//           return <Component {...props} />;
//         } else {
//           return <Redirect to="/login" />;
//         }
//       }}
//     />
//   );
// }
