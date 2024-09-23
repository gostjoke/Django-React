import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import "../styles/Login.css";
import LoadingIndicator from "./LoadingIndicator";


function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                localStorage.setItem("user", username);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    // return <form onSubmit={handleSubmit} className="form-container">
    //     <h1>{name}</h1>
    //     <input 
    //         className="form-input"
    //         type="text"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         placeholder="Username"
    //     />
    //     <input 
    //         className="form-input"
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Password"
    //     />
    //     {loading && <LoadingIndicator/>}
    //     <button className="form-button" type="submit">
    //         {name}
    //     </button>
    // </form>

    return (
        <div className="login-container">
            <div className="login-image-container">
                <div className="login-image">
                    <img style={{ height: '180px' }} src="../../public/img/new.png" alt="img dead" />
                </div>
            </div>
            <div className="login-form" >
                <div className="rectangle">
                    <a>NSG Foxconn Login</a>
                </div>
                <form onSubmit={handleSubmit} className="form-container" >
                    <h1>{name}</h1>
                    <input
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {loading && <LoadingIndicator />}
                    <button className="form-button" type="submit">
                        {name}
                    </button>
                </form>
                <div>
                    <div className="rectangle">
                        <a href="update_pwd">Reset Password</a>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <a>Engineer: Tien-Wei Hsu</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
