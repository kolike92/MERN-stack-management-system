import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../../redux/action_creators';
 class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {fInput: '',lInput:'',sInput:'',aInput:'',pwInput:'',pwrInput:'',match:true};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRedirect() {
    this.props.history.push('/');
  }
  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      fname: this.state.fInput,
      lname: this.state.lInput,
      age: this.state.aInput,
      sex: this.state.sInput,
      password: this.state.pwInput
  }
  this.props.cUser(newUser,this.handleRedirect.bind(this))

  }
  handleFChange = e => {
    this.setState({ fInput: e.target.value });
  };
  handleLChange = e => {
    this.setState({ lInput: e.target.value });
  };
  handleSChange = e => {
    this.setState({ sInput: e.target.value });
  };
  handleAChange = e => {
    this.setState({ aInput: e.target.value });
  };
  handlePWChange = e => {
    this.setState({ pwInput: e.target.value },()=>{
      if (this.state.pwInput!=this.state.pwrInput){
        this.setState({ match: false });
      }
      else{
        this.setState({ match: true });
      }
    })
  };
  handlePWRChange = e => {
    this.setState({ pwrInput: e.target.value },()=>{
      if (this.state.pwInput!=this.state.pwrInput){
        this.setState({ match: false });
      }
      else{
        this.setState({ match: true });
      }
    })
  };
    render() {
      return (
        <div className="container">
          <h1>Create New User: </h1>
          <form onSubmit={this.handleSubmit}>
          <label>
            First Name *: 
            <input
              type="text"
              value={this.state.fInput}
              onChange={this.handleFChange}
              required
            />
          </label>
          <br></br>
          <label>
            Last Name *: 
            <input
              type="text"
              value={this.state.lInput}
              onChange={this.handleLChange}
              required
            />
          </label>
          <br></br>
          <label>
            Sex *: 
            <input
              type="text"
              value={this.state.sInput}
              onChange={this.handleSChange}
              required
            />
          </label>
          <br></br>
          <label>
            Age *: 
            <input
              type="number"
              value={this.state.aInput}
              onChange={this.handleAChange}
              required
            />
          </label>
          <br></br>
          <label>
            Password *: 
            <input
              type="password"
              value={this.state.pwInput}
              onChange={this.handlePWChange}
              required
            />
          </label>
          <br></br>
          <label>
            Repeat *: 
            <input
              type="password"
              value={this.state.pwrInput}
              onChange={this.handlePWRChange}
              required
            />
          </label>
          {!this.state.match && <label style={{color : 'red'}}>    Repeated Password does not match!</label>}
          <hr></hr>
            <button type="submit" disabled={!this.state.fInput||!this.state.lInput||!this.state.aInput||!this.state.sInput||!this.state.pwInput||!this.state.match}>Add User!</button>
            </form> 

        </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
  return {
    userList: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cUser: (n,re) => {
      dispatch(createUser(n,re));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
