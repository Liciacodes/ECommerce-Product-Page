import { createContext, ReactNode, useState  } from "react";

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number
    image: string
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    clearCart: () => void
}


export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [items, setItems] = useState<CartItem[]>([])

const addItem = (item: CartItem) => {
  setItems((prevItems) => {
    const existingItem = prevItems.find((i) => i.id === item.id)
    if (existingItem) {
      return prevItems.map((i) => i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i)
    }
    return [...prevItems, item]
  })
}
const removeItem = (id: number) => {
  setItems((prevItems) => prevItems.filter((item) => item.id !== id))
}
const clearCart = () => {
  setItems([])
}


  return (
    <CartContext.Provider value={{items, addItem, removeItem, clearCart}}>{children}</CartContext.Provider>
  )
}





