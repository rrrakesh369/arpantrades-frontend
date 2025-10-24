import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConstruction } from '../utils/ConstructionSlice';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

// const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000"; 
// or however your backend base URL is defined

const ConstructionSolution = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, description, title, imageName, imageUrl, loading } = useSelector(
    (state) => state.construction
  );
  console.log(imageUrl)
  console.log(imageName)

  useEffect(() => {
  if (id && typeof id === 'string') {
    dispatch(fetchConstruction(id));
  }
}, [dispatch, id]);

useEffect(() => {
  const adjustHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    // scrollHeight includes overflow content
    const maxHeight = Math.max(
      body.scrollHeight,
      html.scrollHeight
    );

    const newHeight = maxHeight + 250;

    body.style.minHeight = `${newHeight}px`;
    html.style.minHeight = `${newHeight}px`;
  };

  // Run after DOM updates (next frame)
  const timeout = setTimeout(adjustHeight, 100);

  window.addEventListener('resize', adjustHeight);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener('resize', adjustHeight);
    document.body.style.minHeight = '';
    document.documentElement.style.minHeight = '';
  };
}, [id]);

  if (loading) return <p>Loading...</p>;
  if (!name) return <p>No construction found.</p>;

  return (
    <div className="collapse collapse-open bg-base-100  border-base-300 border">
      <div className="collapse-title font-semibold">{name}</div>
      <div className="collapse-title font-semibold my-9 text-center text-3xl">{title}</div>
      <div className="collapse-content justify-center text-center text-lg md:text-xl my-3  ">{description}</div>

      <div className="flex flex-wrap justify-center gap-4">
        {imageUrl?.map((img, i) => {
          //Normalize Windows-style paths and remove "public/"
          const normalizedPath = img
            ?.replaceAll('\\', '/')
            ?.replace(/^public\//, '');

          const finalUrl = `${BASE_URL.replace(/\/$/, '')}/${normalizedPath}`;

          return (
            <div key={i} className="card bg-base-100 w-96 shadow-sm hover:bg-gray-200">
             <figure>
          <img
            src={finalUrl}
            alt={imageName?.[i] || `img${i}`}
            onError={(e) => (e.target.src = '/fallback.jpg')}
            className="object-cover w-full h-64"
          />
        </figure>
        <div className="card-body justify-center gap-x-4">
          <h2 className="card-title my-4 justify-center">
            {imageName?.[i] || `Image ${i + 1}`}
          </h2>
                {/* <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p> */}
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConstructionSolution;
