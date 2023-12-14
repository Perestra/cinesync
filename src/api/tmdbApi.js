import axios from "axios";

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '875eb7acef457f17217538c2f06f2cec',
    language: 'pt-BR,null',
    include_image_language: 'pt,null'
  }
});

  export default tmdb