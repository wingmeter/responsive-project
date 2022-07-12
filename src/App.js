import "./App.css";
// import NewNavbar from "./components/NewNavbar/NewNavbar";
import { BrowserRouter } from "react-router-dom";
// import Sidebar from "./components/NewNavbar/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import AdminHeader from './Headers/AdminHeader/AdminHeader'
import UserHeader from './Headers/UserHeader/UserHeader'
import Dropdown from './components/Dropdown'
import GoogleSearchInput from "./components/UI/GoogleSearchInput";
import SearchInput from "./components/UI/Searchpanel";
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Home /> */}
        {/* <AdminHeader /> */}
        <UserHeader />
        {/* <GoogleSearchInput /> */}
        {/* <Dropdown /> */}
        {/* <SearchInput /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
