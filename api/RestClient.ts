import axios from "axios"
import { Auth } from 'aws-amplify';

const InitRestClient = async () => {
    const token = await Auth.currentSession()
    const URL = "https://chaplfql4k.execute-api.ap-northeast-1.amazonaws.com/dev/"
    const instance = axios.create({
        baseURL: URL,
        headers: { "Authorization": `Bearer ${token.getIdToken().getJwtToken()}` }
    });
    return instance
}


export default InitRestClient