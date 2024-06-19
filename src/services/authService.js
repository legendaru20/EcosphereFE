import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (username, email, password) => {
    return axios.post(API_URL + 'register', {
        username,
        email,
        password
    });
};

const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL + 'login', { email, password });
        console.log('Login response:', response.data); // Debugging line
        
        if (response.data && response.data.token) {
            // Save token and username in localStorage
            const { token, username } = response.data;
            const userData = {
                token: token,
                username: username,
                email: email
            };
            localStorage.setItem('user', JSON.stringify(userData));
            console.log('User data saved:', userData); // Debugging line
        }
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
        const user = JSON.parse(userString);
        return user.username; // Mengembalikan username dari objek user
    }
    return null;
};


export default {
    register,
    login,
    logout,
    getCurrentUser
};
