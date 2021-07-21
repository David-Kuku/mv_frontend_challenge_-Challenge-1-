import {
    CHANGEACCOUNTFIRSTNAME,
    CHANGEACCOUNTLASTNAME,
    UPDATEACCOUNTBALANCE,
    UPDATECREATESTATUS,
    WITHDRAWAMOUNT,
    DEPOSITAMOUNT,
    WITHDRAWVALUE,
    DEPOSITVALUE,
    CLOSEMODAL,
    CHANGEEMAIL,
    OPENINSUFFICIENTMODAL
} from "./Types";

const initialState = {
    accountfirstname: null,
    accountlastname: null,
    accountemail: null,
    balance: 0,
    createstatus: false,
    withdrawvalue: 0,
    depositvalue: 0,
    depositmodal: false,
    withdrawalmodal: false,
    insufficientmodal: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGEACCOUNTFIRSTNAME:
            return {
                ...state,
                accountfirstname: action.payload
            }
        case CHANGEACCOUNTLASTNAME:
            return {
                ...state,
                accountlastname: action.payload
            }
        case CHANGEEMAIL:
            return {
                ...state,
                accountemail: action.payload
            }
        case UPDATEACCOUNTBALANCE:
            return {
                ...state,
                balance: action.payload
            }
        case UPDATECREATESTATUS:
            return {
                ...state,
                createstatus: true
            }
        case WITHDRAWVALUE:
            return {
                ...state,
                withdrawvalue: action.payload
            }
        case DEPOSITVALUE:
            return {
                ...state,
                depositvalue: action.payload
            }
        case WITHDRAWAMOUNT:
                return {
                    ...state,
                    balance: (Number(state.balance) - Number(state.withdrawvalue)).toFixed(2),
                    withdrawalmodal: !state.withdrawalmodal
                }
            
        case DEPOSITAMOUNT:
            return {
                ...state,
                balance: Number(state.balance) + Number(state.depositvalue),
                depositmodal: !state.depositmodal
            }
        case CLOSEMODAL:
            return {
                ...state,
                depositmodal: false,
                withdrawalmodal: false,
                insufficientmodal: false
            }
        case OPENINSUFFICIENTMODAL:
            return {
                ...state,
                insufficientmodal: true
            }
        default: return state
    }
}

