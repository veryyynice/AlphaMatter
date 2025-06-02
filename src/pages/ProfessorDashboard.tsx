
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Upload, MessageSquare, Users, TrendingUp, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';

const ProfessorDashboard = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Mock data for charts
  const engagementData = [
    { day: 'Mon', questions: 24, participation: 85 },
    { day: 'Tue', questions: 18, participation: 78 },
    { day: 'Wed', questions: 32, participation: 92 },
    { day: 'Thu', questions: 28, participation: 88 },
    { day: 'Fri', questions: 35, participation: 95 }
  ];

  const topicsData = [
    { name: 'Quantum Mechanics', value: 35, color: '#db4d1a' },
    { name: 'Wave Functions', value: 25, color: '#ff6b35' },
    { name: 'Uncertainty Principle', value: 20, color: '#ffa500' },
    { name: 'Entanglement', value: 20, color: '#ffcc80' }
  ];

  const anonymousPrompts = [
    { id: 1, text: "I'm struggling with the math behind quantum superposition", category: "Academic", timestamp: "2 hours ago" },
    { id: 2, text: "Could we have more practice problems on wave-particle duality?", category: "Request", timestamp: "3 hours ago" },
    { id: 3, text: "The pace feels too fast for understanding complex concepts", category: "Feedback", timestamp: "5 hours ago" },
    { id: 4, text: "More visual demonstrations would help with abstract concepts", category: "Suggestion", timestamp: "1 day ago" }
  ];

  const handlePromptClick = (prompt) => {
    setSelectedPrompt(prompt);
    // Simulate AI scheduling suggestion
    setTimeout(() => {
      setSelectedPrompt(prev => ({
        ...prev,
        aiSuggestion: "AI suggests scheduling a review session on quantum superposition mathematics. Recommended time: Friday 2-3 PM based on student availability patterns."
      }));
    }, 1000);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      uploadTime: new Date().toLocaleTimeString()
    }))]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="professor" />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Professor Dashboard</h1>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Physics 101 - Quantum Mechanics</span>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-blue-600">45 Students Online</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-4">
          <Tabs defaultValue="analytics" className="h-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="chat">Chat Management</TabsTrigger>
              <TabsTrigger value="upload">Upload Content</TabsTrigger>
              <TabsTrigger value="feedback">Student Feedback</TabsTrigger>
            </TabsList>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Questions</CardTitle>
                    <MessageSquare className="h-4 w-4 text-[#db4d1a]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">137</div>
                    <p className="text-xs text-green-600">+12% from last week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Engagement</CardTitle>
                    <TrendingUp className="h-4 w-4 text-[#db4d1a]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <p className="text-xs text-green-600">+5% from last week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Session Length</CardTitle>
                    <Clock className="h-4 w-4 text-[#db4d1a]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">52 min</div>
                    <p className="text-xs text-gray-600">Average per lecture</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Engagement Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={engagementData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="questions" fill="#db4d1a" />
                        <Bar dataKey="participation" fill="#ff6b35" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Most Discussed Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={topicsData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {topicsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Chat Management Tab */}
            <TabsContent value="chat" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Anonymous Student Prompts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {anonymousPrompts.map((prompt) => (
                        <motion.div
                          key={prompt.id}
                          whileHover={{ scale: 1.02 }}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedPrompt?.id === prompt.id ? 'bg-[#db4d1a]/10 border-[#db4d1a]' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => handlePromptClick(prompt)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              prompt.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                              prompt.category === 'Request' ? 'bg-green-100 text-green-800' :
                              prompt.category === 'Feedback' ? 'bg-orange-100 text-orange-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {prompt.category}
                            </span>
                            <span className="text-xs text-gray-500">{prompt.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-700">{prompt.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Schedule Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedPrompt ? (
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Selected Prompt:</h4>
                          <p className="text-sm text-gray-700">{selectedPrompt.text}</p>
                        </div>
                        {selectedPrompt.aiSuggestion ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-[#db4d1a]/10 border border-[#db4d1a] rounded-lg"
                          >
                            <h4 className="font-medium text-[#db4d1a] mb-2">AI Recommendation:</h4>
                            <p className="text-sm text-gray-700 mb-3">{selectedPrompt.aiSuggestion}</p>
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-[#db4d1a] hover:bg-[#c44217] text-white">
                                Schedule Session
                              </Button>
                              <Button size="sm" variant="outline">
                                Get More Options
                              </Button>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="flex items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#db4d1a]"></div>
                            <span className="ml-2 text-sm text-gray-600">Analyzing prompt...</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p>Select a prompt to see AI suggestions</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Upload Content Tab */}
            <TabsContent value="upload" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Upload className="mr-2 h-5 w-5 text-[#db4d1a]" />
                      Upload Lecture Materials
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600 mb-4">Drag and drop files here, or click to select</p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                      />
                      <label htmlFor="file-upload">
                        <Button className="bg-[#db4d1a] hover:bg-[#c44217] text-white">
                          Choose Files
                        </Button>
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        Supported formats: PDF, DOC, DOCX, PPT, PPTX
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Uploaded Files</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {uploadedFiles.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-50" />
                          <p>No files uploaded yet</p>
                        </div>
                      ) : (
                        uploadedFiles.map((file) => (
                          <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024).toFixed(1)} KB • {file.uploadTime}
                              </p>
                            </div>
                            <Button size="sm" variant="outline">
                              Process
                            </Button>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Student Feedback Tab */}
            <TabsContent value="feedback" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-[#db4d1a]" />
                    Anonymous Student Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { rating: 5, feedback: "The interactive elements really help me understand complex concepts better.", category: "Positive" },
                      { rating: 4, feedback: "Would love more practice problems to work through during class.", category: "Suggestion" },
                      { rating: 3, feedback: "Sometimes the pace is too fast to take proper notes.", category: "Improvement" },
                      { rating: 5, feedback: "The AI assistance is incredibly helpful for clarifying doubts.", category: "Positive" }
                    ].map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-lg ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.category === 'Positive' ? 'bg-green-100 text-green-800' :
                              item.category === 'Suggestion' ? 'bg-blue-100 text-blue-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {item.category}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">Anonymous</span>
                        </div>
                        <p className="text-sm text-gray-700">{item.feedback}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
