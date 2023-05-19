import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Error from "./views/Error.jsx";

function App () {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>

                <Route path="/home" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/" element={<Home/>}></Route>  
                <Route path="*" element={<Error/>}></Route>  

                </Routes>   
            </BrowserRouter>

        </div>
    );
};

export default App;
