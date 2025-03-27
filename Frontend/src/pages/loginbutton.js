// import { useAuth0 } from "@auth0/auth0-react";

// function LoginButton() {

//     const { loginWithRedirect } = useAuth0();
    
//     return(
//     <button onClick={() => loginWithRedirect()}>Log In</button>
// )
//     };

//     export default LoginButton; 

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/loginbutton.css";


function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/postpage"); // Redirect after successful login
        }
    }, [isAuthenticated, navigate]);

    return <lbutton onClick={() => loginWithRedirect()}>Log In</lbutton>;
}

export default LoginButton;
