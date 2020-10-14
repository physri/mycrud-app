import React, {Component} from 'react'
import HelloWorldService from '../../api/todo/HelloWorldService'

class MyCrudWelcomePage extends Component {
    constructor(props){
        super(props);
        this.listAllUsers = this.listAllUsers.bind(this);
        this.handleAllUsersResp = this.handleAllUsersResp.bind(this);
        this.state = {
            welcomeMsg : "will be updated soon!!!!"
        }
    }
    render(){
        return(
            <div className="mycrudpg">
                <h2>Welcome to the CRUD operations!!!!</h2>
                <button onClick={this.listAllUsers}>
                    List All Users!! !
                </button>
                <div className="container">
                    {this.state.welcomeMsg}
                </div>
            </div>
        )
    }

    listAllUsers() {
        //console.log("btn clicked!!!");
        HelloWorldService.executeHelloWorldService()
        .then(response => this.handleAllUsersResp(response))
        .catch(error => this.handleAllUsersErr(error))
    }  

    handleAllUsersResp(response){
        this.setState({
            welcomeMsg: response.data
        })
        console.log("status :::: "+ response.status)
        console.log("headers :::: "+ response.headers)
        console.log("config :::: " +response.config)
        console.log("data :::: " +response.data.welcomeMsg)
        console.log("status Text :::: "+response.statusText)
    }

    handleAllUsersErr(error){
        console.log(error)
        this.setState({
            welcomeMsg: 'sorry.... db hit failed !!!! :('
        })
    }

}

export default MyCrudWelcomePage