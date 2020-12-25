import axios from 'axios'

function loadCSV(url, convert, skip=2){
    return axios.get(url).then(res => {
        return res.data.split('\n').slice(skip).map(e => {
            return convert(e.split(','))
        });
    });
}

export { loadCSV }
