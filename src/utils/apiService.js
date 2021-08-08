import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
    key: '21828776-3a3234db6b008ce4834511463',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

const fetchImg = async ({ query = '', currentPage = 1 }) => {
    const { data } = await axios.get('', {
        params: { q: query, page: currentPage },
    });
    return data.hits;
};

export default fetchImg;
