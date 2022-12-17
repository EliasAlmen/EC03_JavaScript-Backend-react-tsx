import React from 'react'
import BreadCrumbsSection from '../sections/BreadCrumbsSection';
import FooterSection from '../sections/FooterSection';
import HeaderSection from '../sections/HeaderSection';
import LoginSection from '../sections/AuthLoginSection'
import RegisterSection from '../sections/AuthRegisterSection';

const AuthView: React.FC = () => {
    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <div className='d-flex auth justify-content-center'>
                <RegisterSection />
                <LoginSection />
            </div>
            <FooterSection />
        </>
    )
}

export default AuthView;