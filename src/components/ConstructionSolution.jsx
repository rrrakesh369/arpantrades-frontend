import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchConstruction } from '../utils/ConstructionSlice';
import { useParams } from 'react-router-dom';

const ConstructionSolution = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
const {name,description,title, imageUrl, loading } = useSelector((state) => state.construction);

useEffect (()=>{
  
  if (id && typeof id === 'string'){
    dispatch(fetchConstruction(id));
    
  }
  
},[dispatch, id])

if (loading) return <p>Loading...</p>;
if (!name) return <p>No construction found.</p>; 

  return (
    <div  className="collapse collapse-open bg-base-100 border-base-300 border">
      <div className="collapse-title font-semibold">{name}</div>
  <div className="collapse-title font-semibold my-9">{title}</div>
  <div className="collapse-content text-sm">
    {description}
  </div>
  <div className='flex flex-wrap justify-center gap-4'>
   {imageUrl.map((img, i) => (
   <div  key={i} className="card bg-base-100 w-96 shadow-sm">
   <figure>         
            <img                        
              src={`${img}`} // prepend server root
            alt={`img${i}`}
              
            />          
        </figure>
  <div className="card-body justify-center gap-x-4">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
))}
</div>  
</div>
  )
}

export default ConstructionSolution
