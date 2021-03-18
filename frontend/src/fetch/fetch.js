import axios from 'axios'


const URI = 'http://localhost:5001';

export const GetRecord = async () => {
    try {
        const data = await axios.get(`${URI}/records`);
        return data
    } catch (err) {
        console.log(err);
    }
}

export const GetUser = async (data) => {
    try {
        const res = await axios.post(`${URI}/login`, data);
        return res.data
    } catch (err) {
        console.log(err);
    }
}
