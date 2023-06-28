
let defaultState = {
    theme: true,
    user: {},
    location: {},
  };


const UserReducer = (state = defaultState, action) => {
    
 
    const { type, payload } = action;

    switch(type){
        case 'ON_UPDATE_LOCATION':
            return {
                ...state,
                location: payload,
            }
    
        case 'ON_USER':
            return {
                ...state,
                user: payload    
            }
    
        case 'ON_THEME_CHANGE':
            return {
                ...state,
                theme: payload    
            }
              

        default:
            return state;

    }


}


export default UserReducer