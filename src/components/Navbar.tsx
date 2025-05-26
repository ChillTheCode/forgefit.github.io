import React, { useState } from "react";
import { Dumbbell, Bell, User, Menu, X, Star, Trophy, Calendar } from "lucide-react";

const GymNavbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setCurrentPage(path);
    setIsMobileMenuOpen(false);
  };

  const handleProfile = () => {
    // Simulate checking authentication
    const isLoggedIn = Math.random() > 0.5; // Random for demo
    if (isLoggedIn) {
      handleNavigation("/profile");
    } else {
      handleNavigation("/login");
    }
  };

  const handleNotificationClick = () => {
    toggleModal();
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/membership", label: "Membership" },
    { path: "/classes", label: "Classes" },
    { path: "/trainers", label: "Trainers" },
    { path: "/schedule", label: "Schedule" },
  ];

  return (
    <>
      <nav className="w-full h-20 flex items-center justify-between px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-2xl border-b border-gray-700 relative z-50">
        {/* Logo Section */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => handleNavigation("/")}
        >
          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300">
            <Dumbbell className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-red-300 transition-all duration-300">
            FitZone Pro
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === item.path
                  ? "text-orange-400 bg-gray-800/50"
                  : "text-gray-300 hover:text-orange-400 hover:bg-gray-800/30"
              }`}
            >
              {item.label}
              {currentPage === item.path && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Join Now Button - Desktop */}
          <button
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => handleNavigation("/register")}
          >
            Join Now
          </button>

          {/* Notifications */}
          <button 
            className="relative p-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:bg-gray-800/30 rounded-full" 
            onClick={handleNotificationClick}
          >
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse">
              3
            </span>
          </button>

          {/* Profile */}
          <button
            onClick={handleProfile}
            className="p-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:bg-gray-800/30 rounded-full"
          >
            <User size={24} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-2xl font-medium transition-all duration-300 ${
                  currentPage === item.path
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              onClick={() => handleNavigation("/register")}
            >
              Join Now
            </button>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={toggleModal}
          ></div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 w-96 max-w-md mx-4 relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Bell className="mr-3 text-orange-400" size={24} />
                Notifications
              </h2>
              <button
                onClick={toggleModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4 max-h-80 overflow-y-auto">
              <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg">
                <div className="flex items-start">
                  <Trophy className="text-orange-400 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">New Achievement Unlocked!</p>
                    <p className="text-sm text-gray-300 mt-1">You've completed 10 workouts this month</p>
                    <p className="text-xs text-orange-400 mt-1">2 minutes ago</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg">
                <div className="flex items-start">
                  <Calendar className="text-blue-400 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Class Reminder</p>
                    <p className="text-sm text-gray-300 mt-1">HIIT class starts in 30 minutes</p>
                    <p className="text-xs text-blue-400 mt-1">25 minutes ago</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg">
                <div className="flex items-start">
                  <Star className="text-green-400 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Weekly Goal Achieved</p>
                    <p className="text-sm text-gray-300 mt-1">You've hit your workout target for this week!</p>
                    <p className="text-xs text-green-400 mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                onClick={toggleModal}
              >
                Mark All Read
              </button>
              <button
                className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium"
                onClick={toggleModal}
              >
                View All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GymNavbar;