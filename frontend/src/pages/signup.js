import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Capture query params
import "./signup.css";

const Signup = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("access_token"); // Get token from URL

    if (accessToken) {
      sendTokenToBackend(accessToken);
    }
  }, [searchParams]);

  const handleGoogleSignIn = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/google");
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Google sign-in page
      } else {
        console.error("Failed to get auth URL");
      }
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  const sendTokenToBackend = async (token) => {
    try {
        console.log("📤 Sending Token to Backend:", token);

        const response = await fetch("http://localhost:5000/auth/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();
        console.log("✅ Backend Response:", data);
    } catch (error) {
        console.error("❌ Error sending token to backend:", error);
    }
};


  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create an Account</h2>
          <p>Get started with our platform</p>
        </div>

        <div className="social-logins">
          <button className="google-button" onClick={handleGoogleSignIn}>
            <div className="google-icon"></div>
            <span>Student Sign up with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
