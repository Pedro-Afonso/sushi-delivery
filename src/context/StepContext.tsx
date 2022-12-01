import { createContext, useContext, useEffect, useState } from "react";
import { TProduct } from "../pages/api/hello";

interface ICart {
  sushi: TProduct;
  quantity: number;
}

interface IDataContext {
  total: number;
  cart: ICart[];
  handleCheckSushi: (newProduct: TProduct) => void;
  handleQuantity: (opt: "ADD" | "SUB", _id: number) => void;
}

const StepContext = createContext({} as IDataContext);

export const useStepContext = () => useContext(StepContext);

interface IStepProvider {
  children: React.ReactNode;
}

export const StepProvider: React.FC<IStepProvider> = ({ children }) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.sushi.price * item.quantity));
    setTotal(sum);
  }, [cart]);

  const handleCheckSushi = (newProduct: TProduct) => {
    const hasSushi = cart
      .map(({ sushi }) => sushi._id)
      .includes(newProduct._id);

    if (hasSushi) {
      // Remove sushi
      setCart((prev) =>
        prev.filter(({ sushi }) => sushi._id !== newProduct._id)
      );
    } else {
      const data: ICart = {
        sushi: newProduct,
        quantity: 1,
      };
      // Add sushi
      setCart((prev) => [...prev, data]);
    }
  };

  const handleQuantity = (opt: "ADD" | "SUB", _id: number) => {
    if (opt === "ADD") {
      setCart((prev) =>
        prev.map((item) => {
          if (item.sushi._id !== _id) return item;
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        })
      );
    }

    if (opt === "SUB") {
      setCart((prev) =>
        prev.map((item) => {
          if (item.sushi._id !== _id) return item;
          if (item.quantity === 0) return item;
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
      );
    }
  };

  return (
    <StepContext.Provider
      value={{ cart, total, handleCheckSushi, handleQuantity }}
    >
      {children}
    </StepContext.Provider>
  );
};
