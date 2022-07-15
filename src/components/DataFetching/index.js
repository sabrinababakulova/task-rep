import axios from 'axios'
export const fetchedCardData = []

const getData = async () => {
    return new Promise((resolve, reject) => {
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
            )
            .then((res) => {
                resolve(
                    res.data.splice(0, 15).map((eachItem) => ({
                        header: eachItem.Name,
                        body: eachItem.About,
                        id: eachItem.Number,
                    }))
                )
            })
            .catch((err) => {
                reject(err)
            })
    })
}
getData().then((userData) => {
    fetchedCardData.push(...userData)
    
})
