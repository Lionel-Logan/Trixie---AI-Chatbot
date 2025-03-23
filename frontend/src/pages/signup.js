import React from 'react';
import { useNavigate } from 'react-router-dom';

// Google logo as inline SVG component
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);

const Signup = () => {
  const navigate = useNavigate();
  
  // Trixie color palette
  const colors = {
    primary: '#6366F1', // Indigo
    secondary: '#F97316', // Orange
    background: '#F9FAFB',
    text: '#1F2937',
    lightGray: '#E5E7EB',
    white: '#FFFFFF'
  };
  
  const handleGoogleSignup = (isAdmin = false) => {
    // Implement Google signup logic here
    console.log('Signing up with Google', isAdmin ? 'as admin' : 'as regular user');
    // After successful signup, redirect to appropriate page
    // navigate(isAdmin ? '/admin/dashboard' : '/dashboard');
  };
  
  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log('Forgot password functionality');
    // navigate('/reset-password');
  };
  
  return (
    <div 
      style={{ 
        backgroundColor: colors.background,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div 
        style={{ 
          backgroundColor: colors.white,
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          width: '100%',
          maxWidth: '480px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: colors.text,
            marginBottom: '16px'
          }}>
            Join Trixie
          </h1>
          <p style={{ color: colors.text, opacity: 0.8 }}>
            Sign up to start your journey with Trixie
          </p>
        </div>
        
        {/* Google Sign-up Buttons */}
        <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button 
            onClick={() => handleGoogleSignup(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '14px',
              backgroundColor: colors.white,
              color: colors.text,
              border: `1px solid ${colors.lightGray}`,
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              width: '100%'
            }}
          >
            <GoogleIcon />
            <span>Sign up with Google</span>
          </button>
          
          <button 
            onClick={() => handleGoogleSignup(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '14px',
              backgroundColor: colors.text,
              color: colors.white,
              border: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              width: '100%'
            }}
          >
            <GoogleIcon />
            <span>Admin Sign up with Google</span>
          </button>
        </div>
        
        {/* Forgot Password & Login */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          marginTop: '24px',
          fontSize: '14px'
        }}>
          <button 
            onClick={handleForgotPassword}
            style={{
              background: 'none',
              border: 'none',
              color: colors.primary,
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            Forgot password?
          </button>
          
          <div>
            Already a user?{' '}
            <button 
              onClick={() => navigate('/login')}
              style={{
                background: 'none',
                border: 'none',
                color: colors.primary,
                cursor: 'pointer',
                fontWeight: '500',
                padding: '4px'
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;