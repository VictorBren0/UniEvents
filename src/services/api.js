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

export const postCategorys = async (title) => {
  try {
    await api.post(`/categorys`, { title });
  } catch (error) {
    console.log(error)
  }
};
export const putCategorys = async (id, title) => {
  try {
    await api.put(`/categorys/${id}`, { title });
  } catch (error) {
    console.log(error)
  }

};

export const deleteCategorys = async (id) => {
  try {
    await api.delete(`/categorys/${id}`);
  } catch (error) {
    console.log(error)
  }
  
};

export default api;