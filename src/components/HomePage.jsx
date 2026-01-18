import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/analyze');
  };

  return (
    <>
        <div className="min-h-screen bg-gradient-to-br from-[#000028] to-[#000050] flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Document Review Assistant
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-10">
                    Streamline your document review process with intelligent analysis and insights
                </p>
                <button
                    onClick={handleGetStarted}
                    className="inline-block bg-white text-[#000028] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg cursor-pointer"
                >
                    Get Started
                </button>
            </div>
        </div>
        <footer className="bg-[#000028] text-blue-100 py-6 px-4 text-center">
            <p className="text-sm">&copy; 2026 Document Review Assistant. All rights reserved.</p>
        </footer>
    </>
  );
}

export default HomePage