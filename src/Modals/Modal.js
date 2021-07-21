import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import './Modal.css'


import {
    closemodals
} from '../Redux/Action'

const success = <FontAwesomeIcon color="green" icon={faCheckCircle} />
const DepositModal = ({ closemodals, depositvalue, withdrawalvalue, depositmodal, withdrawalmodal, insufficientmodal }) => {
    console.log(insufficientmodal)
    if (depositmodal) {
        return (
            <div className="ModalContainer">
                <div className="Modal">
                    <div className="content">
                        <div><b>Success {success}</b></div>
                    </div>
                    <div className="mb-3">
                        <b>You have made a deposit of ${depositvalue}</b>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn-success x"
                            onClick={closemodals}>Close
                        </button>
                    </div>
                </div>
            </div>

        )
    }
    else if (withdrawalmodal) {
        return (
            <div className="ModalContainer">
                <div className="Modal">
                    <div className="content">
                        <div><b>Success {success}</b></div>
                    </div>
                    <div className="mb-3">
                        You have made a withdrawal of ${withdrawalvalue}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn-success x"
                            onClick={closemodals}>Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else if (insufficientmodal) {
        return (
            <div className="ModalContainer">
                <div className="Modal">
                    <div className="content">
                        <div className="text-danger">Insufficient balance !!</div>
                    </div>
                    <div className="mb-3">
                        You don't have up to ${withdrawalvalue}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn-success x"
                            onClick={closemodals}>Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        depositvalue: state.depositvalue,
        depositmodal: state.depositmodal,
        withdrawalvalue: state.withdrawvalue,
        withdrawalmodal: state.withdrawalmodal,
        insufficientmodal: state.insufficientmodal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closemodals: () => { dispatch(closemodals()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepositModal)
