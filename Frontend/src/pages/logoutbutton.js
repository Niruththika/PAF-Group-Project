import { useAuth0 } from "@auth0/auth0-react";
import "../style/logoutbutton.css";

function LogoutButton() {
    const { logout } = useAuth0();
    
    return (
        <button 
            className="logout-button" 
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            Log Out
        </button>
    );
}

export default LogoutButton;
