import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
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
            <img
              src="/lovable-uploads/ee34ecb0-98ab-4495-a2f7-0445311ee258.png"
              alt="AlphaMatter"
              className="h-20 w-20 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Content coming soon. We're preparing detailed pricing information
              for you.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
