import { useState } from "react";
import './page.css';

export default function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>
    );
}

function Popup({ onClose }) {
    return (
        <div sclassName="overlay">
            <div className="popup">
                <div className="iconContainer">
                    <span className="checkIcon">✔️</span>
                </div>
                <h2 className="title">Thank you for your booking</h2>
                <p className="message">Please proceed to the counter for payment</p>
                <button className="buttonn" onClick={onClose}>
                    Confirm
                </button>
            </div>
        </div>
    );
}