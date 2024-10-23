// src/components/ProductCard.tsx
import { useState } from 'react';

const ProductCard = () => {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-32 ">
            {/* Left Image Section */}
            <div className="flex flex-col space-y-4 items-center w-full">
                <img src="/src/assets/images/image-product-1.jpg" alt="Product" className="rounded-lg w-full" />
                <div className="flex space-x-1 w-full justify-between">
                    {/* Thumbnails */}
                    <img src="/src/assets/images/image-product-1.jpg" alt="Thumbnail 1" className="w-full max-w-[80px] rounded-lg border-2 border-orange" />
                    <img src="/src/assets/images/image-product-2.jpg" alt="Thumbnail 2" className="w-full max-w-[80px] rounded-lg border-2 border-orange" />
                    <img src="/src/assets/images/image-product-3.jpg" alt="Thumbnail 3" className="w-full max-w-[80px] rounded-lg border-2 border-orange" />
                    <img src="/src/assets/images/image-product-4.jpg" alt="Thumbnail 4" className="w-full max-w-[80px] rounded-lg" />
                    {/* Add more thumbnails if needed */}
                </div>
            </div>

            {/* Right Text Section */}
            <div className="space-y-4 md:pt-16">
                <h2 className="uppercase text-darkGrayishBlue text-md font-semibold">Sneaker Company</h2>
                <h1 className="text-5xl font-bold text-blackOpacity75 mb-12">Fall Limited Edition Sneakers</h1>
                <p className="text-darkGrayishBlue mb-4">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                <div><div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl font-bold">$125.00</span>
                    <span className="text-white bg-veryDarkBlue px-2 py-1 rounded-md">50%</span>

                </div> <span className="line-through text-lg font-semibold text-darkGrayishBlue ">$250.00</span></div>


                {/* Quantity and Add to Cart */}
                <div className="flex space-x-6 items-center">
                    <div className="flex items-center space-x-12 bg-lightGrayishBlue ">
                        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 0} className="p-2 text-orange font-bold text-2xl">-</button>
                        <span className="p-2 text-blackOpacity75 font-bold text-2xl">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-orange font-bold text-2xl">+</button>
                    </div>
                    <button className="flex items-center bg-orange text-white py-2 px-6 rounded-lg">
                        <img src="/src/assets/images/icon-cart.svg" alt="Cart" className="mr-2 text-blackOpacity75" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
