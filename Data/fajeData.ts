// Definir los tipos
interface Meal {
    Name: string;
    Img: any;
    RestaurantName:string
    RestaurantType:string
    ExpirationDate: string;
    ProductionDate: string;
    Rating: string;
    Quantity: string;
    Price:number;
    Supplies: boolean;
    Description: string;
    IngridientsList: string[];
}

interface Restaurant {
    Name: string;
    Img: any;
    Type: string;
    Longitud: number;
    Latitud: number;
    Rating: string;
    Meals: Meal[];
}

// Exportar los datos falsos
export const fakeData: Restaurant[] = [
    {
        Name: 'Verdulería “El Huerto”',
        Img: require('../assets/Images/RestaurantImg/Verdulería “El Huerto”.jpg'),
        Type: 'Verdureria',
        Longitud: 19.242860,
        Latitud: -103.70948,
        Rating: '4.5',
        Meals: [
            {
                Name: 'Manzana',
                Img: require('../assets/Images/MealsImg/Manzana.jpg'),
                RestaurantName: 'Verdulería “El Huerto”',
                RestaurantType: 'Verduderia',
                ExpirationDate: '18 de agosto',
                ProductionDate: '',
                Rating: '4.0',
                Quantity: '18',
                Price: 20,
                Supplies:true,
                Description: 'Manzanas rojas Royal Gala, aprox. 3 kilos en total.',
                IngridientsList: [
                    'Manzana',
                ],
            },
            {
                Name: 'Lechuga',
                Img: require('../assets/Images/MealsImg/Lechuga.webp'),
                RestaurantName: 'Verdulería “El Huerto”',
                RestaurantType: 'Verdureria',
                ExpirationDate: '17 de agosto',
                ProductionDate: '',
                Rating: '3.5',
                Quantity: '15',
                Price: 15,
                Supplies:true,
                Description: 'Lechuga romana en buen estado.',
                IngridientsList: [
                    'Lechuga'
                ],
            },
            {
                Name: 'Aguacate',
                Img: require('../assets/Images/MealsImg/Aguacate.jpg'),
                RestaurantName: 'Verdulería “El Huerto”',
                RestaurantType: 'Verdureria',
                ExpirationDate: '13 de agosto',
                ProductionDate: '',
                Rating: '4.0',
                Quantity: '16',
                Price: 3,
                Supplies:true,
                Description: 'Aguacates, 1 kilo aprox en total.',
                IngridientsList: [
                    'Aguacate'
                ],
            },
        ],
    },
    {
        Name: 'BENZINA',
        Img: require('../assets/Images/RestaurantImg/Benzina.jpg'),
        Type: 'Comida Italiana',
        Longitud: 19.25390,
        Latitud: -103.69724,
        Rating: '4.5',
        Meals: [
            {
                Name: 'Lasaña de Carne',
                Img: require('../assets/Images/MealsImg/Lasagna de Carne.jpg'),
                RestaurantName: 'BENZINA',
                RestaurantType: 'Comida Italiana',
                ExpirationDate: '11 de agosto',
                ProductionDate: '9 de agosto',
                Rating: '4.5',
                Quantity: '3',
                Price: 35,
                Supplies:false,
                Description: 'Es un tipo de pasta servida en capas, la cual se intercala la pasta, la salsa de tomate junto la carne y el queso mozzarella, para así llevarla al horno y servir el platillo. Cada porción tiene 330 gramos.',
                IngridientsList: [
                    'Pasta para Lasaña',
                    'Cane molida',
                    'Cebolla',
                    'Diente de ajo',
                    'Calabacín',
                    'Zanahoria',
                    'Tomate',
                    'Albahaca',
                    'Queso Mozzarella',
                    'Sal',
                    'Pimienta',
                ],
            },
            {
                Name: 'Espagueti a la carbonara',
                Img: require('../assets/Images/MealsImg/Espagueti a la carbonara.webp'),
                RestaurantName: 'BENZINA',
                RestaurantType: 'Comida Italiana',
                ExpirationDate: '10 de agosto',
                ProductionDate: '9 de agosto',
                Rating: '5.0',
                Quantity: '2',
                Price: 27,
                Supplies:false,
                Description: 'Pasta tipo espagueti combinada con un crujiente guanciale, en una salsa de huevos frescos y cremoso Pecorino, acompañado de queso parmesano. Cada porción tiene 100 gramos.',
                IngridientsList: [
                    'Espagueti',
                    'Guanciale',
                    'Yema de huevo',
                    'Queso parmesano',
                    'Pimienta negra molida',
                ],
            },
            {
                Name: 'Tomate',
                Img: require('../assets/Images/MealsImg/Tomate.webp'),
                RestaurantName: 'BENZINA',
                RestaurantType: 'Comida Italiana',
                ExpirationDate: '18 de agosto',
                ProductionDate: '',
                Rating: '4.0',
                Quantity: '2',
                Price: 9,
                Supplies:true,
                Description: 'Jugosos tomates redondos en buen estado.',
                IngridientsList: [
                    'Tomate'
                ],
            },
        ],
    },
    {
        Name: 'Café Volcán',
        Img: require('../assets/Images/RestaurantImg/Café Volcán.jpg'),
        Type: 'Cafetería',
        Longitud: 19.25553,
        Latitud: -103.71016,
        Rating: '4.5',
        Meals: [
            {
                Name: 'Masa para crepas',
                Img: require('../assets/Images/MealsImg/Masa para crepas.jpg'),
                RestaurantName: 'Café Volcán',
                RestaurantType: 'Cafetería',
                ExpirationDate: '5 de agosto',
                ProductionDate: '2 de agosto',
                Rating: '4.0',
                Quantity: '1',
                Price: 35,
                Supplies:false,
                Description: '250 mililitros de masa de crepa resguardada en bajas temperaturas.',
                IngridientsList: [
                    'Harina',
                    'Huevos',
                    'Leche',
                    'Agua',
                    'Sal',
                    'Mantequilla',
                ],
            },
            {
                Name: 'Fresas',
                Img: require('../assets/Images/MealsImg/Fresas.webp'),
                RestaurantName: 'Café Volcán',
                RestaurantType: 'Cafetería',
                ExpirationDate: '7 de agosto',
                ProductionDate: '',
                Rating: '3.5',
                Quantity: '5',
                Price: 1,
                Supplies:true,
                Description: 'Fresas frescas',
                IngridientsList: [
                    'Fresas',
                ],
            },
            {
                Name: 'Pay de queso',
                Img: require('../assets/Images/MealsImg/Pay de queso.webp'),
                RestaurantName: 'Café Volcán',
                RestaurantType: 'Cafetería',
                ExpirationDate: '11 de agosto',
                ProductionDate: '9 de agosto',
                Rating: '4.5',
                Quantity: '3',
                Price: 27,
                Supplies:false,
                Description: 'Pasta a base de galletas Maria, junto a una mezcla hecha de queso y leches recién salidos del horno. ',
                IngridientsList: [
                    'Huevos',
                    'Mantequilla',
                    'Leche condensada',
                    'Galletas "Maria"',
                    'Leche Evaporada',
                    'Queso crema',
                ],
            },
        ],
    },
    {
        Name: 'El Golfito',
        Img: require('../assets/Images/RestaurantImg/El Golfito.jpg'),
        Type: 'Minisuper',
        Longitud: 19.23268,
        Latitud: -103.72714,
        Rating: '4.5',
        Meals: [
            {
                Name: 'Sopa Maruchan',
                Img: require('../assets/Images/MealsImg/Sopa Maruchan.jpg'),
                RestaurantName: 'El Golfito',
                RestaurantType: 'Minisuper',
                ExpirationDate: '15 de agosto',
                ProductionDate: '',
                Rating: '3.5',
                Quantity: '3',
                Price: 4,
                Supplies:true,
                Description: 'Sopa instantánea de camarón, acompañado de elote, zanahoria y fideo. Se deberá servir agua hirviendo y esperar tres minutos en el envase cerrado.',
                IngridientsList: [
                    'Camaron deshidratado',
                    'Elote',
                    'Zanahoria deshidratada',
                    'Pasta deshidratada estilo Ramen',
                    'Condimento',
                ],
            },
            {
                Name: 'Limon',
                Img: require('../assets/Images/MealsImg/Limon.png'),
                RestaurantName: 'El Golfito',
                RestaurantType: 'Minisuper',
                ExpirationDate: '13 de agosto',
                ProductionDate: '',
                Rating: '3.5',
                Quantity: '10',
                Price: 2,
                Supplies:true,
                Description: 'Limones agrios,  jugosos y frescos.',
                IngridientsList: [
                    'Fresas',
                ],
            },
        ],
    },
    {
        Name: 'Tacos El Colima',
        Img: require('../assets/Images/RestaurantImg/Tacos el Colima.jpg'),
        Type: 'Taqueria',
        Longitud: 19.25251,
        Latitud: -103.71239,
        Rating: '4.5',
        Meals: [
            {
                Name: 'Agua de Horchata',
                Img: require('../assets/Images/MealsImg/Agua de Horchata.jpg'),
                RestaurantName: 'Tacos El Colima',
                RestaurantType: 'Taqueria',
                ExpirationDate: '13 de agosto',
                ProductionDate: '12 de agosto',
                Rating: '4.0',
                Quantity: '3',
                Price: 8,
                Supplies:false,
                Description: 'Agua fresca de horchata, cada unidad es de a litro',
                IngridientsList: [
                    'Arroz blanco',
                    'Canela',
                    'Agua',
                    'Azúcar',
                    'Vainilla',
                ],
            },
            {
                Name: 'Agua de Jamaica',
                Img: require('../assets/Images/MealsImg/Agua de Jamaica.jpg'),
                RestaurantName: 'Tacos El Colima',
                RestaurantType: 'Taqueria',
                ExpirationDate: '13 de agosto',
                ProductionDate: '12 de agosto',
                Rating: '4.0',
                Quantity: '4',
                Price: 8,
                Supplies:false,
                Description: 'Agua fresca de jamaica, cada unidad es de a litro',
                IngridientsList: [
                    'Flor de Jamaica deshidratada',
                    'Azúcar',
                ],
            },
        ],
    },
];
