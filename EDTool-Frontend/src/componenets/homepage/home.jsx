import { useEffect, useState } from "react";
import useAvatar from "./../../assets/user-avatar 1.svg";
import Dropdown from "./../../assets/dropdown.svg";
import { useNavigate } from "react-router-dom";
import "./home.css";
import axios from "axios";

const Home = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');
    const Navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("currentUser"))
           setCurrentUser(localStorage.getItem("currentUser"));
        else
           Navigate("/signin");
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
        Navigate("/signin");
    };

    const handleEncrypt = async() => {
        const resp=await axios.post("http://localhost:8080/user/encrypt", {
           message: text
        });
        setResponse(resp.data);
    };
    
    const handleDecrypt = async () => {
        const resp=await axios.post("http://localhost:8080/user/decrypt", {
            secret: text
        });
        setResponse(resp.data);
    };

    return (
        <div>
            <div className="panelist-navbar">
                <div className="panelist-navbar-left">
                    <h2>EDTool</h2>
                </div>
                <div className="panelist-navbar-right">
                    <h3 className="panelName">Welcome {currentUser}</h3>
                    <img src={useAvatar} alt="" className="avatarImage" />
                    <img
                        src={Dropdown}
                        alt=""
                        className="avatarImage"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="app-container">
                {/* Left Part: Input Box */}
                <div className="left-container">
                    <h2> Your Message! </h2>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                        className="input-textarea"
                    />
                    <div className="button-container">
                        <button onClick={handleEncrypt} className="add-button">Encrypt</button>
                        <button onClick={handleDecrypt} className="delete-button">Decrypt</button>
                    </div>
                </div>

                {/* Right Part: Response */}
                <div className="right-container">
                    <h2 className="response-heading"> Our Response </h2>
                    <div className="response-text">{response}</div>
                </div>
            </div>
        </div>
    )
};
export default Home;