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
            setPosts(data);
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
        <div>
            {
                loading ? <Spinner/> :
                posts.length>0?
                (
                    <div>
                        {posts.map((post) => (
                            <Product key={post.id} post={post} />
                        ))}
                    </div>
                )
                :
                <div>
                    <p>No products found.</p>
                </div>
            }
        </div>
    )
}

export default Home
