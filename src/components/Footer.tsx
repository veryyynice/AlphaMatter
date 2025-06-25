import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/AlphaMatter/lovable-uploads/ee34ecb0-98ab-4495-a2f7-0445311ee258.png"
                alt="AlphaMatter"
                className="h-8 w-8 mr-3"
              />
              <span className="text-xl font-bold">AlphaMatter</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming education through AI-powered lecture engagement and
              smart learning tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => navigate("/#why-choose-alphamatter")}
                  className="hover:text-white transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/pricing")}
                  className="hover:text-white transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/privacy")}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/faqs")}
                  className="hover:text-white transition-colors text-left"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AlphaMatter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
