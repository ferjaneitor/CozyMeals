interface CartItem {
    name: string;
    quantity: number;
}

interface ProfileData {
    userName: string;
    passWord: string;
    gmail: string;
    cart: CartItem[];
}

export const profileData: ProfileData = {
    userName: '',
    passWord: '',
    gmail: '',
    cart: []
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

export const add2Cart = (meal: string, quantity: number): void => {
    if (typeof meal !== 'string' || meal.trim() === '' || typeof quantity !== 'number' || quantity <= 0) {
        throw new Error('Invalid meal or quantity')
    }
    profileData.cart.push({ name: meal, quantity: quantity })
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
