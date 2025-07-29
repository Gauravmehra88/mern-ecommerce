import { Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"


function App(){


    return(
        <div className="flex flex-col overflow-hidden bg-white">
            {/*you can render all the common components that will be rendering in all the pages*/}
          <h1>Header component</h1>

          <Routes>
            <Route path="/auth" element={<AuthLayout/>}>

            </Route>
          </Routes>


        </div>


    )
}

export default App