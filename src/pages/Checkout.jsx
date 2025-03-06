import React from 'react';
import './Checkout.css';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';
import { LuShoppingCart } from 'react-icons/lu';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cartItems, calculateSubtotal, clearCart } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    toast.success("Order Placed Successfully!")
    clearCart();
    navigate('/');
  };

  return (
    <div className="checkout">
      <div className='checkouttopbar'>
        <img src={logo} alt="logo" />
        <h1>Secure Checkout</h1>
        <button>
          <LuShoppingCart size={30} />
          <span>Cart</span>
        </button>
      </div>

      <div className="checkoutContainer">
        <div className="left">
          <div className="addressSection">
            <h3>Delivering to Harshal Jain</h3>
            <p>This is a sample address</p>
          </div>

          <div className="paymentMethod">
            <h3>Payment Method</h3>
            <div className="paymentForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  {...register("cardNumber", {
                    required: "Card Number is required",
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: "Card Number must be 16 digits"
                    }
                  })}
                  maxLength={16}
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}

                <label>Card Holder Name</label>
                <input
                  type="text"
                  placeholder="Harshal Jain"
                  {...register("cardHolder", { required: "Card Holder Name is required" })}
                />
                {errors.cardHolder && <span className="error">{errors.cardHolder.message}</span>}

                <div className="cardDetails">
                  <div className='subdiv'>
                    <label>Expiry Date</label>
                    <input
                      type="month"
                      {...register("expiry", { required: "Expiry Date is required" })}
                    />
                    {errors.expiry && <span className="error">{errors.expiry.message}</span>}
                  </div>

                  <div className='subdiv'>
                    <label>CVV</label>
                    <input
                      type="password"
                      placeholder="123"
                      maxLength={3}
                      {...register("cvv", {
                        required: "CVV is required",
                        pattern: {
                          value: /^[0-9]{3}$/,
                          message: "CVV must be 3 digits"
                        }
                      })}
                    />
                    {errors.cvv && <span className="error">{errors.cvv.message}</span>}
                  </div>
                </div>

                <button type="submit">Place Order</button>
              </form>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="orderSummary">
            <h2>Order Summary</h2>
            <table>
              <tbody>
                <tr>
                  <td>Items:</td>
                  <td>{cartItems.length}</td>
                </tr>
                <tr>
                  <td>Delivery:</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>Order Total:</th>
                  <th>₹{calculateSubtotal()}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
