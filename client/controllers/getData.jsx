import axios from 'axios'

const getAllDrinkData = async () => {
    axios.get('http:localhost:8180/api/allmixeddrinks')
    .then(response =>
        console.log('Data received:, ', response.data)
        )
        .catch((error) => console.log(error))
}