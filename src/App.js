import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
    

    const [isUp, setIsUp] = useState(false);
    const [eyeSize, setEyeSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const passwordInput = document.getElementById("password");

        const handleFocusIn = () => setIsUp(true);
        const handleFocusOut = () => setIsUp(false);
        const handleMouseMove = (event) => {
            const dw = document.documentElement.clientWidth / 15;
            const dh = document.documentElement.clientHeight / 15;
            const x = event.pageX / dw;
            const y = event.pageY / dh;
            setEyeSize({ width: x, height: y });
        };

        passwordInput.addEventListener("focusin", handleFocusIn);
        passwordInput.addEventListener("focusout", handleFocusOut);
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            passwordInput.removeEventListener("focusin", handleFocusIn);
            passwordInput.removeEventListener("focusout", handleFocusOut);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = document.querySelector("form");
        form.classList.add("wrong-entry");
        setTimeout(() => {
            form.classList.remove("wrong-entry");
        }, 3000);
    };

    return (<>
        <div className={`tiger ${isUp ? "up" : ""}`}>
            <div className="ear"></div>
            <div className="face">
                <div className="scratch1"></div>
                <div className="scratch2"></div>
                <div className="scratch3"></div>
                <div className="scratch4"></div>
                <div className="scratch5"></div>
                <div className="scratch6"></div>
                <div className="scratch7"></div>
                <div className="eye-shade"></div>
                <div className="eye-white">
                    <div className="eye-ball" style={{ width: `${eyeSize.width}px`, height: `${eyeSize.height}px` }}></div>
                </div>
                <div className="eye-shade rgt"></div>
                <div className="eye-white rgt">
                    <div className="eye-ball" style={{ width: `${eyeSize.width}px`, height: `${eyeSize.height}px` }}></div>
                </div>
                <div className="mouth"></div>
                <div className="nose"></div>
            </div>
            <div className="queue">
                <div className="queue-item item1" style={{ backgroundColor: '#ff6e00' }}></div>
                <div className="queue-item item2" style={{ backgroundColor: '#000' }}></div>
                <div className="queue-item item3" style={{ backgroundColor: '#ff6e00' }}></div>
                <div className="queue-item item4" style={{ backgroundColor: '#000' }}></div>
                <div className="queue-item item5" style={{ backgroundColor: '#ff6e00' }}></div>
                <div className="queue-item item6"></div>
            </div>
            <div className="body"></div>
            <div className="foot">
                <div className="finger"></div>
            </div>
            <div className="foot rgt">
                <div className="finger"></div>
            </div>
        </div>

        {/* <form className={isFormUp ? "up" : ""}>
            <div className="hand"></div>
            <div className="hand rgt"></div>
            <h1>Login</h1>
            <div className="form-group">
                <input
                    required
                    className="form-control"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <label className="form-label">Username</label>
            </div>
            <div className="form-group">
                <input
                    required
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={handlePasswordFocusIn}
                    onBlur={handlePasswordFocusOut}
                />
                <label className="form-label">Password</label>
                {isInvalidCredentials && <p className="alert">Invalid Credentials..!!</p>}
                <button className="btn" onClick={handleLoginClick}>
                    Login
                </button>
            </div>
            <div
                className="eye-ball"
                style={{
                    width: eyeBallStyle.width || "",
                    height: eyeBallStyle.height || "",
                }}
                onMouseMove={handleMouseMove}
            ></div>
        </form> */}

        <form onSubmit={handleSubmit} className={isUp ? 'up' : ''}>
            <div className="hand"></div>
            <div className="hand rgt"></div>
            <h1>Login</h1>
            <div className="form-group">
                <input required="required" className="form-control" />
                <label className="form-label">Username </label>
            </div>
            <div className="form-group">
                <input id="password" type="password" required="required" className="form-control" />
                <label className="form-label">Password</label>
                <p className="alert">Invalid Credentials..!!</p>
                <button className="btn">Login </button>
            </div>
        </form>
    </>
    )
}

export default App
