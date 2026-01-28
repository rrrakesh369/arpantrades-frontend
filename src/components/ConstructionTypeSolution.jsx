import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_URL,IMAGE_BASE_URL } from "../utils/constants";
import { useEffect } from "react";

const ConstructionTypeSolution = () => {
  const { prodType } = useParams();

  // ✅ Must match your store key: constructionsType
  const { type, items } = useSelector((state) => state.constructionsType || {});

  useEffect(() => {
  const container = document.querySelector('.your-scroll-container-class');
  if (container) console.log(container.scrollHeight, container.clientHeight);
}, []);

  

  // ✅ Handle cases safely
  if (!items) return null;

  if (items.length === 0)
    return <h1 className="text-center text-2xl mt-10">No {prodType} solutions found</h1>;

  return (
    
  //  <div className="flex flex-col gap-6 sm:gap-8 px-3 sm:px-6 md:px-8 py-6 overflow-y-auto bg-base-100 border border-base-300 rounded-lg shadow-sm">
  //   <div className="flex flex-col gap-6 sm:gap-8 px-3 sm:px-6 md:px-8 py-6 pb-20 
  //               h-full overflow-y-scroll bg-base-100 border border-base-300 
  //               rounded-lg shadow-sm">

  <div className="flex flex-col gap-6 sm:gap-8 px-3 sm:px-6 md:px-8 py-6 pb-24 
                h-full overflow-y-auto bg-base-100 border border-base-300 
                rounded-lg shadow-sm">


  {items.map((item) => (
    <div
      key={item._id}
      className="collapse collapse-open bg-base-100 border border-base-300 shadow-md rounded-lg"
    >
      {/* Section Titles */}
      <div className="collapse-title font-semibold text-center text-2xl md:text-3xl my-6">
        {item.title}
      </div>

      {/* Description */}
      <div className="collapse-content text-center text-base md:text-lg my-4 leading-relaxed">
        {item.description}
      </div>

      {/* Responsive Image Grid */}
      <div className="flex flex-wrap justify-center gap-4">
       {item.images.map((img, i) => {
       const finalUrl = `${IMAGE_BASE_URL}${img.imageUrl}`;

  return (
    <div
      key={i}
      className="card bg-base-100 w-full sm:w-80 md:w-96 shadow hover:bg-gray-100 transition-all duration-200"
    >
      <figure className="w-full overflow-hidden rounded-lg">
        <img
          src={finalUrl}
          alt={img.imageName || `img${i}`}
          onError={(e) => (e.target.src = "/fallback.jpg")}
          className="w-full h-auto object-cover sm:h-48 md:h-64 lg:h-72"
        />
      </figure>

      <div className="card-body justify-center items-center">
        <h2 className="card-title text-lg md:text-xl font-semibold text-center">
          {img.imageName || `Image ${i + 1}`}
        </h2>
      </div>
    </div>
  );
})}

      </div>
    </div>
  ))}
</div>  
  );
};

export default ConstructionTypeSolution;
