import axios from 'axios';

const KEY ='AIzaSyAJb1skoO2PiWtWZYcVzT7AyVjMNHJp-1M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});