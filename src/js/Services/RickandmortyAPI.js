class RickandmortyAPI {
    constructor() {

    }

    getData() {
        return fetch(`https://rickandmortyapi.com/api/character?page=${Math.floor(Math.random()*(25-0+1))+0}`)
            .then(response => {
                if (response.ok)
                    return response.json();
                return Promise.reject('API responded ' + response.status)
            })
    }

    getItem(id) {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                if (response.ok)
                    return response.json();
                return Promise.reject('API responded ' + response.status)
            })
    }

}

export default new RickandmortyAPI();
