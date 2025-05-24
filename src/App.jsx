// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";
// import { motion } from "framer-motion";
// import {
//   FiShoppingCart,
//   FiHome,
//   FiCreditCard,
//   FiX,
//   FiMenu,
// } from "react-icons/fi";
// import { Toaster } from "react-hot-toast";
// import { useState } from "react";
// import { useCartStore } from "./store/useStore";
// import ProductDetail from "./components/ProductDetail";

// function App() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const cartCount = useCartStore((state) => state.cart.length);

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-900 text-purple-50">
//         {/* Navigation */}
//         <nav className="bg-gray-800 shadow-lg shadow-purple-500/10">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               {/* Mobile menu button */}
//               <div className="flex items-center md:hidden">
//                 <button
//                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                   className="text-purple-300 hover:text-white focus:outline-none"
//                 >
//                   {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//                 </button>
//               </div>

//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-4">
//                 <Link
//                   to="/"
//                   className="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
//                 >
//                   <FiHome className="mr-2" /> Products
//                 </Link>
//                 <Link
//                   to="/cart"
//                   className="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center relative"
//                 >
//                   <FiShoppingCart className="mr-2" /> Cart
//                   {cartCount > 0 && (
//                     <motion.span
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
//                     >
//                       {cartCount}
//                     </motion.span>
//                   )}
//                 </Link>
//                 <Link
//                   to="/checkout"
//                   className="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
//                 >
//                   <FiCreditCard className="mr-2" /> Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3"
//             >
//               <Link
//                 to="/"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <FiHome className="mr-2" /> Products
//               </Link>
//               <Link
//                 to="/cart"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center relative"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <FiShoppingCart className="mr-2" /> Cart
//                 {cartCount > 0 && (
//                   <span className="ml-2 bg-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>
//               <Link
//                 to="/checkout"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <FiCreditCard className="mr-2" /> Checkout
//               </Link>
//             </motion.div>
//           )}
//         </nav>

//         {/* Main Content */}
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <Routes>
//             <Route path="/" element={<Products />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/products/:id" element={<ProductDetail />} />
//           </Routes>
//         </main>

//         {/* Toaster for notifications */}
//         <Toaster
//           position="bottom-right"
//           toastOptions={{
//             style: {
//               background: "#1F2937",
//               color: "#E5E7EB",
//               border: "1px solid #6B7280",
//               boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
//             },
//             success: {
//               iconTheme: {
//                 primary: "#10B981",
//                 secondary: "#111827",
//               },
//             },
//             error: {
//               iconTheme: {
//                 primary: "#EF4444",
//                 secondary: "#111827",
//               },
//             },
//           }}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiHome,
  FiCreditCard,
  FiX,
  FiMenu,
} from "react-icons/fi";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useCartStore } from "./store/useStore";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);
  const cartCount = useCartStore((state) => state.cart.length);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-purple-50 relative">
        {/* Fixed Navigation */}
        <nav
          className={`fixed w-full bg-gray-800 shadow-lg shadow-purple-500/10 z-40 transition-all duration-300 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-purple-300 hover:text-white focus:outline-none"
                >
                  {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
                >
                  <FiHome className="mr-2" /> Products
                </Link>
                <Link
                  to="/cart"
                  className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-800 to-pink-800 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md"
                >
                  <FiShoppingCart className="text-lg" />
                  <span className="hidden sm:inline font-semibold">Cart</span>

                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="absolute -top-2 -right-2 bg-yellow-700 text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Link>

                <Link
                  to="/checkout"
                  className="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
                >
                  <FiCreditCard className="mr-2" /> Checkout
                </Link>
              </div>

              {/* Cart Link - Mobile */}
              <Link
                to="/cart"
                className="relative md:hidden flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-purple-900 to-pink-900 text-white shadow-lg hover:from-purple-700 hover:to-pink-400 transition-all duration-300"
              >
                <FiShoppingCart size={20} />

                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute -top-1 -right-1 bg-yellow-800 text-black text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              {/* Cart Count - Desktop */}
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiHome className="mr-2" /> Products
              </Link>
              <Link
                to="/cart"
                className="block px-3 py-2 rounded-md text-base font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiShoppingCart className="mr-2" /> Cart
                {cartCount > 0 && (
                  <span className="ml-auto bg-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                to="/checkout"
                className="block px-3 py-2 rounded-md text-base font-medium text-purple-300 hover:text-white hover:bg-gray-700 transition-all duration-300 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiCreditCard className="mr-2" /> Checkout
              </Link>
            </motion.div>
          )}
        </nav>

        {/* Main Content - Adjusted for fixed navbar */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        {/* Floating Cart Button (Mobile) */}
        {isMobile && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-6 right-6 z-10"
          >
            {/* <Link
              to="/cart"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
            >
              <FiShoppingCart size={24} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link> */}
          </motion.div>
        )}

        {/* Toaster for notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1F2937",
              color: "#E5E7EB",
              border: "1px solid #6B7280",
              boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
            },
            success: {
              iconTheme: {
                primary: "#10B981",
                secondary: "#111827",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#111827",
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
