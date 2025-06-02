
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does AlphaMatter's live transcription work?",
      answer: "Our AI-powered transcription uses advanced speech recognition technology to convert spoken lectures into text in real-time. It works with multiple languages and can adapt to different accents and speaking styles. The transcription appears instantly on your dashboard as the professor speaks."
    },
    {
      question: "Can I use AlphaMatter without an internet connection?",
      answer: "AlphaMatter requires an internet connection for live transcription and AI features. However, you can view previously downloaded content and take notes offline. Your data will sync automatically when you reconnect to the internet."
    },
    {
      question: "How accurate is the AI transcription?",
      answer: "Our transcription accuracy typically ranges from 85-95%, depending on audio quality, speaking clarity, and subject matter. The AI continuously learns and improves. You can always edit transcriptions manually, and our system learns from your corrections."
    },
    {
      question: "Is my lecture content private and secure?",
      answer: "Absolutely. All your data is encrypted end-to-end and stored securely in the cloud. Only you and users you explicitly share with can access your content. We never sell or share your educational data with third parties."
    },
    {
      question: "What devices does AlphaMatter support?",
      answer: "AlphaMatter works on any device with a modern web browser - smartphones, tablets, laptops, and desktop computers. We also have dedicated mobile apps for iOS and Android for the best mobile experience."
    },
    {
      question: "How do I share content with my study group?",
      answer: "You can easily share transcripts, notes, and annotations with classmates through our sharing features. Create study groups, share specific lectures, or collaborate on notes in real-time. All sharing is permission-based and secure."
    },
    {
      question: "Can professors see my private notes?",
      answer: "No, your private notes and annotations are completely private unless you choose to share them. Professors can only see content you explicitly share or questions you ask in the general chat."
    },
    {
      question: "What languages does AlphaMatter support?",
      answer: "We currently support transcription in over 40 languages including English, Spanish, French, German, Mandarin, Japanese, and more. Our AI can also translate content between supported languages in real-time."
    },
    {
      question: "How much does AlphaMatter cost?",
      answer: "We offer a free tier for basic features, with premium plans starting at $9.99/month for students and $19.99/month for professors. Educational institutions can contact us for custom pricing and bulk licenses."
    },
    {
      question: "Can I export my notes and transcripts?",
      answer: "Yes! You can export all your content in multiple formats including PDF, Word documents, plain text, and our proprietary format that preserves all annotations and timestamps. Your data is always portable."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            <HelpCircle className="h-16 w-16 text-[#db4d1a] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about AlphaMatter. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                      {openFAQ === index ? (
                        <ChevronDown className="h-5 w-5 text-[#db4d1a] flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#db4d1a] flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still have questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help you get the most out of AlphaMatter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Get detailed help via email</p>
                  <p className="text-[#db4d1a] font-medium">support@alphamatter.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with us in real-time</p>
                  <p className="text-[#db4d1a] font-medium">Available 9 AM - 6 PM PST</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
