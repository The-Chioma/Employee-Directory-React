import axios from "axios";

// const url = "https://randomuser.me/api/?results=50";

// const getEmployeeData = () => {
//     return axios.get(url).then((res) => {
//         // setPeople(res.data.results);
//         console.log("i am the result",res.data.results);
//       })
//       .catch((error) => console.log(error));;
// }

// export default getEmployeeData;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: function() {
      return axios.get("https://randomuser.me/api/?results=50");
    }
  };
  