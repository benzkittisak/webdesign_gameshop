import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () =>{ 
    return(
        <div className="signin-signup-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 hr-right">
                        <SignIn />
                        <div className="pb-5"></div>
                    </div>
                    <div className="col-lg-6">
                        <SignUp/>
                        <div className="pb-5"></div>    
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default SignInAndSignUpPage;