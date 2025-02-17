import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = ({ role }) => {
    const navigate = useNavigate();
    const user = {
        home_route: "",
    };

    if (role == "seller") {
        user.home_route = "/seller";
    }

    console.log("role===", role);
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            backgroundColor: '#f0f2f5',
            fontFamily: 'Arial, sans-serif'
        }}>
            <img
                src="https://via.placeholder.com/150?text=Error+404"
                alt="Error Image"
                style={{ width: '150px', height: 'auto', marginBottom: '20px' }}
            />
            <h1 style={{ color: 'red', margin: '20px 0' }}>404 - Page Not Found!</h1>
            <button onClick={() => navigate(user.home_route)}
                style={{
                    padding: '12px 24px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
            >
                Navigate to Home
            </button>
        </div>
    );
};
