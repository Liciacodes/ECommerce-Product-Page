import { useContext } from "react"
import { CartContext } from "./CartContext"


export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used withi a CartProvider')
    }
    return context;
}

