import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService(){
        //console.log("ms fired!!!!")
        return axios.get("http://localhost:8080/allUsers")
    }
}

export default new HelloWorldService()