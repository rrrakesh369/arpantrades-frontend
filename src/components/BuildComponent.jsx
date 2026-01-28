// import React from "react";
// import { useSelector } from "react-redux";
// import { BASE_URL } from "../utils/constants";

// const BuildComponent = () => {
//   const { name, description, title, imageName, imageUrl, loading } =
//     useSelector((state) => state.construction);

//   if (loading) return <p>Loading...</p>;
//   if (!name) return <p>No construction found.</p>;

//   return (
//     <div>
//       {/* Build Section Header */}
//       <h2 className="text-2xl font-bold text-center mt-6 mb-4">
//         Build Solution
//       </h2>

//       {/* Description */}
//       <p className="text-center text-lg md:text-xl my-3">
//         {description || "Explore build-related features."}
//       </p>

//       {/* Image Gallery */}
//       <div className="flex flex-wrap justify-center gap-4">
//         {imageUrl?.map((img, i) => {
//           const normalizedPath = img
//             ?.replaceAll("\\", "/")
//             ?.replace(/^public\//, "");

//           const finalUrl = `${BASE_URL.replace(/\/$/, "")}/${normalizedPath}`;

//           return (
//             <div
//               key={i}
//               className="card bg-base-100 w-80 shadow hover:shadow-lg"
//             >
//               <figure>
//                 <img
//                   src={finalUrl}
//                   alt={imageName?.[i] || `img${i}`}
//                   className="object-cover w-full h-56"
//                   onError={(e) => (e.target.src = "/fallback.jpg")}
//                 />
//               </figure>
//               <div className="card-body text-center">
//                 <h3 className="font-semibold">
//                   {imageName?.[i] || `Image ${i + 1}`}
//                 </h3>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BuildComponent;
