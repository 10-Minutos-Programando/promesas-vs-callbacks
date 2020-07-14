// Callback
function getSwDataCb(type, done) {
    var request = new XMLHttpRequest();
    request.open('GET', `https://swapi.co/api/${type}/?format=json`, false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        let res = JSON.parse(request.responseText);
        done(null, res.results);
    } else {
        done('Error');
    }
}

function getSwDataPromise(type) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', `https://swapi.co/api/${type}/?format=json`, false);
        request.send();

        if (request.status === 200) {
            let res = JSON.parse(request.responseText);
            resolve(res.results);
        } else {
            reject('Error');
        }
    });
}

// getSwDataCb('people', (err, people) => {
//     if (err) return console.log(err);
//     console.log(people);
// });

// getSwDataPromise('films')
//     .then(films => {
//         return films.map(film => film.title);
//     }).then((titles) => {
//         console.log(titles);
//     }).catch(err => {
//         console.log(err);
//     });

(async () => {
    let people = await getSwDataPromise('people');
    console.log(people);
})();

console.log('FINAL!!');
