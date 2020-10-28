// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             console.log(request.readyState, request.status);
//             if(request.readyState === 4 && request.status === 200) {
//                 resolve(JSON.parse(request.responseText));
//             } else if(request.readyState === 4) {
//                 reject('could not fetch the data');
//             }
//         });
//         request.open('GET', `assets/json/todos/${resource}`);
//         request.send();
//     });
// };

////////////////////////////////////////////// fetch api

///////////////////////////////////////////// fetch api with async and await

const getTodos = async () => {

    let data = [];
    let response = await fetch('assets/json/todos/luigi.json');
    if(response.status !== 200) {
        throw new Error(`error, status: ${response.status}`);
    }
    data[0] = await response.json();

    response = await fetch('assets/json/todos/mario.json');
    if(response.status !== 200) {
        throw new Error(`error, status: ${response.status}`);
    }
    data[1] = await response.json();

    response = await fetch('assets/json/todos/mario.json');
    if(response.status !== 200) {
        throw new Error(`error, status: ${response.status}`);
    }
    data[2] = await response.json();

    return data;

};

export { getTodos as default };