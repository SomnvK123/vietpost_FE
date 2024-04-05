import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>

                    {/* <Route path="/product" element={<Products/>}/> */}
                    {/* <Route path="/products/:productId" element={<ProductDetail/>}/> */}
                    {/* <Route path='/admin' element={<HomeAdmin />}>
                        <Route index element={<TableAlbum />} />
                        <Route path="/admin/albums" element={<TableAlbum />} />
                        <Route path="/admin/songs" element={<TableSong />} />
                        <Route path="/admin/users" element={<TableUser />} />
                        </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
