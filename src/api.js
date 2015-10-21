import axios from 'axios';

/* Will host all the data and a RESTful output if someone wants ot just access the database */
export default {
    getCharacters: function(){
        return axios.get('/api/characterList').then((response) =>{
            return response.data;
        });
    }
}
