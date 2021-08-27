//importación de React y Hooks
import React, { useEffect, useState } from "react";

//importacion de helpers
import { getCoins, searchCoins } from "../helpers/coinsFetch";

//importacion de componentes
import CoinNavbar from "./CoinNavbar";
import CoinSearch from "./CoinSearch";
import CoinTable from "./CoinTable";

function Home() {
	//Estado de criptomonedas
	const [coins, setCoins] = useState({
		data: [],
		update: true,
		loading: true,
	});

	//Estado de formulario Busqueda
	const [inputValue, setInputValue] = useState("");

	//Traer datos generales cuando se actualice
	useEffect(() => {
		getCoins().then((resp) => {
			setCoins({
				data: resp,
				update: false,
				loading: false,
			});
			setInputValue("");
		});
	}, [coins.update]);

	//traer datos de busqueda segun el input
	useEffect(() => {
		searchCoins(inputValue).then((resp) => {
			setCoins({
				data: resp,
				update: false,
				loading: false,
			});
		});
	}, [inputValue]);

	//Change del input
	// const handleChange = ({ target }) => {
	// 	setInputValue(target.value);
	// };

	return (
		<div>
			<CoinNavbar coins={coins} setCoins={setCoins} />
			<div className="container mt-3">
				<CoinSearch inputValue={inputValue} setInputValue={setInputValue} />
				<div className="row">
					<div className="col ">
						{coins.loading ? (
							<h3 className="text-white ">Cargando...</h3>
						) : (
							<CoinTable coins={coins} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
