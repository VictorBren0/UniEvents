import axios from 'axios';


const api = axios.create({
  baseURL: `http://192.168.100.8:3000/`,
});

export const getMaps = async () => {
  return api.get(
    `/maps`,
  ).catch(err => {
    console.log(err);
  });
};

  export const getCategorys = async () => {
    return api.get(
      `/categorys`,
    ).catch(err => {
      console.log(err);
    });
};



export default api;