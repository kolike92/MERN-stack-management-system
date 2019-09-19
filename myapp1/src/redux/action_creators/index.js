import axios from 'axios';
const gaStart = () =>{
    return {
        type: "GAstart"
    };
};

const gaSuc = (response) =>{
    return {
        type: "GAsuc",
        data: response
    };
};

const gaFail = (err) =>{
    return {
        type: "GAfail",
        err
        
    };
};

const goStart = () =>{
  return {
      type: "GOstart"
  };
};

const goSuc = (response) =>{
  return {
      type: "GOsuc",
      data: response
  };
};

const goFail = (err) =>{
  return {
      type: "GOfail",
      err
      
  };
};

export const getAllUsers = () => {
    return (dispatch) => {
      dispatch(gaStart());
      axios.get("http://localhost:8888/")
        .then(res => {
          dispatch(gaSuc(res.data));
        })
        .catch(err => {
          dispatch(gaFail(err));
        });
    };
  }

  export const createUser = (n,re) => {
    return (dispatch) => {
      dispatch(gaStart());
      axios.post("http://localhost:8888/cUser",n)
        .then(res => {
          dispatch(gaSuc(res.data));
          re()
        })
        .catch(err => {
          dispatch(gaFail(err));
        });
    };
  }

  export const deleteUser = (n) => {
    return (dispatch) => {
      dispatch(gaStart());
      axios.delete("http://localhost:8888/dUser",{data:{body:n}})
        .then((res) => {
          dispatch(gaSuc(res.data));
        });
    };
  }

  export const getOne = (n) => {
    return (dispatch) => {
      dispatch(goStart());
      axios.get("http://localhost:8888/eUser/"+n)
        .then(res => {
          dispatch(goSuc(res.data));
        }        
        )
        .catch(err => {
          dispatch(goFail(err));
        });
        };
    
  }

  export const eUser = (n,id,re) => {
    //console.log('ACCCC', this.props)
    //console.log(n,id)
    return (dispatch) => {
      dispatch(gaStart());
      axios.put("http://localhost:8888/eUser",[n,id])
        .then(res => {
//          console.log('PTTTO',this.props)
          dispatch(gaSuc(res.data));
          re()
          //window.location.replace('/')//use history.push instead!
        })
        .catch(err => {
          dispatch(gaFail(err));
        });
    };
  }