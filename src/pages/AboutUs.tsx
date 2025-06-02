
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former Stanford professor with 15+ years in educational technology."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      description: "AI researcher and former Google engineer specializing in real-time systems."
    },
    {
      name: "Dr. Emily Johnson",
      role: "Head of Product",
      description: "Educational psychologist focused on learning engagement and retention."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of educational technology to create better learning experiences."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Education should be accessible to everyone, regardless of learning style or background."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our platform and user experience."
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe in empowering both students and educators to reach their full potential."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AlphaMatter
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're revolutionizing education through AI-powered tools that make learning more engaging, 
              interactive, and effective for students and professors worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                AlphaMatter was founded with a simple yet powerful vision: to transform traditional 
                lectures into dynamic, interactive learning experiences that adapt to every student's needs.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology should enhance human connection in education, not replace it. 
                Our AI-powered platform empowers educators while giving students the tools they need to 
                actively participate and succeed in their learning journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#db4d1a]/10 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why We Started</h3>
              <p className="text-gray-600">
                "After years of watching brilliant minds struggle in traditional lecture halls, 
                we knew there had to be a better way. AlphaMatter is our answer to making every 
                lecture as engaging as a one-on-one conversation with the world's best teacher."
              </p>
              <p className="text-sm text-gray-500 mt-4">- Dr. Sarah Chen, CEO</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-[#db4d1a] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The innovators behind AlphaMatter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-[#db4d1a] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
