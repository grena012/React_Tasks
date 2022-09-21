import axios from "axios";

export const data= axios.create({
    baseURL:"https://www.googleapis.com/youyube/v3",
    params:{
        part: 'snippet',
        maxResults:5,
        key: 'AIzaSyDM0Y0eCXoXrcQdlVEJNqCsLmlxLFtLguY'
    }
});