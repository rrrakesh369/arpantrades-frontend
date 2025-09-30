import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import About from "./About"
import Body from "./components/Body"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"


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
