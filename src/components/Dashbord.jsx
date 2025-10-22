import React from 'react'
import { useEffect } from 'react';

const Dashbord = ({ dashboardData }) => {
  // const {title, imageUrl, loading} = dashboardData
  console.log(dashboardData)
  
  
const { title, imageUrl, loading } =  dashboardData 

  // const cleanPath = (path) => path.replace('/public', '');  

   useEffect(() => {
    // dispatch(fetchDashboard());

    const body = document.body;
  const html = document.documentElement;

  const currentBodyHeight = parseInt(window.getComputedStyle(body).height, 10);
  const currentHtmlHeight = parseInt(window.getComputedStyle(html).height, 10);
  const maxCurrentHeight = Math.max(currentBodyHeight, currentHtmlHeight);

  const newHeight = maxCurrentHeight + 250;

  body.style.height = `${newHeight}px`;
  html.style.height = `${newHeight}px`;

  return () => {
    body.style.height = `${currentBodyHeight}px`;
    html.style.height = `${currentHtmlHeight}px`;
  };
}, []);
  //   // Get current height
  //   const currentHeight = parseInt(window.getComputedStyle(document.body).height, 10);

  //   // Add 1200px
  //   const newHeight = currentHeight + 1200;

  //   // Apply new height to body
  //   document.body.style.height = `${newHeight}px`;

  //   // Cleanup: restore original height
  //   return () => {
  //     document.body.style.height = `${currentHeight}px`;
  //   };
  // }, [dispatch]); // Dependency array

  if (loading) return <p>Loading...</p>;


  return (
    <div  className="collapse collapse-open bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">{title}</div>
  <div className="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
  <div className='flex flex-wrap justify-center gap-4'>
   {imageUrl?.map((img, i) => (
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

export default Dashbord
