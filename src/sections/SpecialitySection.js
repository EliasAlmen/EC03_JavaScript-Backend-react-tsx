import React from 'react'

const SpecialitySection = () => {
  return (
    <section class="container speciality ">
        <div class="container-speciality flex-column">
            <div class="container-headings">
                <h1>Our Speciality</h1>
            </div>
            <div class="card-container">
                <div class="card-speciality">
                    <div class="white">
                        <h3>Track Your Order</h3>
                        {/* <a href="#">Get Started </a> */}
                    </div>
                    <div class="grey"></div>
                </div>
                <div class="card-speciality">
                    <div class="white">
                        <h3>Make a Return</h3>
                        {/* <a href="#">Get Started </a> */}
                    </div>
                    <div class="grey"></div>
                </div>
                <div class="card-speciality">
                    <div class="white">
                        <h3>Request a Price <br />Adjustment</h3>
                        {/* <a href="#">Get Started </a> */}
                    </div>
                    <div class="grey"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialitySection