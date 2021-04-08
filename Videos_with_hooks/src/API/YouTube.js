import axios from 'axios';

const KEY = 'AIzaSyA4-5BMAiyKdIy02hppshRmzDQ2SLlZsIg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
