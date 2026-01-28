import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConstruction } from "../utils/ConstructionSlice";
import { useParams, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const ConstructionSolution = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");

  const { name, description, title, imageName, imageUrl, loading } =
    useSelector((state) => state.construction);

  useEffect(() => {
    if (id) {
      dispatch(fetchConstruction(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (!name) return <p>No construction found.</p>;

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold my-4">{name}</h2>
        <h3 className="text-xl text-gray-600">{title}</h3>
        <p className="text-lg mt-4">{description}</p>
      </div>

      {/* ✅ Dynamic Content Based on Type */}
      <div className="mt-10 text-center text-2xl font-semibold text-blue-600">
        {type ? `${type} Solutions` : "Select a category (Build, Repair, Protect, Finish)"}
      </div>

      {/* ✅ Gallery Always Visible */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {imageUrl?.map((img, i) => {
          const normalizedPath = img
            ?.replaceAll("\\", "/")
            ?.replace(/^public\//, "");
          const finalUrl = `${BASE_URL.replace(/\/$/, "")}/${normalizedPath}`;

          return (
            <div key={i} className="card bg-base-100 w-96 shadow-sm hover:bg-gray-200">
              <figure>
                <img
                  src={finalUrl}
                  alt={imageName?.[i] || `img${i}`}
                  onError={(e) => (e.target.src = "/fallback.jpg")}
                  className="object-cover w-full h-64"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  {imageName?.[i] || `Image ${i + 1}`}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ConstructionSolution;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchConstruction } from "../utils/ConstructionSlice";
// import { useParams, useLocation } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

// import BuildComponent from "./BuildComponent";
// import RepairComponent from "./RepairComponent";
// import ProtectComponent from "./ProtectComponent";
// import FinishComponent from "./FinishComponent";

// const ConstructionSolution = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const searchParams = new URLSearchParams(location.search);
//   const type = searchParams.get("type"); // Build / Repair / Protect / Finish

//   const { name, description, title, imageName, imageUrl, loading } = useSelector(
//     (state) => state.construction
//   );

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchConstruction(id));
//     }
//   }, [dispatch, id]);

//   if (loading) return <p>Loading...</p>;
//   if (!name) return <p>No construction found.</p>;

//   return (
//     <>
//       {/* Page Header */}
//       <div className="collapse collapse-open bg-base-100 border-base-300 border">
//         <div className="collapse-title font-semibold">{name}</div>
//         <div className="collapse-title font-semibold my-9 text-center text-3xl">{title}</div>
//         <div className="collapse-content justify-center text-center text-lg md:text-xl my-3">
//           {description}
//         </div>
//       </div>

//       {/* Type Based Component Rendering */}
//       <div className="mt-8">
//         {type === "Build" && <BuildComponent />}
//         {type === "Repair" && <RepairComponent />}
//         {type === "Protect" && <ProtectComponent />}
//         {type === "Finish" && <FinishComponent />}
        
//         {!type && (
//           <p className="text-center text-xl text-gray-500 py-4">
//             Select type (Build, Repair, Protect, Finish) to view details.
//           </p>
//         )}
//       </div>

//       {/* Image Gallery */}
//       <div className="flex flex-wrap justify-center gap-4 mt-6">
//         {imageUrl?.map((img, i) => {
//           const normalizedPath = img
//             ?.replaceAll("\\", "/")
//             ?.replace(/^public\//, "");

//           const finalUrl = `${BASE_URL.replace(/\/$/, "")}/${normalizedPath}`;

//           return (
//             <div key={i} className="card bg-base-100 w-96 shadow-sm hover:bg-gray-200">
//               <figure>
//                 <img
//                   src={finalUrl}
//                   alt={imageName?.[i] || `img${i}`}
//                   onError={(e) => (e.target.src = "/fallback.jpg")}
//                   className="object-cover w-full h-64"
//                 />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title justify-center">
//                   {imageName?.[i] || `Image ${i + 1}`}
//                 </h2>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ConstructionSolution;
