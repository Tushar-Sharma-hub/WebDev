import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
function Cart() {
    const cart = useSelector((state) => state.cart);
    const [totalAmount,setTotalAmount]=useState(0);

    useEffect(()=>{
        let total=0;
        cart.forEach((item)=>{
            total+=item.price;
        })
        setTotalAmount(total);
    },[cart])
    return (
        <div className="min-h-screen bg-gray-100">
            {
                cart.length > 0 ?
                (
                    <div className="max-w-6xl mx-auto p-6">
                        <div className="flex flex-col lg:flex-row justify-center gap-8">
                            <div className="lg:w-2/3">
                                {cart.map((item,index)=>(
                                    <CartItem key={item.product_id} item={item} itemIndex={index}/>
                                ))}
                            </div>

                            <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg h-fit">
                                <div className="text-xl font-semibold text-slate-700 mb-4">Your Cart</div>
                                <div className="text-slate-700 mb-4">Summary</div>
                                <p className="text-slate-700 mb-2"><span className="font-semibold">Total items: {cart.length}</span></p>
                                <div className="border-t pt-4">
                                    <p className="text-lg font-bold text-green-600">Total Amount: ${totalAmount.toFixed(2)}</p>
                                    <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700 transition-colors">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ):
                (
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <h1 className="text-2xl font-semibold text-slate-700 mb-4">Cart Empty</h1>
                        <Link to={"/"}>
                            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">Go to Home</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
