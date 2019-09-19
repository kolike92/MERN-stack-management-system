import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getOne, eUser} from '../../redux/action_creators';
import axios from 'axios';
 class Edit extends Component {

  constructor(props) {
    super(props);
    console.log('CONST');
    //console.log('cons',this.details)
    this.state = {fInput: this.props.location.state.fname,lInput:this.props.location.state.lname,sInput:this.props.location.state.sex,aInput:this.props.location.state.age,pwInput:'',pwrInput:'',match:true};
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    console.log('Dit',this.props)
  }
  
  handleRedirect() {
    this.props.history.push('/');
  }
  handleSubmit(event) {
    //this.props.history.push('/')
    event.preventDefault();
    const newUser = {
      fname: this.state.fInput,
      lname: this.state.lInput,
      age: this.state.aInput,
      sex: this.state.sInput,
      password: this.state.pwInput
  }
  this.props.eUser(newUser,this.props.match.params.id,this.handleRedirect.bind(this))

  }
  handleFChange = e => {
    this.setState({ fInput: e.target.value });
  };
  handleLChange = e => {
    //this.props.userDetail.details.lname= e.target.value
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
    });

  };

    render() {
      //console.log('REN',this.props.userDetail);
      return (
        <div className="container">
          <h1>Edit this User: </h1>
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
            <button type="submit" disabled={!this.state.fInput||!this.state.lInput||!this.state.aInput||!this.state.sInput||!this.state.pwInput||!this.state.match}>Save it!</button>
            </form> 

        </div>
        
      );
    }
  }
  
const mapStateToProps = (state) => {
  console.log('STATE');
  return {
    ...state,
    userDetail: state.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('DIS');
  return {
     getOne: (n) => {
      dispatch(getOne(n));
    },
    eUser:(n,id,re)=>{
      dispatch(eUser(n,id,re));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
