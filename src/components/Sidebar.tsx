
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  BookOpen, 
  HelpCircle, 
  Users, 
  BarChart3, 
  Upload, 
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Sidebar = ({ role = 'student' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Physics 101');
  const navigate = useNavigate();

  const courses = ['Physics 101', 'Chemistry 201', 'Mathematics 301'];
  
  const mostAskedQuestions = [
    "What is quantum entanglement?",
    "How does Schrödinger's equation work?",
    "What are the applications of quantum mechanics?",
    "Explain wave-particle duality",
    "What is the uncertainty principle?"
  ];

  const studentMenuItems = [
    { icon: MessageCircle, label: 'Chat History', active: true },
    { icon: BookOpen, label: 'Course Materials' },
    { icon: HelpCircle, label: 'Help & Support' }
  ];

  const professorMenuItems = [
    { icon: BarChart3, label: 'Analytics', active: true },
    { icon: MessageSquare, label: 'Chat Management' },
    { icon: Upload, label: 'Upload Content' },
    { icon: Users, label: 'Student Feedback' }
  ];

  const menuItems = role === 'student' ? studentMenuItems : professorMenuItems;

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      <motion.div
        initial={false}
        animate={{ width: isCollapsed ? 64 : 256 }}
        className={`fixed left-0 top-0 h-full bg-white shadow-lg z-30 flex flex-col ${
          isCollapsed ? 'lg:translate-x-0' : 'lg:translate-x-0'
        } ${!isCollapsed ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center">
              <img 
                src="/AlphaMatter/lovable-uploads/ee34ecb0-98ab-4495-a2f7-0445311ee258.png" 
                alt="AlphaMatter"
                className="h-8 w-8 mr-3"
              />
              <span className="font-bold text-gray-900">AlphaMatter</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!isCollapsed && (
            <>
              {/* Course Selector */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Current Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#db4d1a] focus:border-transparent"
                  >
                    {courses.map(course => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </CardContent>
              </Card>

              {/* Menu Items */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Menu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {menuItems.map((item) => (
                    <Button
                      key={item.label}
                      variant={item.active ? "default" : "ghost"}
                      className={`w-full justify-start text-sm ${
                        item.active ? 'bg-[#db4d1a] hover:bg-[#c44217] text-white' : ''
                      }`}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Most Asked Questions (Student only) */}
              {role === 'student' && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Most Asked</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {mostAskedQuestions.slice(0, 3).map((question, index) => (
                        <button
                          key={index}
                          className="w-full text-left text-xs text-gray-600 hover:text-[#db4d1a] p-2 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {/* Collapsed Menu */}
          {isCollapsed && (
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  size="sm"
                  className={`w-full p-2 ${
                    item.active ? 'bg-[#db4d1a] hover:bg-[#c44217] text-white' : ''
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t space-y-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => navigate('/')}
          >
            <Home className="mr-3 h-4 w-4" />
            {!isCollapsed && 'Home'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
          >
            <Settings className="mr-3 h-4 w-4" />
            {!isCollapsed && 'Settings'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => navigate('/auth')}
          >
            <LogOut className="mr-3 h-4 w-4" />
            {!isCollapsed && 'Sign Out'}
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
