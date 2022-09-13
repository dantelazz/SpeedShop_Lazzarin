import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const items = {
	id: 1,
	image:
		"https://es.digitaltrends.com/wp-content/uploads/2017/12/nissan-350z-fast-furious-01.jpg?fit=720%2C720&p=1",
	title: "Nissan 350Z",
	price : "$1",
	info:"El 350Z llegó haciendo homenaje al fundador de la familia, bajo el cofre llevaba un motor V6 aspirado de 3.5 litros y 24 válvulas que entregaba 287 hp y 274 lb-pie de torque. Para algunos era un retroceso después de tener modelos biturbo como el 300ZX, sin embargo, este ofrecía un equilibrio casi perfecto entre costo y desempeño. El motor del 350Z era el VQ35DE, un motor que no era único para este modelo, de hecho lo compartía con el Altima, Maxima, Quest (minivan) y el Infiniti G35; aunque claro, con varias modificaciones para darle una sensación más deportiva. A dicho motor se acoplaba una transmisión manual de seis cambios o una automática de cinco que llevaba el poder al eje trasero para impulsar sus 1,462 kg."
};

const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(items);
			}, 3000);
		});
		getData.then((res) => setData(res));
	}, []);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;