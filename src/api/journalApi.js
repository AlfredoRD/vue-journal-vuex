import axios from 'axios'


const journalApi = axios.create({
baseURL: 'https://vue-demos-96a9e-default-rtdb.firebaseio.com'

})


export default journalApi