
import { Trash } from "phosphor-react";
import { useCart } from "../CartContext/UseCart";

export default function CartEmptyState() {
    const { items } = useCart()

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="absolute right-2 top-14 p-4 md:top-20 md:p-6 md:right-10 w-[97%] md:w-96 h-80 md:h-60 bg-white shadow-2xl rounded-lg z-10">
            <h2 className="text-lg md:text-2xl font-semibold mx-4 my-4">Cart</h2>
            <div className="border-t border-darkGrayishBlue border"></div>
            <div className="flex items-center gap-x-2">{items.length === 0 ? <p className="text-center text-darkGrayishBlue p-8 font-normal">Your cart is empty.</p> : <div className="">
                {items.map((item) => (
                    <div key={item.id} className="flex mt-4 items-center space-x-1 text-grayishBlue">
                        <div className="w-8 h-8 mx-1"> <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" /></div>
                        <div className="flex flex-col mx-3"> <p className="">{item.name}</p>
                            <div className="flex items-center"><p className="text-sm text-gray-600"> ${item.price.toFixed(2)}</p>  <span className="mx-2"> x</span>  <p className="mx-3">{item.quantity}</p> <p className="text-sm text-black font-bold"> ${calculateTotal().toFixed(2)}</p></div> </div>
                            <div className="pl-5 text-darkGrayishBlue"><button ><Trash weight="fill" size={20} /></button></div>
                    </div>

                ))}
            </div>}</div>

            <button className="bg-orange text-black font-semibold py-2 px-4 w-full rounded-lg mt-6">Checkout</button>
        </div>
    );
}
