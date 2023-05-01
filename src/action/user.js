import axios from "axios";
import { HOST } from "../API";

export const registration = async (login,password) => {
    try{
    const response = await axios.post({HOST} + '/account/login',{
        inp:login,
        password
    })
    alert(response.data.massege)
}catch(e){
    alert(e)
}};