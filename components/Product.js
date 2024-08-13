import { useState } from "react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

export default function Product({ product, setMessage }) {
  const { addItem } = useShoppingCart();
  const { name, price, image } = product;
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    addItem(product, { count: quantity });
    setQuantity(1);
    setMessage(`${name} has been added to the cart.`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <article className="flex flex-col gap-3 bg-white p-8 rounded-xl shadow-md text-center mb-6">
      <div className="text-8xl cursor-default"><img src={image} alt={name} className="w-full h-auto" /></div>
      <div className="text-lg">{name}</div>
      <div className="text-2xl font-semibold mt-auto">
        {formatCurrencyString({ value: price, currency: "USD" })}
      </div>
      <div className="flex justify-around items-center mt-4 mb-2 ">
        <button
          onClick={decreaseQuantity}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          -
        </button>
        <span className="w-10 text-center rounded-md mx-3">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          +
        </button>
      </div>
      <button
        onClick={() => addToCart()}
        className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2"
      >
        Add to cart
      </button>
    </article>
  );
}