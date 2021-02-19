import React, { useState, useEffect } from "react";
import './darkmode.css';

function Darkmode() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    });

    // function getPrefMode() {
    //     if(!window.matchMedia) return;
    //     return window.matchMedia('(prefers-color-scheme: dark)').matches;
    //   }

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        // const userPreference = getPrefMode();
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

   

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);

    return (
        <button
            className="darkmode-btn"
            onClick={() =>
                setMode(mode => (mode === "dark" ? "light" : "dark"))
            }
        >
            <small> {mode === "dark" ? "Light" : "Dark"} Mode</small>
        </button>
    );
}

export default Darkmode;