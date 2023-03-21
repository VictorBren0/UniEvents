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

export const postEvent = async (id, title, description, date, time) => {
  try {
    await api.post(`/categorys/${id}/events`, {title, description, date, time });
  } catch (error) {
    console.log(error)
  }
};

export const putEvent = async (id, idevent, title, description, date, time) => {
  try {
    await api.put(`/categorys/${id}/events/${idevent}`, {title, description, date, time });
  } catch (error) {
    console.log(error)
  }
};

export const deleteEvets = async (category, id) => {
  try {
    await api.delete(`/categorys/${category}/events`, { data: { id: Number(id) } });
  } catch (error) {
    console.log(error)
  }
};

export const postEventsMap = async (mapaid, id, posy, posx) => {
  try {
    await api.post(`/maps/${mapaid}/events/${id}`, { posy: Number(posy), posx: Number(posx) });
  } catch (error) {
    console.log(error)
  }
};

export default api;