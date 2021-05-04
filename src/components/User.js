import axios from 'axios';
import React, { Component } from 'react'

class User extends Component {
    state = {
        user: null,

    }
    componentDidMount(){
        axios
        .get("https://api.github.com/users/ErikBurdett")
        .then(res=> {
            this.setState({
                user: res.data,
        });
    })
        .catch((err)=> console.log(err));
    }

    render() {
        const {user} = this.state;

        if (!this.state.user) return <p>Loading Data...</p>
        
        return (
            <div>
                <img 
                    style={{width: "150px", borderRadius: "50%"}}
                    alt={this.state.user.name} 
                    src={this.state.user.avatar_url}/>
                <h3>{this.state.user.name}</h3>
                <p>username: {user.login}</p>
                <p>repos: {user.public_repos}</p>
                
                
            </div>
        );
    }
}

export default User;