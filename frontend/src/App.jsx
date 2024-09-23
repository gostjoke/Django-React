import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";
import Home2 from "./pages/Home2";
import dashboardRoutes from './routers/dashboardRoutes';  // 引入 Dashboard 模块的路由
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} 
          />
          {/* 动态加载 Dashboard 的路由 */}
          {dashboardRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          
          <Route path="/Home2" element={<Home2 />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
