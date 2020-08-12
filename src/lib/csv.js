import axios from 'axios'

const BASE_URL = 'https://script.google.com/macros/s/AKfycbxl_iWjgcunOEu0tLvKlnLC4MM9CpcsmNu_L_O1yHWp1x2XHnWN/exec'

function loadCSV(param, convert, skip=2){
    return axios.get(BASE_URL, { params: {key: param}}).then(res => {
        return res.data.split('\n').slice(skip).map(e => {
            return convert(e.split(','))
        });
    });
}

export { loadCSV }
