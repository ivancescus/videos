import axios from 'axios'

const KEY = 'AIzaSyBH0cYz4nLmeq8vGCNHXaU9dNCiHtFlkto';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});