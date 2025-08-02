import { Outlet } from "react-router-dom";
import Adminsidebar from "./sidebar";
import AdminHeader from "./header";


function AdminLayout() {
    return (
        <div className="flex min-h-screen w-full">

           {/*admin ka sidebar scection*/}
           <Adminsidebar/>

           <div className="flex flex-1 flex-col">

            {/*admin ka header part*/}
            <AdminHeader/>

            <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
              <Outlet/>
            </main>

           </div>
        </div>
    );
}

export default AdminLayout;