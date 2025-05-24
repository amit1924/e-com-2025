// import React, { useState } from "react";
// import { useCartStore } from "../store/useStore";
// import { motion } from "framer-motion";
// import {
//   FiCheckCircle,
//   FiCreditCard,
//   FiUser,
//   FiMail,
//   FiMapPin,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const Checkout = () => {
//   const cart = useCartStore((state) => state.cart);
//   const clearCart = useCartStore((state) => state.clearCart);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const total = cart.reduce((sum, item) => sum + item.price, 0) * 1.1;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real app, you would process payment here
//     setTimeout(() => {
//       clearCart();
//       setIsSubmitted(true);
//       toast.success("Order placed successfully!", {
//         position: "bottom-right",
//         style: {
//           background: "#1F2937",
//           color: "#E5E7EB",
//           border: "1px solid #6B7280",
//           boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
//         },
//       });
//     }, 1500);
//   };

//   if (cart.length === 0 && !isSubmitted) {
//     return (
//       <div className="flex flex-col items-center justify-center py-16 text-gray-400">
//         <p className="text-xl mb-4">Your cart is empty</p>
//         <Link
//           to="/"
//           className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   if (isSubmitted) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="flex flex-col items-center justify-center py-16 text-center"
//       >
//         <FiCheckCircle className="text-green-500 text-6xl mb-6" />
//         <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
//           Order Confirmed!
//         </h1>
//         <p className="text-xl text-gray-300 mb-8 max-w-md">
//           Thank you for your purchase. Your order has been received and is being
//           processed.
//         </p>
//         <div className="bg-gray-800 rounded-xl p-6 mb-8 w-full max-w-md">
//           <h2 className="text-xl font-semibold text-white mb-4">
//             Order Summary
//           </h2>
//           <p className="text-gray-400 mb-2">
//             Total:{" "}
//             <span className="text-purple-400 font-bold">
//               ${total.toFixed(2)}
//             </span>
//           </p>
//           <p className="text-gray-400">
//             Items: <span className="text-white">{cart.length}</span>
//           </p>
//         </div>
//         <Link
//           to="/"
//           className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
//         >
//           Back to Shopping
//         </Link>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="py-4"
//     >
//       <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
//         Checkout
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
//           <h2 className="text-xl font-bold text-white mb-6 flex items-center">
//             <FiUser className="mr-2 text-purple-400" /> Customer Information
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-400 mb-2" htmlFor="name">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <FiUser className="absolute left-3 top-3 text-purple-400" />
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-400 mb-2" htmlFor="email">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <FiMail className="absolute left-3 top-3 text-purple-400" />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//               </div>
//             </div>

//             <div className="mb-6">
//               <label className="block text-gray-400 mb-2" htmlFor="address">
//                 Shipping Address
//               </label>
//               <div className="relative">
//                 <FiMapPin className="absolute left-3 top-3 text-purple-400" />
//                 <textarea
//                   id="address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   required
//                   rows="3"
//                   className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//               </div>
//             </div>

//             <h2 className="text-xl font-bold text-white mb-6 flex items-center">
//               <FiCreditCard className="mr-2 text-purple-400" /> Payment Details
//             </h2>

//             <div className="mb-4">
//               <label className="block text-gray-400 mb-2" htmlFor="cardNumber">
//                 Card Number
//               </label>
//               <div className="relative">
//                 <FiCreditCard className="absolute left-3 top-3 text-purple-400" />
//                 <input
//                   type="text"
//                   id="cardNumber"
//                   name="cardNumber"
//                   value={formData.cardNumber}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="1234 5678 9012 3456"
//                   className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="block text-gray-400 mb-2" htmlFor="expiry">
//                   Expiry Date
//                 </label>
//                 <input
//                   type="text"
//                   id="expiry"
//                   name="expiry"
//                   value={formData.expiry}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="MM/YY"
//                   className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-400 mb-2" htmlFor="cvv">
//                   CVV
//                 </label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   name="cvv"
//                   value={formData.cvv}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="123"
//                   className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//               </div>
//             </div>

//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity font-bold"
//             >
//               Place Order (${total.toFixed(2)})
//             </motion.button>
//           </form>
//         </div>

//         <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
//           <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

//           <div className="mb-6">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between py-3 border-b border-gray-700"
//               >
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 mr-4 overflow-hidden rounded-lg">
//                     {item.images?.[0] && (
//                       <img
//                         src={item.images[0]}
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                       />
//                     )}
//                   </div>
//                   <span className="text-white">{item.title}</span>
//                 </div>
//                 <span className="text-purple-400">${item.price}</span>
//               </div>
//             ))}
//           </div>

//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-400">Subtotal</span>
//               <span className="text-white">${(total / 1.1).toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-400">Tax (10%)</span>
//               <span className="text-white">
//                 ${((total / 1.1) * 0.1).toFixed(2)}
//               </span>
//             </div>
//             <div className="flex justify-between pt-3 border-t border-gray-700">
//               <span className="text-lg font-bold text-white">Total</span>
//               <span className="text-xl font-bold text-purple-400">
//                 ${total.toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import { useCartStore } from "../store/useStore";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCreditCard,
  FiUser,
  FiMail,
  FiMapPin,
  FiShoppingBag,
  FiArrowLeft,
  FiTrash2,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveItem = (itemId, itemTitle) => {
    deleteFromCart(itemId);
    toast.error(`${itemTitle} removed from cart`, {
      position: "bottom-right",
      style: {
        background: "#1F2937",
        color: "#E5E7EB",
        border: "1px solid #6B7280",
        boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save order details before clearing cart
    setOrderDetails({
      total,
      itemCount: cart.length,
      items: [...cart],
    });

    setIsSubmitted(true);
    clearCart();

    toast.success("Order placed successfully!", {
      position: "bottom-right",
      style: {
        background: "#1F2937",
        color: "#E5E7EB",
        border: "1px solid #6B7280",
        boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
      },
    });
  };

  if (cart.length === 0 && !isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-16 text-gray-400"
      >
        <FiShoppingBag size={48} className="mb-4" />
        <p className="text-xl mb-4">Your cart is empty</p>
        <Link
          to="/"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <FiCheckCircle className="text-green-500 text-6xl mb-6" />
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>
        <div className="bg-gray-800 rounded-xl p-6 mb-8 w-full max-w-md">
          <h2 className="text-xl font-semibold text-white mb-4">
            Order Summary
          </h2>
          <p className="text-gray-400 mb-2">
            Total:{" "}
            <span className="text-purple-400 font-bold">
              ${orderDetails?.total.toFixed(2)}
            </span>
          </p>
          <p className="text-gray-400">
            Items: <span className="text-white">{orderDetails?.itemCount}</span>
          </p>
        </div>
        <Link
          to="/"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-4 px-4 sm:px-6"
    >
      <div className="flex items-center mb-6">
        <Link
          to="/cart"
          className="mr-4 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <FiArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Checkout
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customer Information and Payment */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <FiUser className="mr-2 text-purple-400" /> Customer Information
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-purple-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-purple-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 mb-2" htmlFor="address">
                Shipping Address
              </label>
              <div className="relative">
                <FiMapPin className="absolute left-3 top-3 text-purple-400" />
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <FiCreditCard className="mr-2 text-purple-400" /> Payment Details
            </h2>

            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <div className="relative">
                <FiCreditCard className="absolute left-3 top-3 text-purple-400" />
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="expiry">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  required
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  placeholder="123"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity font-bold"
            >
              Place Order (${total.toFixed(2)})
            </motion.button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

          <div className="mb-6 max-h-[400px] overflow-y-auto">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between py-4 border-b border-gray-700"
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-lg flex-shrink-0">
                    {item.images?.[0] && (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-purple-400 text-xs sm:text-sm">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 sm:p-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="text-white font-bold mx-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart({ ...item, quantity: 1 })}
                      className="p-1 sm:p-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRemoveItem(item.id, item.title)}
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <FiTrash2 size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span className="text-gray-400">Tax (10%)</span>
              <span className="text-white">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-lg font-bold text-white">Total</span>
              <span className="text-xl font-bold text-purple-400">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
