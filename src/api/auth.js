import axios from 'axios';

export const loginUser = (userData) => {
    let data = JSON.stringify(userData)
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
   
    
    return axios.post('/auth',data, config)
}
