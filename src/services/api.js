import axios from 'axios';


const api = axios.create({
  baseURL: `http://152.67.35.21:3000/`,
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