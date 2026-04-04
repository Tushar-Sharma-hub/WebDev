import React, { use, useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
    const API_URL = "https://fake-store-api.mock.beeceptor.com/api/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);   


    async function getProducts() {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            // Map to replace images with real URLs
            const imageMap = {
                1: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
                2: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
                3: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
                4: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
                5: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
                6: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop",
                7: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
                8: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
                9: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
            };
            const updatedData = data.map(item => ({
                ...item,
                image: imageMap[item.product_id] || item.image
            }));
            setPosts(updatedData);
        } catch (error) {
            console.error("Error fetching products:", error);
            setPosts([]); // Clear posts on error
        }
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {
                loading ? <Spinner/> :
                posts.length>0?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                        {posts.map((post) => (
                            <Product key={post.product_id} post={post} />
                        ))}
                    </div>
                :
                <div className="flex items-center justify-center min-h-screen">
                    <p className="text-xl text-gray-600">No products found.</p>
                </div>
            }
        </div>
    )
}

export default Home
