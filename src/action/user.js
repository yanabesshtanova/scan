import axios from "axios";
import { HOST } from "../API";


export const registration = async (login, password) => {
  console.log('Received login:', login);
  console.log('Received password:', password);
  try {
    console.log("Before request");
        
    const response = await axios.post(`${HOST}/account/login`, {
      login,
      password
    });
    
    console.log("Response status:", response.data);

    if (response.data) {
     
    } else {
      console.log("Response data is empty");
    }
  } catch(error) {
    console.log(error)
  }
};