
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, TrendingUp, Users, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Anonymous = () => {
  const navigate = useNavigate();
  const [viewerCount, setViewerCount] = useState(23);

  // Simulate viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const pastQA = [
    {
      question: "What is the difference between classical and quantum mechanics?",
      answer: "Classical mechanics deals with macroscopic objects and predictable behaviors, while quantum mechanics describes the probabilistic nature of particles at the atomic and subatomic level.",
      timestamp: "2 hours ago",
      upvotes: 15
    },
    {
      question: "How does quantum entanglement work?",
      answer: "Quantum entanglement occurs when particles become interconnected in such a way that the quantum state of each particle cannot be described independently, even when separated by large distances.",
      timestamp: "3 hours ago",
      upvotes: 12
    },
    {
      question: "What are the practical applications of quantum computing?",
      answer: "Quantum computing has potential applications in cryptography, drug discovery, financial modeling, optimization problems, and artificial intelligence.",
      timestamp: "1 day ago",
      upvotes: 8
    }
  ];

  const lectureStats = [
    { label: "Questions Asked", value: "137", change: "+12%" },
    { label: "Average Engagement", value: "87%", change: "+5%" },
    { label: "Students Participated", value: "45/52", change: "+3%" }
  ];

  const suggestedQuestions = [
    "What is wave-particle duality?",
    "How does the uncertainty principle work?",
    "What is Schrödinger's equation?",
    "Explain quantum superposition",
    "What are quantum states?"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ee34ecb0-98ab-4495-a2f7-0445311ee258.png" 
                alt="AlphaMatter"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gray-900">AlphaMatter</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{viewerCount} viewers</span>
            </div>
            <Button 
              className="bg-[#db4d1a] hover:bg-[#c44217] text-white"
              onClick={() => navigate('/auth')}
            >
              Join Discussion
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        {/* Course Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Physics 101 - Quantum Mechanics
                  </h1>
                  <p className="text-gray-600">
                    Exploring the fundamental principles of quantum physics and their applications
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Last Updated</div>
                  <div className="font-medium">2 hours ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          {lectureStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <span className="text-sm text-green-600">{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="qa" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="qa">Past Q&A</TabsTrigger>
              <TabsTrigger value="suggestions">Suggested Questions</TabsTrigger>
            </TabsList>

            <TabsContent value="qa" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-[#db4d1a]" />
                    Previous Questions & Answers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pastQA.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border-l-4 border-[#db4d1a] pl-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{item.question}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <TrendingUp className="h-4 w-4" />
                            <span>{item.upvotes}</span>
                            <span>•</span>
                            <span>{item.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="suggestions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Questions to Ask</CardTitle>
                  <p className="text-sm text-gray-600">
                    Sign in to ask these questions and participate in the discussion
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {suggestedQuestions.map((question, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => navigate('/auth')}
                      >
                        <p className="text-sm text-gray-700">{question}</p>
                        <div className="mt-2 text-xs text-[#db4d1a]">Click to ask →</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-[#db4d1a]" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Want to participate?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join AlphaMatter to ask questions, get AI assistance, and engage with lectures in real-time.
                  </p>
                  <Button 
                    className="bg-[#db4d1a] hover:bg-[#c44217] text-white"
                    onClick={() => navigate('/auth')}
                  >
                    Sign Up Now
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Anonymous;
