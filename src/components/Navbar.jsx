import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>  
                    <li><Link to="/about">About Us</Link></li>   
                    <li><Link to="/climate-tools">Climate Tools</Link></li>
                    <li><Link to="/export-hub">Export Hub</Link></li>
                    <li><Link to="/smart-farming">Smart Farming</Link></li>
                    <div><button>Create Account</button></div>
                </ul>
            </div>      
        </nav>
    )
}

export default Navbar;

