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
    Description: string;
    IngridientsList: string[];
}

interface Restaurant {
    Name: string;
    Img: any;
    Type: string;
    Address: string;
    Longitud: number;
    Latitud: number;
    Rating: string;
    Meals: Meal[];
    Info: {
        Number: string;
        SocialMedia: string;
    };
}

// Exportar los datos falsos
export const fakeData: Restaurant[] = [
    {
        Name: 'Restaurante El Sabor de Colima',
        Img: require('../assets/Images/RestaurantImg/Restaurante El Sabor de Colima.jpg'),
        Type: 'Mexicana',
        Address: 'Av. Constitución 123, Colima',
        Longitud: -103.7267,
        Latitud: 19.2433,
        Rating: '4.5',
        Meals: [
            {
                Name: 'Tacos de Birria',
                Img: require('../assets/Images/MealsImg/Tacos de Birria.jpeg'),
                RestaurantName: 'Restaurante El Sabor de Colima',
                RestaurantType: 'Mexicana',
                ExpirationDate: '2024-07-25',
                ProductionDate: '2024-07-22',
                Rating: '4.7',
                Quantity: '10',
                Description: 'Tacos rellenos de carne de res cocida en un caldo de chiles y especias.',
                IngridientsList: [
                    'Carne de res',
                    'Tortillas de maíz',
                    'Chiles guajillo',
                    'Especias',
                ],
            },
            {
                Name: 'Enchiladas Verdes',
                Img: require('../assets/Images/MealsImg/Enchiladas Verdes.jpeg'),
                RestaurantName: 'Restaurante El Sabor de Colima',
                RestaurantType: 'Mexicana',
                ExpirationDate: '2024-07-26',
                ProductionDate: '2024-07-23',
                Rating: '4.6',
                Quantity: '8',
                Description: 'Tortillas rellenas de pollo y bañadas en salsa verde.',
                IngridientsList: [
                    'Tortillas de maíz',
                    'Pollo',
                    'Salsa verde',
                    'Queso',
                ],
            },
        ],
        Info: {
            Number: '3121234567',
            SocialMedia: '@elsabordecolima',
        },
    },
    {
        Name: 'Comida Casera La Abuela',
        Img: require('../assets/Images/RestaurantImg/Comida Casera La Abuela.jpeg'),
        Type: 'Casera',
        Address: 'Calle Hidalgo 456, Villa de Álvarez',
        Longitud: -103.7367,
        Latitud: 19.2633,
        Rating: '4.8',
        Meals: [
            {
                Name: 'Sopa de Fideo',
                Img: require('../assets/Images/MealsImg/Sopa de Fideo.jpeg'),
                RestaurantName: 'Comida Casera La Abuela',
                RestaurantType: 'Casera',
                ExpirationDate: '2024-07-24',
                ProductionDate: '2024-07-22',
                Rating: '4.9',
                Quantity: '15',
                Description: 'Sopa tradicional de fideos en caldo de tomate.',
                IngridientsList: [
                    'Fideos',
                    'Tomate',
                    'Caldo de pollo',
                    'Especias',
                ],
            },
            {
                Name: 'Arroz con Pollo',
                Img: require('../assets/Images/MealsImg/Arroz con Pollo.jpeg'),
                RestaurantName: 'Comida Casera La Abuela',
                RestaurantType: 'Casera',
                ExpirationDate: '2024-07-25',
                ProductionDate: '2024-07-23',
                Rating: '4.8',
                Quantity: '12',
                Description: 'Arroz cocido con piezas de pollo y verduras.',
                IngridientsList: [
                    'Arroz',
                    'Pollo',
                    'Zanahorias',
                    'Guisantes',
                ],
            },
        ],
        Info: {
            Number: '3122345678',
            SocialMedia: '@comidacasera_laabuela',
        },
    },
    {
        Name: 'Pizzeria Colima',
        Img: require('../assets/Images/RestaurantImg/Pizzeria Colima.jpeg'),
        Type: 'Italiana',
        Address: 'Blvd. Camino Real 789, Colima',
        Longitud: -103.7467,
        Latitud: 19.2733,
        Rating: '4.4',
        Meals: [
            {
                Name: 'Pizza Margherita',
                Img: require('../assets/Images/MealsImg/Pizza Margherita.jpeg'),
                RestaurantName: 'Pizzeria Colima',
                RestaurantType: 'Italiana',
                ExpirationDate: '2024-07-25',
                ProductionDate: '2024-07-22',
                Rating: '4.6',
                Quantity: '5',
                Description: 'Pizza clásica con salsa de tomate, mozzarella y albahaca.',
                IngridientsList: [
                    'Masa de pizza',
                    'Salsa de tomate',
                    'Mozzarella',
                    'Albahaca',
                ],
            },
            {
                Name: 'Lasagna',
                Img: require('../assets/Images/MealsImg/Lasagna.jpeg'),
                RestaurantName: 'Pizzeria Colima',
                RestaurantType: 'Italiana',
                ExpirationDate: '2024-07-26',
                ProductionDate: '2024-07-23',
                Rating: '4.7',
                Quantity: '7',
                Description: 'Capas de pasta con carne, salsa de tomate y queso.',
                IngridientsList: [
                    'Pasta',
                    'Carne molida',
                    'Salsa de tomate',
                    'Queso',
                ],
            },
        ],
        Info: {
            Number: '3123456789',
            SocialMedia: '@pizzeriacolima',
        },
    },
    {
        Name: 'Barbacoa El Jarocho',
        Img: require('../assets/Images/RestaurantImg/Barbacoa El Jarocho.jpg'),
        Type: 'Mexicana',
        Address: 'Calle Zapata 321, Colima',
        Longitud: -103.8167,
        Latitud: 19.3433,
        Rating: '4.6',
        Meals: [
            {
                Name: 'Barbacoa de Res',
                Img: require('../assets/Images/MealsImg/Barbacoa de Res.jpeg'),
                RestaurantName: 'Barbacoa El Jarocho',
                RestaurantType: 'Mexicana',
                ExpirationDate: '2024-07-27',
                ProductionDate: '2024-07-23',
                Rating: '4.7',
                Quantity: '20',
                Description: 'Carne de res cocida lentamente con especias.',
                IngridientsList: [
                    'Carne de res',
                    'Especias',
                    'Tortillas',
                    'Cebolla',
                    'Cilantro',
                ],
            },
            {
                Name: 'Consomé de Barbacoa',
                Img: require('../assets/Images/MealsImg/Consome de Barbacoa.jpeg'),
                RestaurantName: 'Barbacoa El Jarocho',
                RestaurantType: 'Mexicana',
                ExpirationDate: '2024-07-28',
                ProductionDate: '2024-07-24',
                Rating: '4.6',
                Quantity: '25',
                Description: 'Caldo hecho con el jugo de la barbacoa.',
                IngridientsList: [
                    'Caldo de carne',
                    'Especias',
                    'Cebolla',
                    'Cilantro',
                ],
            },
        ],
        Info: {
            Number: '3124567890',
            SocialMedia: '@sushiexpress_colima',
        },
    },
    {
        Name: 'Café y Panadería La Esperanza',
        Img: require('../assets/Images/RestaurantImg/Café y Panadería La Esperanza.jpg'),
        Type: 'Café y Panadería',
        Address: 'Calle Madero 987, Colima',
        Longitud: -103.7667,
        Latitud: 19.2933,
        Rating: '4.9',
        Meals: [
            {
                Name: 'Pan de Elote',
                Img: require('../assets/Images/MealsImg/Pan de Elote.jpeg'),
                RestaurantName: 'Café y Panadería La Esperanza',
                RestaurantType: 'Café y Panadería',
                ExpirationDate: '2024-07-24',
                ProductionDate: '2024-07-22',
                Rating: '4.9',
                Quantity: '8',
                Description: 'Pan dulce hecho a base de elote fresco.',
                IngridientsList: [
                    'Elote',
                    'Harina',
                    'Azúcar',
                    'Huevos',
                ],
            },
            {
                Name: 'Café Americano',
                Img: require('../assets/Images/MealsImg/Cafe Americano.jpeg'),
                RestaurantName: 'Café y Panadería La Esperanza',
                RestaurantType: 'Café y Panadería',
                ExpirationDate: '2024-07-25',
                ProductionDate: '2024-07-23',
                Rating: '4.8',
                Quantity: '15',
                Description: 'Café negro preparado con granos seleccionados.',
                IngridientsList: [
                    'Café',
                    'Agua',
                ],
            },
        ],
        Info: {
            Number: '3125678901',
            SocialMedia: '@cafeypanaderia_laesperanza',
        },
    },
    {
        Name: 'El Taco Loco',
        Img: require('../assets/Images/RestaurantImg/El Taco Loco.jpg'),
        Type: 'Tacos',
        Address: 'Av. Niños Héroes 654, Colima',
        Longitud: -103.7767,
        Latitud: 19.3033,
        Rating: '4.6',
        Meals: [
            {
                Name: 'Tacos al Pastor',
                Img: require('../assets/Images/MealsImg/Tacos al Pastor.jpg'),
                RestaurantName: 'El Taco Loco',
                RestaurantType: 'Tacos',
                ExpirationDate: '2024-07-25',
                ProductionDate: '2024-07-22',
                Rating: '4.7',
                Quantity: '25',
                Description: 'Tacos de cerdo adobado cocido en trompo.',
                IngridientsList: [
                    'Cerdo',
                    'Tortillas de maíz',
                    'Piña',
                    'Cilantro',
                    'Cebolla',
                ],
            },
            {
                Name: 'Tacos de Carnitas',
                Img: require('../assets/Images/MealsImg/Tacos de Carnitas.jpeg'),
                RestaurantName: 'El Taco Loco',
                RestaurantType: 'Tacos',
                ExpirationDate: '2024-07-26',
                ProductionDate: '2024-07-23',
                Rating: '4.8',
                Quantity: '20',
                Description: 'Tacos de carne de cerdo frita.',
                IngridientsList: [
                    'Cerdo',
                    'Tortillas de maíz',
                    'Cilantro',
                    'Cebolla',
                ],
            },
        ],
        Info: {
            Number: '3126789012',
            SocialMedia: '@taqueria_losamigos',
        },
    }
];
