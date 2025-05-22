import axios from 'axios';

const data = {
  access: 'd27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA',
};
axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchData = async (value, page, perPage) => {
  try {
    const response = await axios.get('/search/photos/', {
      params: {
        query: value,
        page,
        per_page: perPage,
        client_id: data.access,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchData;
