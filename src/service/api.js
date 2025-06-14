import axios from "axios";


const API_URL = 'http://localhost:3002/users';
// const API_URL = 'http://localhost:8000';


// export const addUser = async (user) =>{
//     return await axios.post(`${ API_URL}/user`,user);

// }

export const addUser = async (data) => {
    try {
        // Fetch existing users
        const { data: users } = await axios.get(API_URL);

        // Find the next sequential ID
        const nextId = users.length > 0 
            ? Math.max(...users.map(user => parseInt(user.id, 10))) + 1
            : 1;

        // Assign the computed ID to the new user
        data.id = nextId.toString();

        // Post the new user with the assigned ID
        return await axios.post(API_URL, data);
    } catch (error) {
        console.log("Error occurred while calling addUser API:", error.message);
    }
};


export const getUsers = async() => {
    try{
        return await axios.get(API_URL);
    }
    catch(error){
        console.log('Error occured while calling getUsers API' , error.message);
    }
}


// export const getUsers = async () => {
//     try {
//         const response = await axios.get('http://localhost:3002/users');
//         return response; // Should include a .data field
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         throw error; // Proper error handling
//     }
// };

export const getUser = async(data) => {
    try{
        return await axios.get(`${API_URL}/${data}`);
    }
    catch(error){
        console.log('Error occured while calling getUser API' , error.message);
    }
}
export const editUser = async(data,id) => {
    try{
        return await axios.put(`${API_URL}/${id}`,data);
    }
    catch(error){
        console.log('Error occured while calling editUser API' , error.message);
    }
}
export const deleteUser = async(id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }
    catch(error){
        console.log('Error occured while calling deleteUser API' , error.message);
    }
};

