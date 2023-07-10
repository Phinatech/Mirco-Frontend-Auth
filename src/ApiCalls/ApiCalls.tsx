import axios from "axios"
import { IUser } from "../Types/Types"

const url = "http://localhost:7789";

export const createUser = async(data: IUser)=>{
    return await axios
    .post(`${url}/api/v1/auth/register`, data)
    .then((res) => {
      return res.data;
    });
}