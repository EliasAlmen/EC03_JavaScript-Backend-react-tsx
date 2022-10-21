import React from 'react'

const SpecialitySection = () => {
  return (
    <section className="container speciality ">
        <div className="container-speciality flex-column">
            <div className="container-headings">
                <h1>Our Speciality</h1>
            </div>
            <div className="card-container">
                <div className="card-speciality">
                    <div className="white">
                        <h3>Track Your Order</h3>
                        {/* <a href="#">Get Started </a> */}
                    </div>
                    <div className="grey"></div>
                </div>
                <div className="card-speciality">
                    <div className="white">
                        <h3>Make a Return</h3>
                        {/* <a href="#">Get Started </a> */}
                    </div>
                    <div className="grey"></div>
                </div>
                <div className="card-speciality">
                    <div className="white">
                        <h3>Request a Price <br />Adjustment</h3>
                        {/* <a href="#">Get Started </a> */}
                    </div>
                    <div className="grey"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialitySection