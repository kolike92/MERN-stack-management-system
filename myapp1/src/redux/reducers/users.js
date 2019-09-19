const initState={
    isLoading:false,
    list:[],
    error:null
};

const users = (state=initState, action)=>{
    switch (action.type) {
        case "GAstart":
            return {
                ...state,
                isLoading:true,
            };
        case 'GAsuc':
            return {
                ...state,
                isLoading:false,
                list: action.data,
                error:null
            };
        case 'GAfail':
            return{
                ...state,
                isLoading:false,
                error:action.err
            }
        default:
            return state;
    }
};

export default users;