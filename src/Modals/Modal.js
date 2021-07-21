import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import './Modal.css'


import {
    closemodals
} from '../Redux/Action'

const success = <FontAwesomeIcon color="green" icon={faCheckCircle} />
const DepositModal = ({ closemodals, depositvalue, withdrawalvalue, depositmodal, withdrawalmodal }) => {
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
                        <div>Success {success}</div>
                        <button
                            className="x"
                            onClick={closemodals}>X
                        </button>
                    </div>
                    <div className="mt-2">
                        You have made a withdrawal of ${withdrawalvalue}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        depositvalue: state.depositvalue,
        depositmodal: state.depositmodal,
        withdrawalvalue: state.withdrawvalue,
        withdrawalmodal: state.withdrawalmodal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closemodals: () => { dispatch(closemodals()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepositModal)
