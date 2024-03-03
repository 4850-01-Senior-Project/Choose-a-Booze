import axios from 'axios'

const getAllDrinkData = async () => {
    axios.get('http:localhost:8180/api/allmixeddrinks')
    .then(response =>
        console.log('Data received:, ', response.data)
        )
        .catch((error) => console.log(error))
}

const getAllDrinkDataByLiquorType = async (liquor_type) => {
    const url = 'http:localhost:8180/api/mixeddrinkbyliquor?' + liquor_type.substring(0,1).toUpperCase() + liquor_type.substring(1).toLowerCase()
    axios.get('http:localhost:8180/api/allmixeddrinks')
    .then(response =>
        console.log('Data received:, ', response.data)
        )
        .catch((error) => console.log(error))
}