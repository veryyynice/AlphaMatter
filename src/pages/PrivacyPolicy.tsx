
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Account information (name, email, educational institution)",
        "Lecture recordings and transcripts (when you choose to record)",
        "Chat messages and annotations",
        "Usage analytics to improve our service",
        "Technical information (device type, browser, IP address)"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and improve AlphaMatter services",
        "Generate AI-powered insights and suggestions",
        "Enable collaboration between students and professors",
        "Send important updates about your account",
        "Analyze usage patterns to enhance user experience"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "End-to-end encryption for all sensitive data",
        "Secure cloud storage with industry-standard protocols",
        "Regular security audits and penetration testing",
        "Limited access controls for our team members",
        "Automatic data backup and disaster recovery"
      ]
    },
    {
      icon: Users,
      title: "Your Rights",
      content: [
        "Access, update, or delete your personal information",
        "Download your data in a portable format",
        "Control sharing settings for your content",
        "Opt-out of non-essential communications",
        "Request account deactivation at any time"
      ]
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your privacy is fundamental to everything we do. Here's how we protect and handle your data.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 15, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="mr-3 h-6 w-6 text-[#db4d1a]" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#db4d1a] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Details</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h3>
                <p className="text-gray-600 mb-4">
                  We retain your data only as long as necessary to provide our services and comply with legal obligations. 
                  Lecture recordings and transcripts are kept for the duration of your account plus 30 days after deletion.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h3>
                <p className="text-gray-600 mb-4">
                  We use trusted third-party services for analytics, hosting, and AI processing. These partners are 
                  bound by strict data protection agreements and cannot use your data for their own purposes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or how we handle your data, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">Email: privacy@alphamatter.com</p>
                  <p className="text-gray-700">Address: 123 Education Ave, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
