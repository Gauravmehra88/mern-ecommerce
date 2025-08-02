import { Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/feature"
import AdminLayout from "./components/admin-view/layout"
import ShoppingLayout from "./pages/shopping-view/layout"
import NotFound from "./pages/shopping-view/not-found"



function App(){


    return(
        <div className="flex flex-col overflow-hidden bg-white">
            {/*you can render all the common components that will be rendering in all the pages*/}
        

          <Routes>
            
            <Route path="/auth" element={<AuthLayout/>}>
             <Route path="login" element={<AuthLogin/>}/> 
             <Route path="register" element={<AuthRegister/>}/>
           </Route>
           <Route path="/admin" element={<AdminLayout/>}>
               <Route path="dashboard" element={<AdminDashboard/>}/>
               <Route path="products" element={<AdminProducts/>}/>
               <Route path="orders" element={<AdminOrders/>}/>
               <Route path="features" element={<AdminFeatures/>}/>
           </Route>
           <Route>
              <Route path="/shop" element={<ShoppingLayout/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route/>
              <Route/>
           </Route>
          </Routes>
        </div>


    )
}

export default App