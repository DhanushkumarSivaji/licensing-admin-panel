import axios from 'axios';

export const loginUser = (userData) => {
    console.log(userData)
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
   
    
    return axios.post('/auth', userData.payload, config)
}
