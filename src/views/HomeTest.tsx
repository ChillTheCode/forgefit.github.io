import { useNavigate, useLocation } from "react-router-dom";
import {
  Dumbbell,
  Users,
  Calendar,
  Trophy,
  Heart,
  Zap,
  Target,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";

const GymLanding = () => {
  const [userType, setUserType] = useState<string>("member");
  const [membershipLevel, setMembershipLevel] = useState<string>("basic");

  useEffect(() => {
    // Simulate user data loading
    const timer = setTimeout(() => {
      setUserType("premium-member");
      setMembershipLevel("premium");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: "/", label: "Home" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        {/*
          Removed 'container mx-auto' from here to make the background full width.
          The padding for content is now applied to the inner div.
        */}
        <div className="relative py-20 md:py-32">
          {/*
            Added 'container mx-auto px-6' here to center the content and provide padding.
          */}
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-500/20 rounded-full backdrop-blur-sm">
                <Dumbbell className="text-orange-400" size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join FitZone Pro and discover the ultimate fitness experience with state-of-the-art equipment, expert trainers, and a community that motivates you to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Start Your Journey
              </button>
              <button className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                View Membership Plans
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Why Choose FitZone Pro?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience fitness like never before with our premium facilities and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
                High-Tech Equipment
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                State-of-the-art machines with smart tracking technology to monitor your progress in real-time.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                Expert Trainers
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Certified personal trainers who create customized workout plans tailored to your fitness goals.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                Flexible Classes
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                100+ group classes weekly including HIIT, Yoga, Pilates, and specialized training programs.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                Wellness Programs
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Comprehensive wellness approach including nutrition counseling, recovery therapy, and mental health support.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                Achievement Tracking
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Advanced progress tracking with badges, challenges, and community leaderboards to keep you motivated.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500/50">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                Goal-Oriented Training
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Personalized training programs designed to help you achieve specific goals, from weight loss to strength building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible membership options designed to fit your lifestyle and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <div className="text-4xl font-bold text-orange-400 mb-2">$29</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Access to gym equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Basic fitness assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Access to locker rooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Mobile app access</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-500 transition">
                Choose Basic
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-2xl border-2 border-orange-400 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold text-white mb-2">$59</div>
                <div className="text-orange-100">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-300 mr-3" size={20} />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-300 mr-3" size={20} />
                  <span>Unlimited group classes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-300 mr-3" size={20} />
                  <span>Personal trainer sessions (2/month)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-300 mr-3" size={20} />
                  <span>Nutrition consultation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-300 mr-3" size={20} />
                  <span>Priority booking</span>
                </li>
              </ul>
              <button className="w-full bg-white text-orange-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Choose Premium
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Elite</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Unlimited personal training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Advanced body composition analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>Recovery & spa services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span>VIP member events</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-500 transition">
                Choose Elite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real transformations from our FitZone Pro community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "FitZone Pro transformed not just my body, but my entire mindset. The trainers are incredible and the community is so supportive!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-white">SA</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Anderson</div>
                  <div className="text-gray-400 text-sm">Lost 30 lbs in 4 months</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The high-tech equipment and personalized training programs helped me achieve strength goals I never thought possible."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-white">MJ</span>
                </div>
                <div>
                  <div className="font-semibold">Mike Johnson</div>
                  <div className="text-gray-400 text-sm">Increased bench press by 50%</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The variety of classes and flexible scheduling makes it easy to stay consistent. Best investment I've made for my health!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-white">EC</span>
                </div>
                <div>
                  <div className="font-semibold">Emily Chen</div>
                  <div className="text-gray-400 text-sm">Member for 2 years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Dumbbell className="text-orange-400 mr-3" size={32} />
                <span className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  FitZone Pro
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Your ultimate fitness destination with state-of-the-art facilities and expert guidance to help you achieve your goals.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                  <span className="text-sm font-bold">i</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Membership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Classes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Personal Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Nutrition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Programs</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Strength Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Cardio Classes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Yoga & Pilates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">HIIT Workouts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Recovery Programs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <MapPin className="mr-3 text-orange-400" size={18} />
                  123 Fitness Street, Gym District
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="mr-3 text-orange-400" size={18} />
                  (555) 123-FITZONE
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="mr-3 text-orange-400" size={18} />
                  info@fitzonepro.com
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                <h4 className="font-semibold mb-2 text-orange-400">Gym Hours</h4>
                <p className="text-sm text-gray-300">Mon-Fri: 5:00 AM - 11:00 PM</p>
                <p className="text-sm text-gray-300">Sat-Sun: 6:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} FitZone Pro. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GymLanding;