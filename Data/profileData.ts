

interface CartItem {
    name: string;
    quantity: number;
    price:number
}

interface ProfileData {
    userName: string;
    passWord: string;
    gmail: string;
    cart: CartItem[];
    identified:boolean
}

export const profileData: ProfileData = {
    userName: '',
    passWord: '',
    gmail: '',
    cart: [],
    identified:true
}

export const checkUserName = (): boolean => {
    return profileData.userName !== ''
}

export const checkPassWord = (): boolean => {
    return profileData.passWord !== ''
}

export const setUserName = (userName: string): void => {
    if (typeof userName !== 'string' || userName.trim() === '') {
        throw new Error('Invalid userName')
    }
    profileData.userName = userName
}

export const setPassWord = (passWord: string): void => {
    if (typeof passWord !== 'string' || passWord.trim() === '') {
        throw new Error('Invalid passWord')
    }
    profileData.passWord = passWord
}

export const setGmail = (gmail: string): void => {
    if (typeof gmail !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail)) {
        throw new Error('Invalid gmail')
    }
    profileData.gmail = gmail
}

export const Validate = (email: string, password: string, confirmPassword: string, userName: string): void => {
    try {
        setGmail(email);
        if (password === confirmPassword) {
            setPassWord(password);
        } else {
            throw new Error('Passwords do not match');
        }
        setUserName(userName);
        profileData.identified = true;
    } catch (error: any) {
        profileData.identified = false;
        console.error(error.message);
    }
};

export const add2Cart = (meal: string, quantity: number, price:number): void => {
    if (typeof meal !== 'string' || meal.trim() === '' || typeof quantity !== 'number' || quantity <= 0) {
        throw new Error('Invalid meal or quantity')
    }
     // Busca el producto en el carrito usando el nombre de la comida
     const productIndex = profileData.cart.findIndex(product => product.name === meal);

     if (productIndex !== -1) {
         // Si el producto ya existe en el carrito, actualiza la cantidad
         profileData.cart[productIndex].quantity += quantity;
     } else {
         // Si el producto no existe en el carrito, agrégalo
         profileData.cart.push({ name: meal, quantity: quantity, price:price });
     }
}

export const updateQuantity = (mealName: string, sum: boolean): void => {
    const mealIndex = profileData.cart.findIndex(meal => meal.name === mealName)
    
    if (mealIndex !== -1) {
        if (sum) {
            profileData.cart[mealIndex].quantity++
        } else if (profileData.cart[mealIndex].quantity > 0) {
            profileData.cart[mealIndex].quantity--
        }
        if (profileData.cart[mealIndex].quantity === 0) {
            removeFromCart(mealName)
        }
    } else {
        throw new Error('Meal not found in cart')
    }
}

export const removeFromCart = (mealName: string): void => {
    profileData.cart = profileData.cart.filter(cartItem => cartItem.name !== mealName)
}

export const totalPrice = (): number => {
    return profileData.cart.reduce((total, product) => total + product.price, 0);
}