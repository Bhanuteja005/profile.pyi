import Product from "@/components/Product";
import { products } from "@/data/products";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <div className="container mx-auto p-4">
      {message && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 inline-block">
          {message}
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[900px]">
        {products.map((product) => (
          <Product product={product} key={product.id} setMessage={setMessage} />
        ))}
      </div>
    </div>
  );
}