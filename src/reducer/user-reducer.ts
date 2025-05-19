import type { loginData, userData } from "../types/userTypes"

export type UserActions = 
    {type: "set-user", payload: {data : userData}}

export type UserState = {
    documentNumber : loginData["documentNumber"],
    phoneNumber : loginData["phoneNumber"],
    documentType : loginData["documentType"],
    name : userData["name"],
    lastName : userData["lastName"],
    bithDate : userData["birthDate"],
    yearsold : userData["yearsold"]
}

export const initialState : UserState = {
    documentNumber: '30216147',
    phoneNumber: '5130216147',
    documentType: "DNI",
    name : "",
    lastName : "",
    bithDate : "",
    yearsold : 0
}

export const UserReducer = (state : UserState, action : UserActions) => {

    if(action.type === "set-user"){        
        return {
            ...state,
            name: action.payload.data.name,
            lastName: action.payload.data.lastName,
            bithDate: action.payload.data.birthDate,
            yearsold: action.payload.data.yearsold
        }
    }

    return state;
}
