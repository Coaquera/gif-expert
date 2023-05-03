import { types } from "../types/types";

const initialState = {
    logged:false,
}

export const authReducer = (state={},action) => {
    //en initialState solo defini logged:false
    //entonces ponemos ...state para que los otros valores o properties
    //tambien puedan ser desectructurados
    //cambiamos de logged a true y agregamos un user que tiene
    //id y name
    switch (action.type) {
        case types.login:
            //esto es el nuevo authState que ha sido retornado como 
            // ...authState
            return {
                ...state,
                logged:true,
                user:action.payload,
            }
        case types.logout:
            return {
                logged:false,    
            }

        default:
            return state;

    }

}


// los reducer estan destinados a hacer acciones puras
// no llaman recursos externos, ninguna API externa
// solo resulven el (state,action) que reciben
// osea no llamar al localstorage, api ,axios
