import React from 'react';
import { Target, Zap, Users, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Target className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Creator360 Content Empire</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ระบบสร้างเนื้อหาด้วย AI เพื่อสร้างรายได้และตัวตน
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            AI-Powered Content Creation System for Revenue Generation and Personal Branding
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            เริ่มต้นใช้งาน
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">AI Content Generation</h3>
            </div>
            <p className="text-gray-600">
              สร้างเนื้อหาคุณภาพสูงด้วยปัญญาประดิษฐ์ที่ทันสมัย
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Audience Building</h3>
            </div>
            <p className="text-gray-600">
              สร้างและดูแลชุมชนผู้ติดตามที่มีคุณภาพ
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Revenue Growth</h3>
            </div>
            <p className="text-gray-600">
              เพิ่มรายได้จากการสร้างเนื้อหาอย่างยั่งยืน
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            พร้อมเริ่มต้นสร้างอาณาจักรเนื้อหาของคุณหรือยัง?
          </h3>
          <p className="text-gray-600 mb-6">
            เข้าร่วมกับผู้สร้างเนื้อหาหลายพันคนที่ใช้ระบบของเราเพื่อสร้างรายได้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              เริ่มใช้งานฟรี
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Creator360 Content Empire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;