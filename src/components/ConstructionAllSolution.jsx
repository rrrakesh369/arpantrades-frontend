import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { addConstructionAll } from '../utils/ConstructionAllSlice';

const ConstructionAllSolution = () => {
  const constructions = useSelector((store)=>store.constructionAll)
  const dispatch= useDispatch(); 

//   const { items, loading } = useSelector(state => state.constructions);
//   console.log(items)

// if (loading) return <p>Loading...</p>;
// if (!items || items.length === 0) return <p>No constructions found.</p>;

const fetchAllConstructions = async ()=>{
  try {
    const res =await axios.get(BASE_URL+ '/solutions')
   
    dispatch(addConstructionAll(res.data))
    //  console.log(res.data)
  } catch (err) {
    console.error(err.message);
  }
}

useEffect(()=>{
  fetchAllConstructions();
},[])

if(!constructions) return
if(constructions.length ===0) return <h1>No Connection Found</h1>

return (
  <div className="flex flex-col gap-6">
    {constructions.map((construction) => (
     
      <div key={construction._id} className="collapse collapse-open bg-base-100 border-base-300 border">
        <div className="collapse-title font-semibold">{construction.name}</div>
        <div className="collapse-title font-semibold my-9 text-center text-3xl">{construction.title}</div>
        <div className="collapse-content justify-center text-center text-lg md:text-xl my-3">{construction.description}</div>

        <div className="flex flex-wrap justify-center gap-4">
          {construction.imageUrl?.map((img, i) => {
            const normalizedPath = img?.replaceAll("\\", "/")?.replace(/^public\//, "");
            const finalUrl = `${BASE_URL.replace(/\/$/, "")}/${normalizedPath}`;

            return (
              <div key={i} className="card bg-base-100 w-96 shadow-sm hover:bg-gray-200">
                <figure>
                  <img
                    src={finalUrl}
                    alt={construction.imageName?.[i] || `img${i}`}
                    onError={(e) => (e.target.src = "/fallback.jpg")}
                    className="object-cover w-full h-64"
                  />
                </figure>
                <div className="card-body justify-center gap-x-4">
                  <h2 className="card-title my-4 justify-center">
                    {construction.imageName?.[i] || `Image ${i + 1}`}
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

}

export default ConstructionAllSolution
