import { useState } from 'react';
import { ShoppingCart } from "phosphor-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useCart } from '../CartContext/UseCart';

const ProductCard = () => {
    const [quantity, setQuantity] = useState<number>(1);  
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const { addItem } = useCart();




    const images = [
        '/images/image-product-1.jpg',
             '/images/image-product-2.jpg', 
             '/images/image-product-3.jpg', 
             '/images/image-product-4.jpg']
    

    const handleAddToCart = () => {
        addItem({
            id: 1,
            name: "Fall Limited Edition Sneakers",
            price: 125.00,
            quantity,
            image: images[activeSlide]
        });
    };

    return (
        <div className="flex flex-col md:flex-row md:space-y-0 sm:space-x-4 md:space-x-32">
          
            <div className="flex flex-col md:space-y-4 items-center w-full">
                <img src={images[activeSlide]} alt="Product" className="hidden md:block rounded-lg w-full" />

               
                <div className='w-full md:hidden'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        modules={[Navigation, Pagination]}
                        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={src}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

               
                <div className="hidden md:flex  w-full justify-between">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-full max-w-[80px] rounded-lg border-2 ${activeSlide === index ? 'border-orange' : 'border-transparent'} cursor-pointer`}
                            onMouseOver={() => {
                                setActiveSlide(index); 
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Right Text Section */}
            <div className="space-y-2  md:pt-10 w-full p-4 md:p-0">
                <h2 className="uppercase text-darkGrayishBlue text-md font-semibold">Sneaker Company</h2>
                <h1 className="text-2xl md:text-5xl font-bold text-blackOpacity75 md:pb-5">Fall Limited Edition Sneakers</h1>
                <p className="text-darkGrayishBlue md:pb-3">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                 <div className='flex md:flex-col justify-between '>
                    <div className="flex items-center space-x-4 md:pb-4">
                        <span className="text-2xl font-bold">$125.00</span>
                        <span className="text-white bg-veryDarkBlue px-2 py-1 rounded-md">50%</span>
                    </div>
                    <span className="line-through text-lg font-semibold text-darkGrayishBlue">$250.00</span>
                </div> 
   

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full md:pt-4">
                    {/* Quantity Control */}
                    <div className="flex items-center space-x-12 bg-lightGrayishBlue py-3 w-full md:w-auto">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}  // Prevent quantity below 1
                            className="px-2 text-orange font-bold text-2xl w-full md:w-auto"
                        >
                            -
                        </button>
                        <span className="px-2 text-blackOpacity75 font-bold text-2xl">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-2 text-orange font-bold text-2xl w-full md:w-auto"
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="flex items-center justify-center bg-orange text-blackOpacity75 font-semibold py-4 px-6 rounded-lg w-full md:w-auto"
                    >
                        <ShoppingCart className="mr-2" size={24} weight="fill" color="black" />
                        <p>Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
