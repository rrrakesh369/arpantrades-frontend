import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import About from "./components/About"
import Body from "./components/Body"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Profile from "./components/Profile"
import Dashbord from "./components/Dashbord"
import ConstructionSolution from "./components/ConstructionSolution"
import ConstructionAllSolution from "./components/ConstructionAllSolution"
import ConstructionTypeSolution from "./components/ConstructionTypeSolution"



function App() {

  return (  
    <>
    <Provider store={appStore}>
         <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />}/>
            
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/dashbord" element={<Dashbord />}/>
             {/* <Route path="/construction/solutions/:id" element={<ConstructionSolution />}/> */}
             {/* <Route path="/construction/solutions" element={<ConstructionAllSolution/>}/> */}
             <Route path="/solutions/:prodType" element={<ConstructionTypeSolution />} />
              

          </Route>
          {/* <Route path="/" element={<Body />} >
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>

          </Route> */}
          {/* <Route path="/login" element={<div>Login Page</div>}/>
          <Route path="/test" element={<div>Test Page</div>}/> */}
        </Routes>
    </BrowserRouter>

    </Provider>
     
    {/* <Navbar/> */}
    
    </>
  
  )
}
export default App
