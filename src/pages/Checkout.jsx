import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { useCart } from '../context/CartContext'
import logo from '../assets/logo.png'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LuShoppingCart } from 'react-icons/lu'

const Checkout = () => {
    const { cartCount, updateCartCount, clearCart } = useCart();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const onSubmit = (data) => {
        toast.success("Order Placed Successfully!!")
        clearCart()
        navigate('/')
    }


    useEffect(() => {
        const fetchCartData = async () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];


            let fetchedProducts = [];

            for (const item of cart) {
                try {

                    let res = await fetch(`https://dummyjson.com/products/${item.id}`)
                    const data = await res.json();
                    fetchedProducts.push({ ...data, quantity: item.quantity })
                }
                catch (error) {
                    console.error("Error fetching product:", error);

                }
            }
            setCartItems(fetchedProducts)
            setLoading(false)
        }

        fetchCartData()
    }, [])



    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(1);
    }

    return (
        <div className='checkout'>
            <div className='checkouttopbar'>
                <img src={logo} alt='logo' 
                onClick={()=> navigate('/')}
                />
                <h1>Secure Chekout</h1>
                <button>
                    <LuShoppingCart size={30} />
                    <span>Cart</span>
                </button>
            </div>

            <div className='checkoutContainer'>
                <div className='left'>
                    <div className='addressSection'>
                        <h3>Delivering to Harshal Jain</h3>
                        <p>This is a sample address</p>
                    </div>

                    <div className='paymentMethod'>
                        <h3>Payment Method</h3>
                        <div className='paymentForm'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Card Number</label>

                                <input type='text'
                                    placeholder='XXXX XXXX XXXX XXXX'
                                    {
                                    ...register("cardNumber", {
                                        required: "Card Number is required",

                                        pattern: {
                                            value: /^[0-9]{16}$/,
                                            message: "Card Number must bet 16 digits"
                                        }
                                    })
                                    }
                                    maxLength={16}
                                />

                                {errors.cardNumber && <span className='error'>{errors.cardNumber.message}</span>}

                                <label>Card Holder Name</label>
                                <input type='text' placeholder='Your Name'
                                    {
                                    ...register("cardHolder", {
                                        required: "Card Holder Name is required"

                                    })
                                    }
                                />

                                {errors.cardHolder && <span className='error'>{errors.cardHolder.message}</span>}


                                <div className='cardDetails'>
                                    <div className='subdiv'>
                                        <label>Expiry Date</label>
                                        <input type='month'
                                            {
                                            ...register("expiry", {
                                                required: "Expiry Date is required"

                                            })
                                            }
                                        />
                                        {errors.expiry && <span className='error'>{errors.expiry.message}</span>}
                                    </div>

                                    <div className='subdiv'>
                                        <label>CVV</label>
                                        <input type='password'
                                            {
                                            ...register("cvv", {

                                                required: "CVV is required",
                                                pattern: {
                                                    value: /^[0-9]{3}$/,
                                                    message: "CVV must be 3 digits"
                                                }

                                            })
                                            }
                                        />
                                        {errors.cvv && <span className='error'>{errors.cvv.message}</span>}
                                    </div>
                                </div>

                                <button type='submit'>Place Order</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='right'>

                    <div className='orderSummary'>
                        <h2>Order Summary</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Items:</td>
                                    <td>{cartItems.length}</td>
                                </tr>
                                <tr>
                                    <td>Delivery</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <th>Order total:</th>
                                    <th>Rs. {calculateSubtotal()}</th>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout