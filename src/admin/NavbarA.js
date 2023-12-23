import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ILogin } from "../App";
import "./index.css"

function NavbarA() {
    const setIsLogin=useContext(ILogin)
    let navigate = useNavigate();


    const submit=()=>{
        setIsLogin(false)
        navigate("/")
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className= "container">
                <div className="container-fluid navbar-center">
                    <Link className="navbar-brand" to="/admin">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/admin">Home</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" onClick={submit}>Logout</button>
                        </li>
                    </ul>
                    </div>
                </div>   
            </div>
        </nav>
        </>
    )
}
export default NavbarA;