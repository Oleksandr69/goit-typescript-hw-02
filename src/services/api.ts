import axios from 'axios';
// interface MyFetch {
//   value: string;
//   page: number;
//   perPage: number;
// }
const data = {
  access: 'd27JQlwSrVgo4sMBiErFp0HjHT7q7um4IZue84OcpdA',
};
axios.defaults.baseURL = 'https://api.unsplash.com/';

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  likes: string;
  user: {
    name: string;
  }
};
interface MyData {
  data: {
    total: number;
    total_pages: number;
    results: Image;
  }
}

const fetchData = async<MyData> (value: string, page: number, perPage: number):Promise<MyData> => {
  try {
    const response: MyData = await axios.get('/search/photos/', {
      params: {
        query: value,
        page,
        per_page: perPage,
        client_id: data.access,
      },
      
    });
   console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchData;
