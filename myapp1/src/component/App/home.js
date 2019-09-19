import React from 'react';
import {connect} from 'react-redux';
import {getAllUsers} from '../../redux/action_creators';
import {deleteUser} from '../../redux/action_creators';
import '../../index.css';
import PaginacionTabla from "./pagination";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class Home extends React.Component {
  constructor(){
    console.log('constructor')
    super();
    this.state={search:'',sortedList:'',itemsperpage:3,nocolumns:6}
   
  };
  
  componentDidMount() {
    console.log('componentDidMount')
    this.props.getAll();
  }
    
  updateSearch(event){
    this.setState({search: event.target.value});
  }
  delete=(id)=>{
    this.props.dUser(id);
  }
  onSort(key){
    const data= this.props.userList.list
    if (this.state.sortedList=='as'){
      data.sort((a,b) => b[key].toString().localeCompare(a[key].toString()))
      this.setState({sortedList: 'de'})
      //console.log(this.state.sortedList)
    }
    else{
    data.sort((a,b) => a[key].toString().localeCompare(b[key].toString()))
    this.setState({sortedList: 'as'})
    //console.log(this.state.sortedList)
    }
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
}
  render(){
    console.log('inside render! ',this.state)
    const { list, isLoading, error } = this.props.userList;
    let filteredUser=list
    if (list.length>0){
       filteredUser=list.filter(
        (x)=>{
          let allName= x.fname+x.lname+x.sex+x.age
          return allName.indexOf(this.state.search)!==-1;
        }
      );
    }
    console.log('this is filteredUser', filteredUser)
    return(
      <div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <p><h1>Users</h1></p>
        <p>Search <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}name="Searchbox"></input></p>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
        <div className="main">
          {error && <div style={{color:"red"}}>WRONG~~~!</div>}
          {list.length>0 &&
               <PaginacionTabla 
              itemsperpage={this.state.itemsperpage}
              nocolumns={this.state.nocolumns}
              items={filteredUser}
              pagesspan={5}
              func ={this.delete}
              onSort={this.onSort.bind(this)}
              sortedList={this.state.sortedList}
            /> 
          }
        </div>
        }
        <br></br>
        <hr></hr>
      <button className="createN" type="button"><Link to ='/cUser'>Create New User!</Link></button>
      {console.log('Bottom of render')}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  return {
    userList: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps')
  return {
    getAll: () => {
      dispatch(getAllUsers());
    },
    dUser: (n) => {
      dispatch(deleteUser(n));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
