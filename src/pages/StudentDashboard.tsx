import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Mic, MicOff, Upload, MessageCircle, Users, BookOpen, HelpCircle, ArrowLeft, User, Settings, LogOut, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Sidebar from '@/components/Sidebar';

const StudentDashboard = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcriptText, setTranscriptText] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState('general');
  const [showChatHistory, setShowChatHistory] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock chat history data
  const chatHistory = {
    general: [
      { id: 1, text: "What is quantum entanglement?", sender: 'student', timestamp: '10:30 AM', date: '2024-01-15' },
      { id: 2, text: "Quantum entanglement is a phenomenon where particles become interconnected...", sender: 'ai', timestamp: '10:31 AM', date: '2024-01-15' },
      { id: 3, text: "Can you explain Schrödinger's equation?", sender: 'student', timestamp: '2:45 PM', date: '2024-01-14' },
      { id: 4, text: "Schrödinger's equation describes how the quantum state of a physical system changes over time...", sender: 'ai', timestamp: '2:46 PM', date: '2024-01-14' },
    ],
    private: [
      { id: 1, text: "Note: Review quantum mechanics chapter 3", sender: 'student', timestamp: '11:15 AM', date: '2024-01-15' },
      { id: 2, text: "Personal reminder: Ask professor about uncertainty principle", sender: 'student', timestamp: '3:20 PM', date: '2024-01-14' },
      { id: 3, text: "Study group meeting at 4 PM tomorrow", sender: 'student', timestamp: '1:30 PM', date: '2024-01-14' },
    ]
  };

  // Simulate live transcript
  useEffect(() => {
    const transcriptUpdates = [
      "Today we'll be discussing quantum mechanics and its applications...",
      "The wave-particle duality is one of the fundamental concepts in quantum physics...",
      "Schrödinger's equation describes how the quantum state of a physical system changes over time...",
      "The uncertainty principle states that we cannot simultaneously know the exact position and momentum of a particle...",
      "Quantum entanglement is a phenomenon where particles become interconnected..."
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < transcriptUpdates.length) {
        setTranscriptText(prev => prev + ' ' + transcriptUpdates[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mock data
  const courses = ['Physics 101', 'Chemistry 201', 'Mathematics 301'];
  const mostAskedQuestions = [
    "What is the difference between classical and quantum mechanics?",
    "How do we calculate the probability of finding a particle?",
    "What are the practical applications of quantum computing?"
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: 'student',
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: "That's a great question! Let me help you understand this concept better...",
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString()
        };
        setChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/auth');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Physics 101 - Quantum Mechanics</span>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Live</span>
              </div>
              
              {/* Account Management Widget */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowChatHistory(!showChatHistory)}
                  className="text-gray-600 hover:text-[#db4d1a]"
                >
                  <History className="h-4 w-4 mr-2" />
                  History
                </Button>
                <Button variant="outline" size="sm" className="text-gray-600 hover:text-[#db4d1a]">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button variant="outline" size="sm" className="text-gray-600 hover:text-[#db4d1a]">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          {/* Live Transcript */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mic className="mr-2 h-5 w-5 text-[#db4d1a]" />
                  Live Transcript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto bg-gray-50 p-4 rounded-md mb-4">
                  <p className="text-gray-700 leading-relaxed">{transcriptText}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={isRecording ? "destructive" : "default"}
                    size="sm"
                    onClick={() => setIsRecording(!isRecording)}
                    className={isRecording ? '' : 'bg-[#db4d1a] hover:bg-[#c44217]'}
                  >
                    {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    {isRecording ? 'Stop' : 'Record'}
                  </Button>
                  <span className="text-sm text-gray-600">
                    {isRecording ? 'Recording...' : 'Click to start recording'}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Chat Area or History */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-[#db4d1a]" />
                    {showChatHistory ? 'Chat History' : 'AI Assistant'}
                  </div>
                  {showChatHistory && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowChatHistory(false)}
                    >
                      Back to Chat
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {showChatHistory ? (
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="general">General History</TabsTrigger>
                      <TabsTrigger value="private">Private History</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general" className="flex-1 flex flex-col">
                      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-md mb-4 max-h-72">
                        {chatHistory.general.map((message) => (
                          <div key={message.id} className={`mb-3 ${message.sender === 'student' ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block p-3 rounded-lg max-w-xs ${
                              message.sender === 'student' 
                                ? 'bg-[#db4d1a] text-white' 
                                : 'bg-white text-gray-700 border'
                            }`}>
                              <p className="text-sm">{message.text}</p>
                              <span className="text-xs opacity-70">{message.timestamp} • {message.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="private" className="flex-1 flex flex-col">
                      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-md mb-4 max-h-72">
                        {chatHistory.private.map((message) => (
                          <div key={message.id} className="mb-3 text-right">
                            <div className="inline-block p-3 rounded-lg max-w-xs bg-blue-100 text-blue-800 border border-blue-200">
                              <p className="text-sm">{message.text}</p>
                              <span className="text-xs opacity-70">{message.timestamp} • {message.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="general">General Chat</TabsTrigger>
                      <TabsTrigger value="private">Private Notes</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general" className="flex-1 flex flex-col">
                      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-md mb-4 max-h-48">
                        {chatMessages.length === 0 ? (
                          <p className="text-gray-500 text-center">Start a conversation with the AI assistant...</p>
                        ) : (
                          chatMessages.map((message) => (
                            <div key={message.id} className={`mb-3 ${message.sender === 'student' ? 'text-right' : 'text-left'}`}>
                              <div className={`inline-block p-3 rounded-lg max-w-xs ${
                                message.sender === 'student' 
                                  ? 'bg-[#db4d1a] text-white' 
                                  : 'bg-white text-gray-700 border'
                              }`}>
                                <p className="text-sm">{message.text}</p>
                                <span className="text-xs opacity-70">{message.timestamp}</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="private" className="flex-1 flex flex-col">
                      <div className="flex-1 bg-gray-50 p-4 rounded-md mb-4 max-h-48">
                        <p className="text-gray-500 text-center">Your private notes will appear here...</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                )}

                {!showChatHistory && (
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Ask a question or make a note..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button size="sm" variant="outline">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Upload className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={handleSendMessage}
                      className="bg-[#db4d1a] hover:bg-[#c44217] text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Annotation Tools */}
        <div className="p-4 bg-white border-t">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Quick Actions:</span>
            <Button size="sm" variant="outline">
              <HelpCircle className="mr-2 h-4 w-4" />
              Ask Question
            </Button>
            <Button size="sm" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
            <Button size="sm" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Take Note
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
