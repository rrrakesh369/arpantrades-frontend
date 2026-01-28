import React from 'react'
import { useEffect } from 'react';
import { BASE_URL,IMAGE_BASE_URL } from '../utils/constants';

const Dashbord = ({ dashboardData }) => {
  // const {title, imageUrl, loading} = dashboardData
  console.log(dashboardData)
  
  
// const { title, imageUrl, imageName, imageTitle, imageDescription, loading } =  dashboardData 
// const { title, images, loading } = dashboardData;

const { title, images = [], loading } = dashboardData;




  // const cleanPath = (path) => path.replace('/public', '');  

   useEffect(() => {
  const adjustPageHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    // scrollHeight is more reliable for total page height
    const maxScrollHeight = Math.max(body.scrollHeight, html.scrollHeight);
    const newHeight = maxScrollHeight + 250;

    body.style.minHeight = `${newHeight}px`;
    html.style.minHeight = `${newHeight}px`;
  };

  // Run after DOM paints
  const timeout = setTimeout(adjustPageHeight, 100);

  // Optional: update on resize (or after async content loads)
  window.addEventListener('resize', adjustPageHeight);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener('resize', adjustPageHeight);

    document.body.style.minHeight = '';
    document.documentElement.style.minHeight = '';
  };
}, []);
  
  if (loading) return <p>Loading...</p>;

  return (
    <div  className="collapse collapse-open bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold my-9 text-center text-3xl">{title}</div>
  
 {/* <div className="flex flex-wrap justify-center gap-4">
  {imageUrl?.map((img, i) => {
    const normalizedPath = img
      ?.replaceAll("\\", "/")
      ?.replace(/^public\//, "");
    const finalUrl = `${BASE_URL.replace(/\/$/, "")}/${normalizedPath}`;

    return (
      <div
        key={i}
        className="card bg-base-100 w-full sm:w-80 md:w-96 shadow hover:bg-gray-100 transition-all duration-200 rounded-lg overflow-hidden"
      >
        <figure className="w-full overflow-hidden">
          <img
            src={finalUrl}
            alt={`${imageName?.[i] || `Image ${i + 1}`} - ${imageTitle?.[i] || ''} - ${imageDescription?.[i] || ''}`}
            onError={(e) => (e.target.src = "/fallback.jpg")}
            className="w-full h-auto object-cover sm:h-48 md:h-64 lg:h-72"
          />
        </figure>

        <div className="card-body justify-center items-center text-center">
          {imageName?.[i] && (
            <h3 className="card-base text-lg md:text-lg font-medium text-gray-600">
              {imageName[i]}
            </h3>
          )}
          {imageTitle?.[i] && (
            <h1 className="text-title md:text-xl font-semibold">
              {imageTitle[i]}
            </h1>
          )}
          {imageDescription?.[i] && (
           <p className="text-sm md:text-base text-gray-500 mt-2">
              {imageDescription?.[i]
                ? imageDescription[i].length > 200
                  ? `${imageDescription[i].slice(0, 200)}...`
                  : imageDescription[i]
                : "No description available."}
            </p>
          )}
        </div>
      </div>
    );
  })}
</div> */}

{/* <div className="flex flex-wrap justify-center gap-4">
  {images.map((img, i) => {
    const finalUrl = `${IMAGE_BASE_URL}${img.imageUrl}`;

    return (
      <div
        key={i}
        className="card bg-base-100 w-full sm:w-80 md:w-96 shadow hover:bg-gray-100 transition-all rounded-lg overflow-hidden"
      >
        <figure>
          <img
            src={finalUrl}
            alt={img.imageName}
            onError={(e) => (e.target.src = "/fallback.jpg")}
            className="w-full h-64 object-cover"
          />
        </figure>

        <div className="card-body text-center">
          <h3 className="text-sm text-gray-500">
            {img.imageName}
          </h3>

          <h2 className="text-lg font-semibold">
            {img.imageTitle}
          </h2>

          {img.imageDescription && (
            <p className="text-sm text-gray-600">
              {img.imageDescription}
            </p>
          )}
        </div>
      </div>
    );
  })}
</div> */}


<div className="flex flex-wrap justify-center gap-4">
  {images?.map((img, i) => (
    <div key={i} className="card w-full sm:w-80 shadow">
      <figure>
        <img
          src={`${IMAGE_BASE_URL}${img.imageUrl}`}
          alt={img.imageName}
          onError={(e) => (e.target.src = "/fallback.jpg")}
          className="w-full h-64 object-cover"
        />
      </figure>

      <div className="card-body text-center">
        <h3>{img.imageName}</h3>
        <h2>{img.imageTitle}</h2>
        <p>{img.imageDescription}</p>
      </div>
    </div>
  ))}
</div>

</div>
  )  
}

export default Dashbord
