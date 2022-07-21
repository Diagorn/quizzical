import axios from "axios"

const SERVER_ADDRESS = 'https://opentdb.com/api.php'

export default class OtdbService {
    static getQuestions(amount) {
        try {
            const response = axios.get(SERVER_ADDRESS, {
                params: {
                    amount: amount,
                    type: 'multiple'
                }
            })
            return response;
        } catch(error) {
            console.error(error)
        }
    }
}