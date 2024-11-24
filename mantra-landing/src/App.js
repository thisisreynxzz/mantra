import React from 'react';
import { ChevronRight, Navigation, Eye, MapPin, MessageSquare } from 'lucide-react';
import './index.css';
import mantraThm from './mantra-thm.png';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-emerald-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">MANTRA</h1>
              <p className="text-xl md:text-2xl mb-8">Your AI Navigation Assistant for Public Transportation</p>
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-50 transition-colors">
                Get More Info <ChevronRight />
              </button>
            </div>
            <div className="mt-8 md:mt-0">
              <img 
                src={mantraThm} 
                alt="MANTRA app interface showing navigation assistance" 
                className="rounded-lg shadow-xl mx-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Powered by Gen AI</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Eye className="w-8 h-8 text-emerald-600" />}
            title="Real-time Vision"
            description="MobileNetV2 and Gemini AI work together to detect obstacles and analyze your surroundings"
          />
          <FeatureCard
            icon={<Navigation className="w-8 h-8 text-emerald-600" />}
            title="Smart Navigation"
            description="Precise indoor navigation with real-time distance calculation and Google Maps integration"
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-emerald-600" />}
            title="Voice Assistant"
            description='Simply say "MANTRA" to get immediate assistance with your journey'
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Simple to Use</h2>
          <div className="bg-emerald-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Step number="1" title="Activate">
                Say "MANTRA" to start
              </Step>
              <Step number="2" title="Navigate">
                Share your destination
              </Step>
              <Step number="3" title="Travel">
                Follow voice guidance
              </Step>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Start Your Journey</h2>
          <p className="text-lg mb-8 text-slate-600">Learn how MANTRA can help make public transportation more accessible</p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-emerald-700 transition-colors">
            Get More Info <ChevronRight />
          </button>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2024 MANTRA by Bring Me The Hackathon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Step = ({ number, title, children }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

export default LandingPage;