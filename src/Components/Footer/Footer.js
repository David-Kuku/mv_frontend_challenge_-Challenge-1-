import React from 'react'

function Footer() {
    return (
        <div className="container-fluid">
            <div className="row mt-5">
            <div className="d-flex align-items-center justify-content-center mx-auto bg-dark">
                        <img style={{ width: "40px", height: "40px", marginTop:"20px",borderRadius:"55px" }} className="mb-3 me-2" src="makers.png" />
                        <div className="d-flex align-items-center text-white my-auto mt-4"><b>MakersValley. 2021</b></div>
                    </div>
            </div>
        </div>
    )
}

export default Footer
