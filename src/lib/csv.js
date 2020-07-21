import axios from 'axios'

function loadCSV(url, convert){
    return axios.get(url).then(res => {
        return res.data.split('\n').slice(2).map(e => {
            return convert(e.split(','))
        });
    });
}

export { loadCSV }
