const initState={
    isLoading:false,
    details:{},
    error:null
};

const userDetails = (state=initState, action)=>{
    switch (action.type) {
        case "GOstart":
            return {
                ...state,
                isLoading:true,
            };
        case 'GOsuc':
            return {
                ...state,
                isLoading:false,
                details: action.data,
                error:null
            };
        case 'GOfail':
            return{
                ...state,
                isLoading:false,
                error:action.err
            }
        default:
            return state;
    }
};

export default userDetails;