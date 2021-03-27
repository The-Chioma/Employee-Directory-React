import axios from "axios";

const url = "https://randomuser.me/api/?results=50";

const getEmployeeData = () => {
    return axios.get(url);
}

export default getEmployeeData;

