import { useState, useEffect, useRef } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import "../styles/Login.css";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userCaptchaInput, setUserCaptchaInput] = useState(""); // 使用者輸入的驗證碼
    const [captcha, setCaptcha] = useState(""); // 系統生成的驗證碼
    const [loading, setLoading] = useState(false);
    const [captchaError, setCaptchaError] = useState(""); // 驗證碼錯誤訊息
    const navigate = useNavigate();
    const captchaCanvasRef = useRef(null); // 用來參照 canvas 元素
    const name = method === "login" ? "Login" : "Register";

    // 在元件掛載時生成隨機四位數驗證碼
    useEffect(() => {
        generateCaptcha();
    }, []);

    // 生成四位數的隨機驗證碼
    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 字母和數字的集合
        let randomCaptcha = '';
        
        // 生成隨機的四個字母或數字
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomCaptcha += characters[randomIndex];
        }
    
        setCaptcha(randomCaptcha); // 設置生成的驗證碼
        drawCaptcha(randomCaptcha); // 繪製驗證碼到 canvas 上
    };
    

    // 繪製驗證碼到 canvas 上
    const drawCaptcha = (captchaText) => {
        const canvas = captchaCanvasRef.current;
        const ctx = canvas.getContext("2d");
        
        // 設置 canvas 大小
        canvas.width = 150;
        canvas.height = 50;
    
        // 設置背景顏色
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        // 隨機添加原點
        for (let i = 0; i < 50; i++) {
            ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 3, 0, Math.PI * 2);
            ctx.fill();
        }
    
        // 隨機繪製線條
        for (let i = 0; i < 5; i++) {
            ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }
    
        // 設置字體樣式
        ctx.font = "28px Arial";
        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
    
        // 繪製扭曲的文字
        for (let i = 0; i < captchaText.length; i++) {
            // 隨機旋轉和移動每個字母
            const angle = Math.random() * 0.5 - 0.8; // 隨機旋轉 -0.1 到 0.1 弧度
            const x = 30 + i * 30;
            const y = 25;
    
            ctx.save(); // 保存當前狀態
            ctx.translate(x, y); // 移動到每個字母的位置
            ctx.rotate(angle); // 隨機旋轉文字
            ctx.fillText(captchaText[i], 0, 0); // 繪製文字
            ctx.restore(); // 恢復到初始狀態
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // // 驗證四位數字驗證碼
        // if (userCaptchaInput !== captcha) {
        //     setCaptchaError("Wrong!! Please use your Eyes if you are not blind.");
        //     setLoading(false);
        //     return;
        // }

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

    return (
        <div className="login-container">
            <div className="login-image-container">
                <div className="login-image">
                    <img style={{ height: '180px' }} src="../../public/img/new.png" alt="img dead" />
                </div>
            </div>
            <div className="login-form">
                <div className="rectangle">
                    <a>NSG Foxconn Login</a>
                </div>
                <form onSubmit={handleSubmit} className="form-container">
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
                    
                    {/* 顯示 canvas 驗證碼 */}
                    <label>Input the Validation：
                        <canvas ref={captchaCanvasRef} style={{ border: "1px solid #ddd", height:'75%' }}></canvas>
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        value={userCaptchaInput}
                        onChange={(e) => setUserCaptchaInput(e.target.value)}
                        placeholder="Validation"
                    />
                    {captchaError && <div className="error-message">{captchaError}</div>}

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
