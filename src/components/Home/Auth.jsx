import { X, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores/useAuthStore';

const Auth = ({ authUI, setAuthUI }) => {
  const [showModal, setShowModal] = useState(false);
  const [fadeClass, setFadeClass] = useState("opacity-0 scale-95");

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (authUI) {
      setShowModal(true);
      setTimeout(() => setFadeClass("opacity-100 scale-100"), 50);
    } else {
      setFadeClass("opacity-0 scale-95");
      const timeout = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [authUI]);

  const { login, signup, isLoggingIn, isSigningUp } = useAuthStore();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  console.log(formData.password)


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      login(formData);
    } else {
      signup(formData);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In Clicked");
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className={`bg-white text-gray-800 rounded-xl shadow-xl w-full max-w-md p-8 relative transform transition-all duration-300 ${fadeClass}`}>
        {/* Close Button */}
        <button
          onClick={() => setAuthUI(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-600 mt-1">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent font-[DM_Serif_Display] tracking-wide">
              Doculence
            </span>
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginMode && (
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            required
          />
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium py-3 rounded-lg hover:opacity-90 transition disabled:opacity-60"
          >
            {(isLoggingIn || isSigningUp) ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              isLoginMode ? "Sign In" : "Register"
            )}

            
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-4 text-sm">
          {isLoginMode ? (
            <>
              Don’t have an account?{" "}
              <button onClick={() => setIsLoginMode(false)} className="text-indigo-500 hover:underline">
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsLoginMode(true)} className="text-indigo-500 hover:underline">
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-xs text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Auth;
