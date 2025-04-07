import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ _id, name, images = [], description, price }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images?.[currentIndex] || "placeholder.jpg";

  return (
    <div
      className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col justify-between cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => navigate(`/product/${_id}`)}
    >
      <div className="w-full">
        <img
          src={`http://localhost:5000/products/${currentImage}`}
          alt="Product"
          className="w-full h-56 object-cover rounded-lg mb-2"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-md font-bold mt-2">₹ {price}</p>
      </div>
    </div>
  );
}
