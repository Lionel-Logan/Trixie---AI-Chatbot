import React from "react";

const Sample = () => {
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

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Sample;