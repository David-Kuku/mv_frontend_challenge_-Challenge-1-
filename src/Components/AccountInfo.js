import React from 'react'
import {
    changeaccountfirstname,
    changeaccountlastname,
    updateaccountbalance,
    updatecreatestatus,
    depositamount,
    withdrawamount,
    updatedepositvalue,
    updatedewithdrawalvalue,
    openInsufficientmodal
} from '../Redux/Action'

import { connect } from 'react-redux'
import './AccountInfo.css'

const AccountInfo = ({
    Accountbalance,
    Accountfirstname,
    Accountlastname,
    updatedepositvalue,
    updatedewithdrawalvalue,
    deposit,
    withdraw,
    withdrawvalue,
    openInsufficientmodal
}) => {

    const insufficient =()=>{
        if(Number(Accountbalance) < Number(withdrawvalue)){
            openInsufficientmodal()
            
        }
        else{
            withdraw()
        }
        
    }
    return (
        <div >
            <div className="main" style={{ backgroundColor:"whitesmoke"}}>
            <div className="d-flex mb-3 ms-4">
                        <img style={{ width: "250px", height: "80px", marginTop:"20px" }} src="MakersValley-Logo.png" />
                    </div>
            <div className="accountinfodisplay">
                <div>
                    
                    <div className="mb-3">
                        <b className="text">Account Name:</b>
                        <h3><span className="text-uppercase">{Accountlastname}</span>, {Accountfirstname}</h3>
                    </div>
                    <div><b className="text">Account balance:</b> <h3>${Accountbalance}</h3></div>
                </div>
            </div>
            </div>
            <div className="container mt-5" >
                <div className="row">

                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="deposit">
                            <form>
                                <div>Deposit:</div>
                                <div>
                                    <input
                                        className="mt-2 rounded w-230 border-success"
                                        type="number"
                                        placeholder="Amount to deposit"
                                        onChange={e => updatedepositvalue(e.target.value)} />
                                </div>
                                <button className="btn btn-success mt-3" onClick={deposit} type="reset">Deposit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center mb-5">
                        <div className="withdraw">
                            <form>
                                <div>Withdraw:</div>
                                <div>
                                    <input
                                        placeholder="Amount to Withdraw"
                                        className="mt-2 rounded w-230 border-danger"
                                        type="number"
                                        onChange={e => updatedewithdrawalvalue(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-danger mt-3" type="reset" onClick={insufficient}>Withdraw</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Accountfirstname: state.accountfirstname,
        Accountlastname: state.accountlastname,
        Accountbalance: state.balance,
        createstatus: state.createstatus,
        withdrawvalue: state.withdrawvalue,
        depositvalue: state.depositvalue,
        insufficientmodal: state.insufficientmodal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeaccountfirstname: (value) => { dispatch(changeaccountfirstname(value)) },
        changeaccountlastname: (value) => { dispatch(changeaccountlastname(value)) },
        updateaccountbalance: (value) => { dispatch(updateaccountbalance(value)) },
        updatecreatestatus: () => { dispatch(updatecreatestatus()) },
        deposit: () => { dispatch(depositamount()) },
        withdraw: () => { dispatch(withdrawamount()) },
        updatedewithdrawalvalue: (value) => { dispatch(updatedewithdrawalvalue(value)) },
        updatedepositvalue: (value) => { dispatch(updatedepositvalue(value)) },
        openInsufficientmodal: () => { dispatch(openInsufficientmodal())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
