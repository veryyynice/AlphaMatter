import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, TrendingUp, ChevronRight, Users, Brain, Zap, Mic, Upload, BarChart3, BookOpen, History, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageCircle,
      title: "Capture",
      description: "Real-time lecture transcription and AI-powered note-taking that never misses a moment."
    },
    {
      icon: PenTool,
      title: "Customize", 
      description: "Annotate with text, drawings, and media uploads. Make every lecture uniquely yours."
    },
    {
      icon: TrendingUp,
      title: "Engage",
      description: "Interactive Q&A, analytics, and AI suggestions that transform passive learning into active participation."
    }
  ];

  const studentFeatures = [
    {
      icon: Mic,
      title: "Live Transcription",
      description: "Real-time speech-to-text conversion with high accuracy across multiple languages."
    },
    {
      icon: MessageCircle,
      title: "AI Chat Assistant",
      description: "Ask questions and get instant AI-powered answers about lecture content."
    },
    {
      icon: History,
      title: "Chat History",
      description: "Access both general and private chat history across all your courses."
    },
    {
      icon: PenTool,
      title: "Smart Annotations",
      description: "Add text notes, drawings, and upload images or PDFs directly to lectures."
    },
    {
      icon: Upload,
      title: "Media Integration",
      description: "Seamlessly upload and annotate with images, documents, and multimedia content."
    },
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Organize content across multiple courses with intuitive navigation."
    }
  ];

  const professorFeatures = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into student engagement and learning patterns."
    },
    {
      icon: Brain,
      title: "AI Insights",
      description: "Get intelligent suggestions for improving lecture delivery and student engagement."
    },
    {
      icon: Upload,
      title: "Content Upload",
      description: "Upload lecture notes and materials to enhance AI-powered assistance."
    },
    {
      icon: MessageCircle,
      title: "Student Interaction",
      description: "Monitor and respond to student questions and feedback in real-time."
    },
    {
      icon: Users,
      title: "Class Management",
      description: "Manage multiple classes and track individual student progress."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor class performance and identify areas for improvement."
    }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Active Students" },
    { icon: Brain, value: "95%", label: "Engagement Rate" },
    { icon: Zap, value: "2.5x", label: "Better Retention" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="text-[#db4d1a] block">Learning Experience</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AlphaMatter brings AI-powered tools to every lecture, enabling real-time transcription, 
              smart annotations, and interactive engagement that makes learning more effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-[#db4d1a] hover:bg-[#c44217] text-white px-8 py-4 text-lg"
                onClick={() => navigate('/auth')}
              >
                Try AlphaMatter
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#db4d1a] text-[#db4d1a] hover:bg-[#db4d1a] hover:text-white px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-[#db4d1a] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AlphaMatter?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with intuitive design to create the ultimate learning companion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-100">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-12 w-12 text-[#db4d1a] mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Students
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to excel in your studies, from live transcription to AI-powered assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-[#db4d1a] mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professor Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Analytics for Professors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gain deep insights into student engagement and optimize your teaching with AI-powered analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-[#db4d1a] mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#db4d1a] to-[#ff6b35]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to revolutionize your learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professors who are already experiencing the future of education.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-[#db4d1a] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/auth')}
            >
              Get Started Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
