import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '538114ec843d43f9a49218b17d61c50e'
    }
})