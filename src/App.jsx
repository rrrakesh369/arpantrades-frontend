import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./Login"
import About from "./About"
import Body from "./Body"


function App() {

  return (  
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>

          </Route>
          {/* <Route path="/" element={<Body />} >
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>

          </Route> */}
          {/* <Route path="/login" element={<div>Login Page</div>}/>
          <Route path="/test" element={<div>Test Page</div>}/> */}
        </Routes>
    </BrowserRouter>
    {/* <Navbar/> */}
    
    </>
  
  )
}
export default App
