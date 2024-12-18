import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Laugh } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2"
          >
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-300">The Opinion Market for Memes</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Swipe 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500"> Funny or Fud</span>
            <br />Earn While You Meme
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Create templates, make memes, share opinions, and earn rewards. 
            The first decentralized platform where meme creativity meets market mechanics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-green-600 transition-colors">
              Start Memeing
              <Laugh className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-900/70 transition-colors">
              How It Works
            </button>
          </motion.div>

          {/* Role Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-12"
          >
            {[
              { title: 'Template Creators', description: 'Create and monetize viral meme templates' },
              { title: 'Meme Makers', description: 'Add your spin to templates and earn from engagement' },
              { title: 'Opinion Givers', description: 'Swipe, vote, and earn from your meme takes' }
            ].map((role, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-green-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                <p className="text-sm text-gray-400">{role.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;