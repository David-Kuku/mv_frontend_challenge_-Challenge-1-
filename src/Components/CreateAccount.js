import React from 'react'
import './CreateAccount.css'
import { connect } from 'react-redux'
import {
    changeaccountfirstname,
    changeaccountlastname,
    updateaccountbalance,
    updatecreatestatus,
    depositamount,
    withdrawamount,
    updatedepositvalue,
    updatedewithdrawalvalue
} from '../Redux/Action'
import AccountInfo from './AccountInfo'

const CreateAccount = ({
    Accountfirstname,
    Accountlastname,
    Accountbalance,
    changeaccountfirstname,
    changeaccountlastname,
    updateaccountbalance,
    createstatus,
    updatecreatestatus,
}) => {
    return (
        <>
            {
                !createstatus ?
                    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <div className="container p-5">
                            <div className="d-flex justify-content-center mb-3">
                                <img style={{ width: "100px", height: "100px" }} src="makers.png" />
                            </div>
                            <div className="row">
                                <div className="col-9 col-lg-3 col-md-6 mx-auto welcome-text text-center mb-4"> Welcome to Bank App</div>

                            </div>

                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className=" d-flex justify-content-center">
                                        <form className="createAccount-form">
                                            <div>
                                                <div className="text-center mb-3 create-text"><b>Create Account</b></div>
                                                <div className="mb-4">

                                                    <input
                                                        onChange={e => changeaccountfirstname(e.target.value)}
                                                        placeholder="Firstname"
                                                        type="text"
                                                        required />
                                                </div>
                                                <div className="mb-4">

                                                    <input
                                                        placeholder="Lastname"
                                                        onChange={e => changeaccountlastname(e.target.value)}
                                                        type="text"
                                                        required />
                                                </div>


                                                <div className="mb-4">

                                                    <input
                                                        placeholder="Email"
                                                        type="email"
                                                        required />
                                                </div>
                                                <div className="mb-4">

                                                    <input
                                                        placeholder="Opening Amount"
                                                        type="number"
                                                        required
                                                        onChange={e => updateaccountbalance(e.target.value)} />
                                                </div>
                                                <div className="mb-4">

                                                    <button className="btn btn-success " onClick={
                                                        (Accountfirstname && Accountlastname) ? updatecreatestatus : null}>Create Account</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    {
                                        Accountbalance < 0 ? <div className="d-flex justify-content-center text-danger">Enter a valid amount</div> : null
                                    }
                                </div>

                                <div className="col-md-6"></div>
                            </div>
                        </div>

                    </div> :
                    <AccountInfo />
            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Accountfirstname: state.accountfirstname,
        Accountlastname: state.accountlastname,
        Accountemail: state.accountemail,
        Accountbalance: state.balance,
        createstatus: state.createstatus,
        withdrawvalue: state.withdrawvalue,
        depositvalue: state.depositvalue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeaccountfirstname: (value) => { dispatch(changeaccountfirstname(value)) },
        changeaccountlastname: (value) => { dispatch(changeaccountlastname(value)) },
        updateaccountbalance: (value) => { dispatch(updateaccountbalance(value)) },
        updatecreatestatus: () => { dispatch(updatecreatestatus()) },
        depositamount: () => { dispatch(depositamount()) },
        withdrawamount: () => { dispatch(withdrawamount()) },
        updatedewithdrawalvalue: (value) => { dispatch(updatedewithdrawalvalue(value)) },
        updatedepositvalue: (value) => { dispatch(updatedepositvalue(value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
