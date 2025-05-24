// import React, { useState } from "react";
// import { useCartStore } from "../store/useStore";
// import { motion } from "framer-motion";
// import {
//   FiShoppingCart,
//   FiSearch,
//   FiChevronLeft,
//   FiChevronRight,
//   FiEye,
//   FiPlus,
//   FiMinus,
// } from "react-icons/fi";
// import { toast } from "react-hot-toast";
// import { Link } from "react-router-dom";

// const ProductList = ({ products }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(8);
//   const [quantities, setQuantities] = useState({});
//   const addToCart = useCartStore((state) => state.addToCart);

//   const categories = ["All", ...new Set(products.map((p) => p.category?.name))];

//   const handleQuantityChange = (productId, value) => {
//     const newValue = Math.max(1, Math.min(99, value));
//     setQuantities((prev) => ({
//       ...prev,
//       [productId]: newValue,
//     }));
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || product.category?.name === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   const handleAddToCart = (product) => {
//     const quantity = quantities[product.id] || 1;
//     addToCart({ ...product, quantity });
//     toast.success(`${quantity} ${product.title} added to cart!`, {
//       position: "bottom-right",
//       style: {
//         background: "#1F2937",
//         color: "#E5E7EB",
//         border: "1px solid #6B7280",
//         boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
//       },
//     });
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-full overflow-x-hidden px-4 sm:px-6">
//       {/* Search & Filter UI */}
//       <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-full">
//         <div className="relative flex-grow w-full">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <FiSearch className="text-purple-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="pl-10 pr-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//           />
//         </div>

//         <select
//           value={selectedCategory}
//           onChange={(e) => {
//             setSelectedCategory(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white w-full md:w-auto"
//         >
//           {categories.map((cat, i) => (
//             <option key={i} value={cat} className="bg-gray-800">
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Products Grid */}
//       {filteredProducts.length === 0 ? (
//         <div className="text-center py-12 text-gray-400 w-full">
//           <p className="text-xl">No products found matching your criteria</p>
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
//             {currentProducts.map((product) => {
//               const quantity = quantities[product.id] || 1;
//               return (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{
//                     scale: 1.03,
//                     boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
//                   }}
//                   className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group w-full"
//                 >
//                   <Link to={`/products/${product.id}`} className="block">
//                     <div className="h-48 overflow-hidden relative">
//                       {product.images?.[0] && (
//                         <img
//                           src={product.images[0]}
//                           alt={product.title}
//                           className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                         />
//                       )}
//                       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
//                         <FiEye className="text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity" />
//                       </div>
//                     </div>
//                   </Link>
//                   <div className="p-4">
//                     <Link to={`/products/${product.id}`} className="block">
//                       <h4 className="text-lg font-semibold text-white mb-2 truncate hover:text-purple-400 transition-colors">
//                         {product.title}
//                       </h4>
//                     </Link>
//                     <p className="text-purple-400 font-bold text-xl mb-4">
//                       ${product.price}
//                     </p>

//                     {/* Quantity Controls */}
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
//                         <button
//                           onClick={() =>
//                             handleQuantityChange(product.id, quantity - 1)
//                           }
//                           className="px-3 py-1 bg-gray-700 text-white hover:bg-gray-600 transition-colors"
//                         >
//                           <FiMinus className="text-sm" />
//                         </button>
//                         <span className="px-3 py-1 bg-gray-800 text-white text-center w-10">
//                           {quantity}
//                         </span>
//                         <button
//                           onClick={() =>
//                             handleQuantityChange(product.id, quantity + 1)
//                           }
//                           className="px-3 py-1 bg-gray-700 text-white hover:bg-gray-600 transition-colors"
//                         >
//                           <FiPlus className="text-sm" />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex gap-2">
//                       <motion.button
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => handleAddToCart(product)}
//                         className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
//                       >
//                         <FiShoppingCart className="text-sm" /> Add
//                       </motion.button>
//                       <Link
//                         to={`/products/${product.id}`}
//                         className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
//                       >
//                         <FiEye className="text-sm" /> Details
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Pagination */}
//           {filteredProducts.length > productsPerPage && (
//             <div className="flex flex-col sm:flex-row justify-between items-center mt-8 w-full gap-4">
//               <div className="text-gray-400 text-sm sm:text-base">
//                 Showing {indexOfFirstProduct + 1}-
//                 {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
//                 {filteredProducts.length} products
//               </div>

//               <nav className="flex items-center gap-1 sm:gap-2">
//                 <button
//                   onClick={handlePrevPage}
//                   disabled={currentPage === 1}
//                   className={`p-1 sm:p-2 rounded-md ${
//                     currentPage === 1
//                       ? "text-gray-500 cursor-not-allowed"
//                       : "text-purple-400 hover:bg-gray-700"
//                   }`}
//                 >
//                   <FiChevronLeft className="text-lg sm:text-xl" />
//                 </button>

//                 {Array.from(
//                   { length: totalPages > 5 ? 5 : totalPages },
//                   (_, i) => {
//                     let pageNumber;
//                     if (totalPages <= 5) {
//                       pageNumber = i + 1;
//                     } else if (currentPage <= 3) {
//                       pageNumber = i + 1;
//                     } else if (currentPage >= totalPages - 2) {
//                       pageNumber = totalPages - 4 + i;
//                     } else {
//                       pageNumber = currentPage - 2 + i;
//                     }

//                     return (
//                       <button
//                         key={pageNumber}
//                         onClick={() => paginate(pageNumber)}
//                         className={`px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base ${
//                           currentPage === pageNumber
//                             ? "bg-purple-600 text-white"
//                             : "text-purple-400 hover:bg-gray-700"
//                         }`}
//                       >
//                         {pageNumber}
//                       </button>
//                     );
//                   }
//                 )}

//                 {totalPages > 5 && currentPage < totalPages - 2 && (
//                   <span className="text-purple-400 px-1">...</span>
//                 )}

//                 {totalPages > 5 && currentPage < totalPages - 2 && (
//                   <button
//                     onClick={() => paginate(totalPages)}
//                     className={`px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base ${
//                       currentPage === totalPages
//                         ? "bg-purple-600 text-white"
//                         : "text-purple-400 hover:bg-gray-700"
//                     }`}
//                   >
//                     {totalPages}
//                   </button>
//                 )}

//                 <button
//                   onClick={handleNextPage}
//                   disabled={currentPage === totalPages}
//                   className={`p-1 sm:p-2 rounded-md ${
//                     currentPage === totalPages
//                       ? "text-gray-500 cursor-not-allowed"
//                       : "text-purple-400 hover:bg-gray-700"
//                   }`}
//                 >
//                   <FiChevronRight className="text-lg sm:text-xl" />
//                 </button>
//               </nav>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductList;

import React, { useState } from "react";
import { useCartStore } from "../store/useStore";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
} from "react-icons/fi";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const addToCart = useCartStore((state) => state.addToCart);

  const categories = ["All", ...new Set(products.map((p) => p.category?.name))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      style: {
        background: "#1F2937",
        color: "#E5E7EB",
        border: "1px solid #6B7280",
        boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
      },
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-x-hidden px-4 sm:px-6">
      {/* Search & Filter UI */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-full">
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-purple-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 pr-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white w-full md:w-auto"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat} className="bg-gray-800">
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 text-gray-400 w-full">
          <p className="text-xl">No products found matching your criteria</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group w-full"
              >
                <Link to={`/products/${product.id}`} className="block">
                  <div className="h-48 overflow-hidden relative">
                    {product.images?.[0] && (
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <FiEye className="text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity" />
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/products/${product.id}`} className="block">
                    <h4 className="text-lg font-semibold text-white mb-2 truncate hover:text-purple-400 transition-colors">
                      {product.title}
                    </h4>
                  </Link>
                  <p className="text-purple-400 font-bold text-xl mb-4">
                    ${product.price}
                  </p>
                  <div className="flex gap-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
                    >
                      <FiShoppingCart className="text-sm" /> Add
                    </motion.button>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
                    >
                      <FiEye className="text-sm" /> Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {filteredProducts.length > productsPerPage && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 w-full gap-4">
              <div className="text-gray-400 text-sm sm:text-base">
                Showing {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </div>

              <nav className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-1 sm:p-2 rounded-md ${
                    currentPage === 1
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-purple-400 hover:bg-gray-700"
                  }`}
                >
                  <FiChevronLeft className="text-lg sm:text-xl" />
                </button>

                {Array.from(
                  { length: totalPages > 5 ? 5 : totalPages },
                  (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base ${
                          currentPage === pageNumber
                            ? "bg-purple-600 text-white"
                            : "text-purple-400 hover:bg-gray-700"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                )}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <span className="text-purple-400 px-1">...</span>
                )}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <button
                    onClick={() => paginate(totalPages)}
                    className={`px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base ${
                      currentPage === totalPages
                        ? "bg-purple-600 text-white"
                        : "text-purple-400 hover:bg-gray-700"
                    }`}
                  >
                    {totalPages}
                  </button>
                )}

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-1 sm:p-2 rounded-md ${
                    currentPage === totalPages
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-purple-400 hover:bg-gray-700"
                  }`}
                >
                  <FiChevronRight className="text-lg sm:text-xl" />
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
