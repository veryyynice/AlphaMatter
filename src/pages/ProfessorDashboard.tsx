import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Upload,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  BookOpen,
  ArrowLeft,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/Sidebar";
import supabase from "../../utils/supabase";

interface UploadedFile {
  id: number;
  name: string;
  size: number;
  uploadTime: string;
}

interface Prompt {
  id: number;
  text: string;
  category: string;
  timestamp: string;
  aiSuggestion?: string;
}

type StudentQuestionRow = {
  id: number;
  question: string;
  chat_type: string | null;
  created_at: string;
  course_id?: string;
  student_id?: string;
  answered?: boolean;
};

const ProfessorDashboard = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [anonymousPrompts, setAnonymousPrompts] = useState<Prompt[]>([]);
  const [newPrompt, setNewPrompt] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data for charts
  const engagementData = [
    { day: "Mon", questions: 24, participation: 85 },
    { day: "Tue", questions: 18, participation: 78 },
    { day: "Wed", questions: 32, participation: 92 },
    { day: "Thu", questions: 28, participation: 88 },
    { day: "Fri", questions: 35, participation: 95 },
  ];

  const topicsData = [
    { name: "Quantum Mechanics", value: 35, color: "#db4d1a" },
    { name: "Wave Functions", value: 25, color: "#ff6b35" },
    { name: "Uncertainty Principle", value: 20, color: "#ffa500" },
    { name: "Entanglement", value: 20, color: "#ffcc80" },
  ];

  // Fetch prompts from Supabase
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const { data, error } = await supabase
          .from("student_questions")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        const prompts = (data as StudentQuestionRow[]).map((item) => ({
          id: item.id,
          text: item.question,
          category: item.chat_type || "General",
          timestamp: new Date(item.created_at).toLocaleString(),
          answered: item.answered,
        }));

        setAnonymousPrompts(prompts);
      } catch (error) {
        toast({
          title: "Error fetching prompts",
          description:
            error instanceof Error ? error.message : "Unknown error occurred",
          variant: "destructive",
        });
      }
    };

    fetchPrompts();
  }, [toast]);

  const handlePromptClick = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    // Simulate AI scheduling suggestion
    setTimeout(() => {
      setSelectedPrompt((prev) =>
        prev
          ? {
              ...prev,
              aiSuggestion:
                "AI suggests scheduling a review session on quantum superposition mathematics. Recommended time: Friday 2-3 PM based on student availability patterns.",
            }
          : null
      );
    }, 1000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prev) => [
      ...prev,
      ...files.map((file) => ({
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        uploadTime: new Date().toLocaleTimeString(),
      })),
    ]);
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/auth");
  };

  // Submit new prompt to Supabase
  const handlePromptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPrompt.trim()) return;

    try {
      const { data, error } = await supabase
        .from("student_questions")
        .insert([
          {
            question: newPrompt,
            chat_type: "General",
            answered: false,
          },
        ])
        .select();

      if (error) throw error;

      if (data && data[0]) {
        setAnonymousPrompts((prev) => [
          {
            id: data[0].id,
            text: data[0].question,
            category: data[0].chat_type || "General",
            timestamp: new Date(data[0].created_at).toLocaleString(),
            answered: data[0].answered,
          },
          ...prev,
        ]);

        setNewPrompt("");
        toast({
          title: "Success",
          description: "Your question has been submitted",
        });
      }
    } catch (error) {
      toast({
        title: "Error submitting question",
        description:
          error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="professor" />

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
              <h1 className="text-2xl font-bold text-gray-900">
                Professor Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  Physics 101 - Quantum Mechanics
                </span>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-blue-600">
                    45 Students Online
                  </span>
                </div>
              </div>

              {/* Account Management Widget */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:text-[#db4d1a]"
                >
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:text-[#db4d1a]"
                >
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
                    <CardTitle className="text-sm font-medium">
                      Total Questions
                    </CardTitle>
                    <MessageSquare className="h-4 w-4 text-[#db4d1a]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">137</div>
                    <p className="text-xs text-green-600">
                      +12% from last week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Average Engagement
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-[#db4d1a]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <p className="text-xs text-green-600">+5% from last week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Session Length
                    </CardTitle>
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
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-600">
                        Total Questions: {anonymousPrompts.length}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-600"
                        >
                          Filter
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-green-600"
                        >
                          Mark All Read
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {anonymousPrompts.map((prompt) => (
                        <motion.div
                          key={prompt.id}
                          whileHover={{ scale: 1.02 }}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedPrompt?.id === prompt.id
                              ? "bg-[#db4d1a]/10 border-[#db4d1a]"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => handlePromptClick(prompt)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  prompt.category === "Academic"
                                    ? "bg-blue-100 text-blue-800"
                                    : prompt.category === "Request"
                                    ? "bg-green-100 text-green-800"
                                    : prompt.category === "Feedback"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {prompt.category}
                              </span>
                              {prompt.answered && (
                                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                                  Answered
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-gray-500">
                              {prompt.timestamp}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">
                            {prompt.text}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-[#db4d1a] hover:bg-[#db4d1a]/10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle marking as answered
                                }}
                              >
                                {prompt.answered
                                  ? "Mark Unanswered"
                                  : "Mark Answered"}
                              </Button>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-gray-500 hover:text-red-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle hiding/archiving
                              }}
                            >
                              Archive
                            </Button>
                          </div>
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
                          <p className="text-sm text-gray-700">
                            {selectedPrompt.text}
                          </p>
                        </div>
                        {selectedPrompt.aiSuggestion ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-[#db4d1a]/10 border border-[#db4d1a] rounded-lg"
                          >
                            <h4 className="font-medium text-[#db4d1a] mb-2">
                              AI Recommendation:
                            </h4>
                            <p className="text-sm text-gray-700 mb-3">
                              {selectedPrompt.aiSuggestion}
                            </p>
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                className="bg-[#db4d1a] hover:bg-[#c44217] text-white"
                              >
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
                            <span className="ml-2 text-sm text-gray-600">
                              Analyzing prompt...
                            </span>
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
                      <p className="text-gray-600 mb-4">
                        Drag and drop files here, or click to select
                      </p>
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
                          <div
                            key={file.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024).toFixed(1)} KB •{" "}
                                {file.uploadTime}
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
                      {
                        rating: 5,
                        feedback:
                          "The interactive elements really help me understand complex concepts better.",
                        category: "Positive",
                      },
                      {
                        rating: 4,
                        feedback:
                          "Would love more practice problems to work through during class.",
                        category: "Suggestion",
                      },
                      {
                        rating: 3,
                        feedback:
                          "Sometimes the pace is too fast to take proper notes.",
                        category: "Improvement",
                      },
                      {
                        rating: 5,
                        feedback:
                          "The AI assistance is incredibly helpful for clarifying doubts.",
                        category: "Positive",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-lg ${
                                    i < item.rating
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                item.category === "Positive"
                                  ? "bg-green-100 text-green-800"
                                  : item.category === "Suggestion"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-orange-100 text-orange-800"
                              }`}
                            >
                              {item.category}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">
                            Anonymous
                          </span>
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
