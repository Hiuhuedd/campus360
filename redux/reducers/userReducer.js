import { timetable } from "../../utils/timetable";

let defaultState = {
    timetable: timetable,
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
    
        case 'MY_TIMETABLE':
            return {
                ...state,
                timetable: payload    
            }
              

        default:
            return state;

    }


}


export default UserReducer