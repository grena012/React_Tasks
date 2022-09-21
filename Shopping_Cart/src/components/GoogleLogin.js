import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Api from './Shopping';

const clientId = "934818312212-b7929ebaeb15grh1qbjbn8o8j6qg9229.apps.googleusercontent.com";

function Glogin() {
    const navigate=useNavigate();
     
    const [showloginButton, setShowloginButton] = useState(true);
    
    const onLoginSuccess = (res) => {
        console.log('Login Success:',res.profileObj);
        setShowloginButton(false);
        if(res.profileObj){
        navigate("/product");
    }
}
  

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };


    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}
        </div>
    );
};
export default Glogin;
