import { createContext, useContext,useState} from "react";
import type { ReactNode } from "react";
type CartItem = {
  id: number;
  name: string;
  price: string;
  img: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}