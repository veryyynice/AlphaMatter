
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md mx-auto text-center shadow-lg">
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/lovable-uploads/ee34ecb0-98ab-4495-a2f7-0445311ee258.png" 
                alt="AlphaMatter"
                className="h-16 w-16 mx-auto mb-6"
              />
              
              <h1 className="text-6xl font-bold text-[#db4d1a] mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Oops! Page not found
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back to learning!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => navigate('/')}
                  className="bg-[#db4d1a] hover:bg-[#c44217] text-white"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
                <Button
                  onClick={() => navigate(-1)}
                  variant="outline"
                  className="border-[#db4d1a] text-[#db4d1a] hover:bg-[#db4d1a] hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default NotFound;
