const API_KEY = 'f252d29d7644eb494bebe97af390abb6';
const BASE_URL = 'https://openwhyd.org/lookatjla/playlist/0?'

function handleGetData() {
    $.ajax(BASE_URL + 'format=json' + API_KEY)
        .then(function (data) {
            console.log('Data: ', data);
        }, function (error) {
            console.log('Error: ', error);
        })
}