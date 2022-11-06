import {BrowserRouter as Router , Routes , Route,useLocation} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import BlogPage from "./Pages/blog";
import Articles from "./Pages/Article";
import SignIn from "./Pages/SignIn";
import {useLayoutEffect} from 'react';

export const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

function App() {
    return (
        <Router>
           <Wrapper>
               <Routes>
                   <Route path="/" element={<Home/>} exact/>
                   <Route path="blog">
                       <Route path=":heading" element={<Articles/>}/>
                       <Route index  element={<BlogPage/>}/>
                   </Route>
                   <Route path="signin" element={<SignIn/>}/>
               </Routes>
           </Wrapper>
        </Router>
    );
}

export default App;
