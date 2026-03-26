// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PaymentPage = () => {
//     const [isOnline, setIsOnline] = useState(navigator.onLine);
//     const [paymentMethod, setPaymentMethod] = useState('card');
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         amount: '',
//         cardNumber: '',
//         upiId: '',
//     });

//     useEffect(() => {
//         const updateOnlineStatus = () => setIsOnline(navigator.onLine);
//         window.addEventListener('online', updateOnlineStatus);
//         window.addEventListener('offline', updateOnlineStatus);
//         return () => {
//             window.removeEventListener('online', updateOnlineStatus);
//             window.removeEventListener('offline', updateOnlineStatus);
//         };
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate conditionally
//         if (paymentMethod === 'card' && !formData.cardNumber) {
//             alert('Please enter your card number.');
//             return;
//         }
//         if (paymentMethod === 'gpay' && !formData.upiId) {
//             alert('Please enter your UPI ID.');
//             return;
//         }

//         alert(`Payment of ₹${formData.amount} via ${paymentMethod.toUpperCase()} successful!`);
//         // Add backend/payment logic here
//     };

//     const isOnlineOnly = paymentMethod === 'card' || paymentMethod === 'gpay';

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-7">
//                     <div className="card shadow">
//                         <div className="card-body p-4">
//                             <h3 className="text-center mb-4">Rupaye Payment</h3>

//                             <div className={`alert ${isOnline ? 'alert-success' : 'alert-danger'}`} role="alert">
//                                 {isOnline
//                                     ? '🟢 You are Online'
//                                     : '🔴 You are Offline. Some payment methods are disabled.'}
//                             </div>

//                             <form onSubmit={handleSubmit}>
//                                 {/* Name */}
//                                 <div className="mb-3">
//                                     <label className="form-label">Name</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         className="form-control"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>

//                                 {/* Email */}
//                                 <div className="mb-3">
//                                     <label className="form-label">Email</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         className="form-control"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>

//                                 {/* Amount */}
//                                 <div className="mb-3">
//                                     <label className="form-label">Amount (₹)</label>
//                                     <input
//                                         type="number"
//                                         name="amount"
//                                         className="form-control"
//                                         value={formData.amount}
//                                         onChange={handleChange}
//                                         required
//                                         min="1"
//                                     />
//                                 </div>

//                                 {/* Payment Method */}
//                                 <div className="mb-3">
//                                     <label className="form-label">Payment Method</label>
//                                     <div className="form-check">
//                                         <input
//                                             type="radio"
//                                             id="card"
//                                             name="paymentMethod"
//                                             value="card"
//                                             className="form-check-input"
//                                             checked={paymentMethod === 'card'}
//                                             onChange={(e) => setPaymentMethod(e.target.value)}
//                                             disabled={!isOnline}
//                                         />
//                                         <label htmlFor="card" className="form-check-label">Card Payment</label>
//                                     </div>
//                                     <div className="form-check">
//                                         <input
//                                             type="radio"
//                                             id="gpay"
//                                             name="paymentMethod"
//                                             value="gpay"
//                                             className="form-check-input"
//                                             checked={paymentMethod === 'gpay'}
//                                             onChange={(e) => setPaymentMethod(e.target.value)}
//                                             disabled={!isOnline}
//                                         />
//                                         <label htmlFor="gpay" className="form-check-label">Google Pay / UPI</label>
//                                     </div>
//                                     <div className="form-check">
//                                         <input
//                                             type="radio"
//                                             id="cash"
//                                             name="paymentMethod"
//                                             value="cash"
//                                             className="form-check-input"
//                                             checked={paymentMethod === 'cash'}
//                                             onChange={(e) => setPaymentMethod(e.target.value)}
//                                         />
//                                         <label htmlFor="cash" className="form-check-label">Cash / Hand Payment</label>
//                                     </div>
//                                 </div>

//                                 {/* Dynamic Inputs */}
//                                 {paymentMethod === 'card' && (
//                                     <div className="mb-3">
//                                         <label className="form-label">Card Number</label>
//                                         <input
//                                             type="text"
//                                             name="cardNumber"
//                                             className="form-control"
//                                             value={formData.cardNumber}
//                                             onChange={handleChange}
//                                             placeholder="XXXX-XXXX-XXXX-XXXX"
//                                         />
//                                     </div>
//                                 )}

//                                 {paymentMethod === 'gpay' && (
//                                     <div className="mb-3">
//                                         <label className="form-label">UPI ID</label>
//                                         <input
//                                             type="text"
//                                             name="upiId"
//                                             className="form-control"
//                                             value={formData.upiId}
//                                             onChange={handleChange}
//                                             placeholder="example@upi"
//                                         />
//                                     </div>
//                                 )}

//                                 {/* Submit Button */}
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary w-100"
//                                     disabled={isOnlineOnly && !isOnline}
//                                 >
//                                     Pay ₹{formData.amount || '0'}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentPage;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/PaymentPage.css'; // Custom styles

const PaymentPage = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        cardNumber: '',
        upiId: '',
    });

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (paymentMethod === 'card' && !formData.cardNumber) {
            alert('Please enter your card number.');
            return;
        }
        if (paymentMethod === 'gpay' && !formData.upiId) {
            alert('Please enter your UPI ID.');
            return;
        }

        alert(`Payment of ₹${formData.amount} via ${paymentMethod.toUpperCase()} successful!`);
    };

    const isOnlineOnly = paymentMethod === 'card' || paymentMethod === 'gpay';

    return (
        <div className="payment-wrapper">
            <div className="payment-card shadow">
                <h3 className="text-center mb-4">💰 Rupaye Payment</h3>

                <div className={`alert ${isOnline ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {isOnline
                        ? '🟢 You are Online'
                        : '🔴 You are Offline. Some payment methods are disabled.'}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Amount (₹)</label>
                        <input
                            type="number"
                            name="amount"
                            className="form-control"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                            min="1"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Payment Method</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="card"
                                name="paymentMethod"
                                value="card"
                                className="form-check-input"
                                checked={paymentMethod === 'card'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                disabled={!isOnline}
                            />
                            <label htmlFor="card" className="form-check-label">Card Payment</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="gpay"
                                name="paymentMethod"
                                value="gpay"
                                className="form-check-input"
                                checked={paymentMethod === 'gpay'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                disabled={!isOnline}
                            />
                            <label htmlFor="gpay" className="form-check-label">Google Pay / UPI</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="cash"
                                name="paymentMethod"
                                value="cash"
                                className="form-check-input"
                                checked={paymentMethod === 'cash'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label htmlFor="cash" className="form-check-label">Cash / Hand Payment</label>
                        </div>
                    </div>

                    {/* Conditional Inputs */}
                    {paymentMethod === 'card' && (
                        <div className="mb-3">
                            <label className="form-label">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                className="form-control"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                placeholder="XXXX-XXXX-XXXX-XXXX"
                            />
                        </div>
                    )}

                    {paymentMethod === 'gpay' && (
                        <div className="mb-3">
                            <label className="form-label">UPI ID</label>
                            <input
                                type="text"
                                name="upiId"
                                className="form-control"
                                value={formData.upiId}
                                onChange={handleChange}
                                placeholder="example@upi"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-100 mt-3"
                        disabled={isOnlineOnly && !isOnline}
                    >
                        Pay ₹{formData.amount || '0'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
