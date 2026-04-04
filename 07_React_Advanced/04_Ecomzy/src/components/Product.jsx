import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast';

function Product({ post }) {

    const cart = useSelector((state) => state.cart);
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item added to Cart");
    }
    const removeFromCart=()=>{
        dispatch(remove(post.product_id));
        toast.error("Item removed from Cart");
    }
    return (
        <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-lg p-4 m-4 hover:shadow-xl transition-shadow duration-300">
            <div className="w-full">
                <img src={post.image} alt={post.name} className="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800">{post.name}</p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-600">{post.description}</p>
            </div>
            <div className="mt-2">
                <p className="text-xl font-bold text-green-600">${post.price}</p>
            </div>
            {
                cart.some((item)=>item.product_id===post.product_id) ?
                (
                    <button onClick={removeFromCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">Remove from Cart</button>
                ):
                (
                    <button onClick={addToCart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Add to Cart</button>
                )
            }
        </div>
    )
}

export default Product
