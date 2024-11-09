import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DefaultLayout from "./Admin/component/defaultLayout/DefaultLayout";
import Home from "./Admin/Home/Home";
import User from "./Admin/ManagerUser/User";
import Customer from "./Admin/Customer/Customer";
import Product from "./Admin/Product/Product";
import Notify from "./Admin/NotifyCation/Notify";
import Sale from "./Admin/Sale/Sale";
import ListProduct from "./Admin/Communication/ListProduct/ListProduct";
import ListContact from "./Admin/Communication/ListContact/ListContact";
import ListBill from "./Admin/Communication/Bill/Bill";
import Revenua from "./Admin/Communication/Revenua/Revenua";
import Login from "./Admin/Login/Login";

// Hàm kiểm tra đăng nhập
const isAuthenticated = () => {
  // Giả sử bạn lưu token trong localStorage
  return localStorage.getItem("token") !== null;
};

// Wrapper component để bảo vệ các route
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* If the user is authenticated, they can access these routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/quan-ly-nguoi-dung"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <User />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/quan-ly-khach-hang"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <Customer />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/quan-ly-sach"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <Product />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/quan-ly-thong-bao"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <Notify />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/quan-ly-giam-gia"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <Sale />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/thong-ke-sach"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <ListProduct />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/thong-ke-lien-he"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <ListContact />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/thong-ke-hoa-don"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <ListBill />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/thong-ke-doanh-thu"
          element={
            <PrivateRoute>
              <DefaultLayout>
                <Revenua />
              </DefaultLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
