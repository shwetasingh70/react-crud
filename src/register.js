import React from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fullname:'',
      email : '',
      password : ''
    }
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({fullname: e.target.value})
  }
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }

  handleSubmit(e) {
    //const history = useHistory();
    e.preventDefault();
    const users = {
      fullname: this.state.fullname,
      email : this.state.email,
      password : this.state.password
    }
    //console.log(users);

    axios.post('http://localhost:8081/register', users)
      .then(function(res) {
          const person = res.data;
          this.setState({ person });
          this.props.history.push("/login");
          console.log('Successfully Registered');
          //history.push("/login");
          //history.back();     // equivalent to clicking back button
          //history.go(-1);     // equivalent to history.back();
          //window.history.go(0); // refresh the current page
    }) 
      .catch(function(error){
        console.log(error);
      });


	}
 
  componentDidMount() {
    //getUser =(e) => {
     // e.preventDefault();
      //const user = 'React data testing';
      axios.get(`http://localhost:8081`)
        .then(res => {
          console.log({res});
        })
        .catch(function(error){
        console.log(error);
      });

    //}  
  }




render() {
 return(
  
<div className="Register">
<div className="container h-100">
  <div className="row h-100 align-items-center">
    <div className="col-xl-5 col-lg-6 col-md-8 pr-0 pl-0  mx-auto text-center ">
      <h1 className="text-white bg-secondary mb-0 pb-2 pt-2 rounded-top">REGISTER</h1>
      <form method="post" onSubmit={this.handleSubmit}>
        <br/>
        <input type="text" name="fullname" 
        className="form-control" placeholder="Full Name" onChange={this.handleNameChange}/>  
        <br/>
        <input type="text" name="email" 
        className="form-control" placeholder="Email Id" onChange={this.handleEmailChange}/>  
        <br/>
        <input type="password" name="password" 
        className="form-control" placeholder="Password" onChange={this.handlePasswordChange}/>  
        <br/>
        <button type="submit" name="submit">Submit</button>
      </form>
    </div>
  </div>
</div>    
</div>
  );
}

}

export default Register;
