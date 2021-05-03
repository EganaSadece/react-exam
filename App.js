import React from 'react';
import axios from 'axios';
import './componets/Exam.css';
import Repositories from './componets/Repositories'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list:null,
      userRepositories:[]
    }
  }
  componentDidMount=()=>{
    axios.get("https://api.github.com/users/Wesamsh14?client_id=6cd8c71e23be77c212e0&client_secret=582a86dcb28bb8551e5d3ca1a804b07ae9e72368&sort=created")
    .then((response)=>{
      this.setState({
        list:response.data
      })
    }).catch((error)=>{
      console.log(error)
    })
    axios.get("https://api.github.com/users/Wesamsh14/repos?client_id=38855201&client_secret=582a86dcb28bb8551e5d3ca1a804b07ae9e72368&sort=created")
    .then((response)=> {
      const repositories = response.data;
      this.setState({ userRepositories : repositories })
    })
    .catch((error)=> {
      console.log(error);
    });
  }
  
render (){
  return (
<div className="maindiv">
    <hr />
  <aside className="App">
      <div>
      <img src={this.state.list && this.state.list.avatar_url} className="photo" />
      </div>
      </aside>
<div className="data"> 
<div className="card">
  <div className="card-body">
 <b> Fullname: </b>{this.state.list && this.state.list.name}
  </div>
</div>
<div className="card">
  <div className="card-body">
 <b> Username: </b>{this.state.list && this.state.list.login}
  </div>
</div>
<div className="card">
  <div className="card-body">
 <b> Location: </b>{this.state.list && this.state.list.location}
  </div>
</div>
<div className="card">
  <div className="card-body">
 <b> Email Address: </b>{this.state.list && this.state.list.email}
  </div>
</div>

   <div className="userrep">
    <hr />
    <h1>User Repositories</h1>
    <Repositories userRepositories={this.state.userRepositories} />

    </div> 
</div>
</div>

  )
}
}

export default App;
