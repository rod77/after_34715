export const listadoProdutos = [
	{
		id: 1,
		category: "zapatillas",
		content: "",
		description: "ZAPATILLAS GRAND COURT. ZAPATILLAS MINIMALISTAS CON UN ESTILO CLÁSICO",
		img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9598a1cf2924169888aa9810136e6d6_9366/Zapatillas_Grand_Court_Blanco_F36485_01_standard.jpg",
		img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8daa3996318420490c6a9810136ff67_9366/Zapatillas_Grand_Court_Blanco_F36485_02_standard_hover.jpg",
		name: "mock - Zapatillas Grand Court",
		price: 12499,
		stock: 5
	},
	{
		id: 2,
		category: "zapatillas",
		content: "",
		description: "ZAPATILLAS RUNFALCON. ZAPATILLAS DE MÁXIMA SUJECIÓN PARA TUS SALIDAS DIARIAS A CORRER",
		img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
		img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ebac268f4d7e4e389006a97f00d3fbfb_9366/Zapatillas_Runfalcon_Negro_F36199_04_standard.jpg",
		name: "mock - Zapatillas RunFalcon",
		price: 11499,
		stock: 4
	},
	{
		id: 3,
		category: "remeras",
		content: "",
		description: "REMERA SPRT ESTAMPADA UNA REMERA PARA USO DIARIO INSPIRADA EN LOS ARCHIVOS DE ADIDAS",
		img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb35807a48ac4fd5b89aac7501578899_9366/Remera_SPRT_Estampada_Blanco_GN2428_21_model.jpg",
		img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b749e4aaa3b4bd597d0ac830184c8c7_9366/Remera_SPRT_Estampada_Blanco_GN2428_01_laydown.jpg",
		name: "mock - Remera sprt Estampada",
		price: 7499,
		stock: 2
	},
	{
		id: 4,
		category: "gorras",
		content: "",
		description: "REMERA ADICOLOR CLASSICS 3 TIRAS. UNA REMERA DE ALGODÓN SUAVE PARA RELAJARSE EN SERIO",
		img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff058259bf8f4615a3ddab73012befc9_9366/Gorra_Beisbol_Vintage_Goofy_(UNISEX)_Negro_GD5509_01_standard.jpg",
		img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad4336e7024347c5b0acab7400b2e905_9366/Gorra_Beisbol_Vintage_Goofy_(UNISEX)_Negro_GD5509_42_detail.jpg",
		name: "mock - Gorra Beisbol Goofy",
		price: 7499,
		stock: 2
	},
	{
		id: 5,
		category: "remeras",
		content: "",
		description: "GORRA BÉISBOL VINTAGE GOOFY (UNISEX) UNA GORRA DIVERTIDA CREADA POR LA COLABORACIÓN ENTRE ADIDAS Y DISNEY",
		img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fcae6f5e2cdc41e390b9ad58009a1f53_9366/Remera_Adicolor_Classics_3_Tiras_Granate_H06774_21_model.jpg",
		img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8fa2b0dd099a4994b083ad57010749d6_9366/Remera_Adicolor_Classics_3_Tiras_Granate_H06774_01_laydown.jpg",
		name: "mock - Remera Adicolor Classics 3 Tiras",
		price: 6999,
		stock: 7
	},
	{
		id: 6,
		category: "remeras",
		content: "",
		description: "REMERA DISNEY MICKEY Y AMIGOS. UNA REMERA ÚNICA DE ADIDAS ORIGINALS X DISNEY",
		img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2886d7608f5447c2b0e9ad030147350e_9366/Remera_Disney_Mickey_y_Amigos_Blanco_H22579_01_laydown.jpg",
		img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2124814f40054bf2a845ad0301473bfa_9366/Remera_Disney_Mickey_y_Amigos_Blanco_H22579_02_laydown_hover.jpg",
		name: "mock - Remera Disney Mickey y Amigos",
		price: 5999,
		stock: 7
	}
]

/* Promesa para obtener productos (todos o los de su categoría) */
export const getProducts = (categoryId) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(categoryId ? listadoProdutos.filter(prod => prod.category === categoryId) : listadoProdutos)
		}, 1000)
	})
}

/* Promesa para obtener el producto por el Id */
export const getProductById = (id) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(listadoProdutos.find(prod => prod.id === parseInt(id)))
		}, 1000)
	})
}