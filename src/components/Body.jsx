import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Dashbord from './Dashbord'


const Body = () => {  
 
  
  return (
    <div className='overflow-auto h-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
