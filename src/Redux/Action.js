import {
    CHANGEACCOUNTFIRSTNAME,
    CHANGEACCOUNTLASTNAME,
    UPDATEACCOUNTBALANCE,
    UPDATECREATESTATUS,
    WITHDRAWAMOUNT,
    DEPOSITAMOUNT,
    DEPOSITVALUE,
    WITHDRAWVALUE,
    CLOSEMODAL,
    CHANGEEMAIL
} from "./Types";

export const changeaccountfirstname = (value) => {
    return {
        type: CHANGEACCOUNTFIRSTNAME,
        payload: value
    }
}

export const changeaccountlastname = (value) => {
    return {
        type: CHANGEACCOUNTLASTNAME,
        payload: value
    }
}

export const changeaccountemail = (value) => {
    return {
        type: CHANGEEMAIL,
        payload: value
    }
}

export const updateaccountbalance = (value) => {
    return {
        type: UPDATEACCOUNTBALANCE,
        payload: value
    }
}

export const updatecreatestatus = () => {
    return {
        type: UPDATECREATESTATUS,

    }
}

export const withdrawamount =() =>{
    return{
        type: WITHDRAWAMOUNT,
      
    }
}

export const depositamount =() =>{
    return{
        type: DEPOSITAMOUNT,
  
    }
}

export const updatedepositvalue =(value) =>{
    return{
        type: DEPOSITVALUE,
        payload: value
    }
}

export const updatedewithdrawalvalue =(value) =>{
    return{
        type: WITHDRAWVALUE,
        payload: value
    }
}

export const closemodals =()=>{
    return{
        type: CLOSEMODAL
    }
}