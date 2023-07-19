import { COLORS } from "../../constants/theme";
import { timetable } from "../../utils/timetable";

let defaultState = {
    timetable: timetable,
    user: {},
    location: {},
    theme:{color:COLORS.primary,name:"Atlantic"},
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
        case 'MY_THEME':
            return {
                ...state,
                theme: payload    
            }
              

        default:
            return state;

    }


}


export default UserReducer