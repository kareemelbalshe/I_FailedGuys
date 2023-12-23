// import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./componetes/AppNavbar";
import HomePage from "./componetes/HomePage";
import Contact from "./componetes/Contact";
import About from "./componetes/About";
import Login from "./componetes/Login";
import Sidbar from "./componetes/Sidbar";
import Products from "./componetes/Products";
import Productdetails from "./componetes/Productdetails";
import Cards from "./componetes/Cards";
import Categories from "./componetes/Categories";
import Categoriesdetails from "./componetes/Categoriesdetails";
import Addproduct from "./admin/Pages/Addprodut";
import ProductDetails from "./admin/Pages/ProductDetails";
import EditDetails from "./admin/Pages/EditDetails";
import ProductsA from "./admin/Pages/ProductsA";
import React, { useState } from "react";
import NavbarA from "./admin/NavbarA";
import SidebarA from "./admin/SidebarA";
import Signup from "./componetes/Signup";
import Categorise from "./admin/categorisePage/Categorise";
import KindofProduct from "./admin/categorisePage/KindofProduct";
import NotFound from "./componetes/NotFound";

export const ILogin = React.createContext()

function App() {

  const [isLogin, setIsLogin] = useState(false)
  return (
    <ILogin.Provider value={setIsLogin}>
      <div className="App">
        {isLogin ? <NavbarA /> : <Navbar />}
        <div className="row contant">
          <div
            className={isLogin?"sidebar col-2 text-white-50 d-none d-lg-block":"sidbar col-2 text-white-50 d-none d-lg-block"}
            id="sidbar"
          >{
              isLogin ? <SidebarA /> : <Sidbar />
            }

          </div>
          <div className=" col-8 flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<Productdetails />} />
              <Route path="/products/categories" element={<Categories />} />
              <Route path="/cards" element={<Cards />} />
              <Route
                path="/products/categories/:categoryName"
                element={<Categoriesdetails />}
              />
              <Route path="admin">
                <Route index
                  element={isLogin ?
                    <ProductsA /> : <Navigate to="/login" />
                  }
                />
                <Route path='add'
                  element={isLogin ?
                    <Addproduct /> : <Navigate to="/login" />
                  }
                />
                <Route path=':productId'
                  element={isLogin ?
                    <ProductDetails /> : <Navigate to="/login" />
                  }
                />
                <Route path='edit/:productID'
                  element={isLogin ?
                    <EditDetails /> : <Navigate to="/login" />
                  }
                />
                <Route path='categoriesA'
                  element={isLogin ?
                    <Categorise /> : <Navigate to="/login" />
                  }
                />
                <Route path='categoriesA/:categryName'
                  element={isLogin ?
                    <KindofProduct /> : <Navigate to="/login" />
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />

            </Routes>

          </div>
        </div>
      </div>
    </ILogin.Provider>
  );
}

export default App;
